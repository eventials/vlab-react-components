import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import WithMenu from './lib/templates/WithMenu';
import { components } from './example/components';
import { Typography } from './lib';

ReactDOM.render(
  <React.StrictMode>
    <WithMenu sections={[{ title: <><Typography type="caption" color="darkGray">Compo</Typography><Typography type="caption" color="secondary">nentes</Typography></>, routes: [{ name: "Home" }, { name: "Colors" }, ...components.map((component) => ({ name: component.title })), { name: "Icons" }] }]} >
      <App />
    </WithMenu>
  </React.StrictMode>,
  document.getElementById('root')
);