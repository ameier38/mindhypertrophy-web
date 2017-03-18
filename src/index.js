import 'babel-polyfill'
import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Root from './containers/Root'

// needed for material-ui
injectTapEventPlugin();

const mountNode = document.getElementById('root')

render(
    <MuiThemeProvider>
        <Root />
    </MuiThemeProvider>
    , mountNode
)
