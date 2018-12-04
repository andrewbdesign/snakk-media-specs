import React from 'react';
import ReactDOM from 'react-dom';
import MediaSpecsApp from './containers/MediaSpecsApp';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css'
import './styles/app.scss'

ReactDOM.render(<MediaSpecsApp />, document.getElementById('root'));
serviceWorker.unregister();
