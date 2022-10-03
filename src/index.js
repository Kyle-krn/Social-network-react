import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Store } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntrieTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} 
                dispatch={Store.dispatch.bind(Store)}/>
        </React.StrictMode>
    );
}

rerenderEntrieTree(Store.getState());
// debugger;

// subscribe(rerenderEntrieTree);
Store.subscribe(rerenderEntrieTree)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();