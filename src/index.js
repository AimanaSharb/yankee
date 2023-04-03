import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './scss/style.scss'
import {Provider} from "react-redux"
import { ChakraProvider } from '@chakra-ui/react'
import './utils/i18n'
import store, {persistor} from "./redux";
import {PersistGate} from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ChakraProvider>
                <BrowserRouter >
                    <App/>
                </BrowserRouter>
            </ChakraProvider>
        </PersistGate>
    </Provider>
);

