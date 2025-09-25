import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import * as buffer from "buffer";

if (typeof (window).Buffer === "undefined") {
    (window).Buffer = buffer.Buffer;
}

createApp(App).mount('#app')
