import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import WithMenu from './lib/templates/WithMenu';
import { components } from './example/components';

ReactDOM.render(
  <React.StrictMode>
    <WithMenu routes={[{ name: "Home" }, { name: "Colors" }, ...components.map((component) => ({ name: component.title }))]} >
      <App />
    </WithMenu>
  </React.StrictMode>,
  document.getElementById('root')
);