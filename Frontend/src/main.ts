import App from './App.svelte'
import BackendSocket from './backendsocket'

const app = new App({
  target: document.getElementById('app')
})

export default app





// send message to server every 10 ms
// setInterval(() => {
//   ws.send("hi!");
// }, 1000);

