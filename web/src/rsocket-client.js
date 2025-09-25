import {WebsocketClientTransport} from 'rsocket-websocket-client';
import {
    RSocketConnector
} from 'rsocket-core';
import {
    decodeCompositeMetadata,
    decodeRoutes,
    encodeCompositeMetadata,
    encodeRoute,
    WellKnownMimeType,
} from "rsocket-composite-metadata";
import {Buffer} from "buffer";

const transportOpts = {
    url: 'ws:' + '127.0.0.1:6565',
    debug: true
}

const setup = {
    dataMimeType: WellKnownMimeType.APPLICATION_JSON.toString(),
    keepAlive: 10000,
    lifetime: 90000,
    metadataMimeType: WellKnownMimeType.MESSAGE_RSOCKET_ROUTING.toString(),
}

console.log(setup)

const responder = {
    requestResponse: function (payload, responderStream) {
        console.log('get req from server:' + payload.data);
        responderStream.onNext(
            {
                data: Buffer.from(new Array(40000).fill(0).toString()),
            },
            true
        )
        return {
            cancel: () => {
                console.log("cancelled");
            },
            onExtension: () => {
                console.log("Received Extension request");
            },
        };
    }
}

const serializers = {
 //   data: JsonSerializer,
 //   metadata: IdentitySerializer,
}

const errorHandler = (e) => {
    console.log(e);
}

const transport = new WebsocketClientTransport(transportOpts);
const client = new RSocketConnector({transport: transport, setup: setup, responder: responder });
var rSocket = await client.connect();
console.log('init client');
Promise.resolve( new Promise(function () {})).then(() => {})