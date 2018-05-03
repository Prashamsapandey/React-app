import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import Login from './components/login'
class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
       {/* <AppBar title="My App" /> */}
       <Login/>
      </MuiThemeProvider>
    );
  }
}

export default App;
