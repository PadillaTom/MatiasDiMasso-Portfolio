import React from 'react';
import ReactDOM from 'react-dom';
import "./CSS/index.css";

import {App} from "./Components/App"

import {MenusProvider} from "./Context/MenusContext"



ReactDOM.render(
  <MenusProvider>
    <App />
  </MenusProvider>,
  document.getElementById('root')
);
