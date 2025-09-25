start server

run spring-boot application DemoApplication

start client

cd web
npm install
npm run dev


visit [http://localhost:5173](http://localhost:5173/) on chrome 
click send button

you will find error on the server side,such as


2025-09-26T00:15:21.955+08:00 ERROR 40172 --- [demo] [ctor-http-nio-2] io.rsocket.core.RSocketRequester         : Unexpected error during frame handling

java.lang.IllegalStateException: Client received message for non-existent stream: 808202284, frame type: METADATA_PUSH
	at io.rsocket.core.RSocketRequester.handleMissingResponseProcessor(RSocketRequester.java:299) ~[main/:na]
	at io.rsocket.core.RSocketRequester.handleFrame(RSocketRequester.java:254) ~[main/:na]
	at io.rsocket.core.RSocketRequester.handleIncomingFrames(RSocketRequester.java:220) ~[main/:na]
	at reactor.core.publisher.LambdaSubscriber.onNext(LambdaSubscriber.java:160) ~[reactor-core-3.7.4.jar:3.7.4]
	at io.rsocket.core.ClientServerInputMultiplexer$InternalDuplexConnection.onNext(ClientServerInputMultiplexer.java:276) ~[rsocket-core-1.1.5.jar:na]
	at io.rsocket.core.ClientServerInputMultiplexer.onNext(ClientServerInputMultiplexer.java:132) ~[rsocket-core-1.1.5.jar:na]
	at io.rsocket.core.ClientServerInputMultiplexer.onNext(ClientServerInputMultiplexer.java:48) ~[rsocket-core-1.1.5.jar:na]
	at io.rsocket.core.SetupHandlingDuplexConnection.onNext(SetupHandlingDuplexConnection.java:119) ~[rsocket-core-1.1.5.jar:na]
	at io.rsocket.core.SetupHandlingDuplexConnection.onNext(SetupHandlingDuplexConnection.java:19) ~[rsocket-core-1.1.5.jar:na]
	at reactor.core.publisher.FluxMap$MapSubscriber.onNext(FluxMap.java:122) ~[reactor-core-3.7.4.jar:3.7.4]
	at reactor.netty.channel.FluxReceive.drainReceiver(FluxReceive.java:292) ~[reactor-netty-core-1.2.4.jar:1.2.4]
	at reactor.netty.channel.FluxReceive.onInboundNext(FluxReceive.java:401) ~[reactor-netty-core-1.2.4.jar:1.2.4]
	at reactor.netty.channel.ChannelOperations.onInboundNext(ChannelOperations.java:435) ~[reactor-netty-core-1.2.4.jar:1.2.4]
	at reactor.netty.http.server.HttpServerOperations.onInboundNext(HttpServerOperations.java:849) ~[reactor-netty-http-1.2.4.jar:1.2.4]
	at reactor.netty.http.server.WebsocketServerOperations.onInboundNext(WebsocketServerOperations.java:226) ~[main/:1.2.4]
	at reactor.netty.channel.ChannelOperationsHandler.channelRead(ChannelOperationsHandler.java:115) ~[reactor-netty-core-1.2.4.jar:1.2.4]
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.rsocket.transport.netty.server.BaseWebsocketServerTransport$PongHandler.channelRead(BaseWebsocketServerTransport.java:60) ~[rsocket-transport-netty-1.1.5.jar:na]
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.handler.codec.ByteToMessageDecoder.fireChannelRead(ByteToMessageDecoder.java:346) ~[netty-codec-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:318) ~[netty-codec-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1357) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:868) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:796) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:732) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:658) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562) ~[netty-transport-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:998) ~[netty-common-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74) ~[netty-common-4.1.119.Final.jar:4.1.119.Final]
	at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30) ~[netty-common-4.1.119.Final.jar:4.1.119.Final]
	at java.base/java.lang.Thread.run(Thread.java:842) ~[na:na]

and the example works fine on firefox
