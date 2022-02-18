import React from 'react'
import { render } from 'react-dom'
import 'ace-css/css/ace.min.css'

import App from './components/App'
import './index.css'

render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'))
