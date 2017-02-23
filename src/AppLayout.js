import React, {Component} from 'react';
import {AppBar, Layout, NavDrawer, Panel} from 'react-toolbox';
import {List, ListItem} from 'react-toolbox/lib/list';
import Dashboard from './Dashboard';
import Switch from 'react-toolbox/lib/switch';
const DAY_ID = 'theme-default';
const NIGHT_ID = 'theme-black';
const DISABLED = 'disabled';
class AppLayout extends Component {
    state = {
        navActive: false,
        dayTheme: false
    };

    render () {
        return (
            <div style={{height: '100vh'}}>
                <AppBar title="Mission sampler" rightIcon="menu"
                        onRightIconClick={e=>this.setState({navActive:!this.state.navActive})}>
                    <Switch
                        checked={this.state.dayTheme}
                        label="Day"
                        onChange={()=>this.switchTheme()}
                    />
                </AppBar>
                <Layout>
                    <NavDrawer active={this.state.navActive}>
                        <List selectable ripple>
                            <ListItem
                                caption='Home'
                                leftIcon='home'
                            />
                            <ListItem
                                caption='Accounts'
                                leftIcon='supervisor_account'
                            />
                            <ListItem
                                caption='Settings'
                                leftIcon='settings'
                            />
                        </List>
                    </NavDrawer>
                    <Panel>
                        <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                            <Dashboard/>
                        </div>
                    </Panel>
                </Layout>
            </div>
        );
    }

    switchTheme () {
        this.setState({dayTheme: !this.state.dayTheme}, ()=> {
            let day = document.getElementById(DAY_ID);
            let night = document.getElementById(NIGHT_ID);
            if (this.state.dayTheme) {
                day.removeAttribute(DISABLED);
                night.setAttribute(DISABLED, 'true');
            }else{
                night.removeAttribute(DISABLED);
                day.setAttribute(DISABLED, 'true');
            }
        });
    }
}

export default AppLayout;