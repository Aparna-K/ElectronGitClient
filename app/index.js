// let's go!
// import React from 'react';
//
import { render } from 'react-dom';
//
// import App from './components/App';
//
// import { Provider } from 'react-redux';
// import store, { history } from './store';
//
// const router = (
//     <Provider store={store}>
//       {App}
//     </Provider>
// );
//
// render(router, document.getElementById('root'));

// In renderer process (web page).
const {ipcRenderer} = require('electron');
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg); // prints "pong"
});
ipcRenderer.send('asynchronous-message', 'ping');

render(<div>Hello</div>, document.getElementById('root'));