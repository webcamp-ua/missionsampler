import React, {Component} from 'react';
import {AppBar, Layout, NavDrawer, Panel, Button} from 'react-toolbox';
import { List, ListItem} from 'react-toolbox/lib/list';
import Dashboard from './Dashboard';

class AppLayout extends Component {
    state = {
        navActive: false,
        dayTheme: true
    };

    render () {
        return (
            <div style={{height: '100vh'}}>
                <AppBar title="Mission sampler" rightIcon="menu"
                        onRightIconClick={e=>this.setState({navActive:!this.state.navActive})}>
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
}

export default AppLayout;