import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app


const ws = new WebSocket('ws://127.0.0.1:51222');

ws.addEventListener('open', () => {
  console.log('connected');
  ws.send('Hello Server!');
}
);


ws.addEventListener('close', () => {
  console.log('closed');
}
);


ws.addEventListener('error', (e) => {
  console.log('error', e);
}
);

ws.addEventListener('message', (data) => {
  console.log(data.data);
}
);


// send message to server every 10 ms
// setInterval(() => {
//   ws.send("hi!");
// }, 1000);

