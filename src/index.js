import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
