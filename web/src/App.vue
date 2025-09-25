<template>
  <main>
    <input v-model="serverUrl">
    <br>
    <button @click="sendMessage(sendLength)">发送信息</button>
    <input v-model="sendLength">
    <br>    <br>
    <button @click="sendMessage(5)">发送小信息</button>
    <br>    <br>
    <button @click="sendMessage(32761)">发送大信息</button>
    <br>    <br>
    <button @click="initRequest">开启连接</button>
    <br>    <br>
    <button @click="closeConn">关闭连接</button>
  </main>
</template>
<script setup>

import {onMounted, onUnmounted, ref} from 'vue';
import {
  APPLICATION_JSON,
  IdentitySerializer,
  JsonSerializer,
  MESSAGE_RSOCKET_ROUTING,
  RSocketClient
} from "rsocket-core";
import RSocketWebSocketClient from "rsocket-websocket-client";

onMounted(() => {
  console.log('onMounted');
  initRequest();
})

onUnmounted(() => {
  console.log('onUnmounted');
  if (rSocket) {
    rSocket.close();
  }
})

const sendLength = ref(32761);
const serverUrl = ref('127.0.0.1:6565');

let rSocket;

async function initRequest() {
  const transportOpts = {
    url: 'ws:' + serverUrl.value,
    debug: true,
    lengthPrefixedFrames: false
  }

  const setup = {
    dataMimeType: APPLICATION_JSON.string,
    keepAlive: 10000,
    lifetime: 90000,
    metadataMimeType: MESSAGE_RSOCKET_ROUTING.string,
  }

  const serializers = {
    data: JsonSerializer,
    metadata: IdentitySerializer,
  }

  const errorHandler = (e) => {
    console.log(e);
  }

  const transport = new RSocketWebSocketClient(transportOpts);
  const client = new RSocketClient({setup, transport, serializers, errorHandler});
  rSocket = await client.connect();
  console.log('init client');
  return rSocket;
}

function closeConn() {
  if (rSocket) {
    rSocket.close();
  }
}

// 发送消息
function sendMessage(length) {
  if (!rSocket) {
    return;
  }

  const dataArr = [];
  for (let i = 0; i< length; i++) {
    dataArr.push(0);
  }

  rSocket.requestResponse({
    data: dataArr,
    metadata: String.fromCharCode('hello'.length) + 'hello'
  }).subscribe({
    onComplete: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    }
  })
}

</script>

<style scoped>
</style>
