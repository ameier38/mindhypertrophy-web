import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { 
    blueGrey500, blueGrey700, grey400, 
    grey100, grey500, blueA200 
} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blueGrey500,
        primary2Color: blueGrey700,
        primary3Color: grey400,
        accent1Color: blueA200,
        accent2Color: grey100,
        accent3Color: grey500
    },
    appBar: {
    },
})

export default muiTheme