import { createApp } from 'vue'
import App from './App.vue'
import "./style/__base.scss";
export const app = createApp(App);
// Router
import router from "./router";
app.use(router);

app.mount("#app");
