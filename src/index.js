import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import {Provider} from './storeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntrieTree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntrieTree(store.getState());


store.subscribe(() => {
    let state = store.getState();
    rerenderEntrieTree(state);
})


reportWebVitals();