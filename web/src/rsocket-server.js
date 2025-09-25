import {IdentitySerializer, JsonSerializer, RSocketServer} from 'rsocket-core';
import RSocketWebSocketServer from "rsocket-websocket-server";
import { Single } from 'rsocket-flowable';

const WebSocketTransport = RSocketWebSocketServer.default;
const host = '127.0.0.1';
const port = 9898;

const transportOpts = {
    host: host,
    port: port,
};

const transport = new WebSocketTransport(transportOpts);

const statuses = {
    PENDING: "pending",
    CANCELLED: "cancelled"
};

const serializers = {
    data: JsonSerializer,
    metadata: IdentitySerializer,
}

const errorHandler = (e) => {
    console.log(e);
}

const getRequestHandler = (requestingRSocket, setupPayload) => {
    console.log(`setupPayload sent`, setupPayload);

    function handleRequestResponse(payload) {
        let status = statuses.PENDING;

        console.log(`requestResponse request`, payload);

        return new Single((subscriber) => {

            /**
             * In the event that the client cancels the request before
             * the server can respond, we will change our status to cancelled
             * and avoid calling `onComplete` on the `subscriber` instance in the
             * `setTimeout` callback.
             */
            function handleCancellation() {
                status = statuses.CANCELLED;
                console.log('2222222222')
            }

            subscriber.onSubscribe(() => handleCancellation());

            /**
             * Leverage `setTimeout` to simulate a delay
             * in responding to the client.
             */
            setTimeout(() => {

                /**
                 * If the client cancelled the request we can
                 * retrun early and avoid doing any of the work below.
                 */
                if (status === statuses.CANCELLED) {
                    return;
                }

                const msg = `${new Date()}`;
                console.log(`requestResponse response`, msg);
                try {
                    subscriber.onComplete({
                        data: null,
                        metadata: null, // or new Buffer(...)
                    });
                } catch (e) {
                    subscriber.onError(e);
                }
            }, 100);
        });
    }

    return {
        requestResponse: handleRequestResponse,
    };
};

const rSocketServer = new RSocketServer({
    serializers,
    errorHandler,
    transport,
    getRequestHandler,
});

console.log(`Server starting on port ${port}...`);

rSocketServer.start();

