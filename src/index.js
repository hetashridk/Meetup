import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

// BrowserRouter:- it is in the end a component itself, so we can use it as an opening and closing tag
ReactDOM.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>, 
document.getElementById('root')
);


