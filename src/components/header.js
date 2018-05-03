import React, {Component} from 'react';
//appbar
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui';

class Header extends Component {
    constructor(props){
        super (props)
        this.state={
            sidebaropen:false
        }
    }
    render(){
        return(
        <div>
            <AppBar
                title="SAROJ KHADKA"
                onLeftIconButtonClick={() => this.toggleSidebar()}
            />
            <Drawer 
            open={this.state.sidebaropen}
            docked={false}
            onRequestChange={() => this.toggleSidebar()}
            >
                <MenuItem>First</MenuItem>
                <MenuItem>Second</MenuItem>
            </Drawer>
        </div>
        )
    }

toggleSidebar() {
    this.setState({sidebaropen: !this.state.sidebaropen})}
}
export default Header