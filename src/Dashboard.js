import React from 'react';
import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import { List, ListItem} from 'react-toolbox/lib/list';
import ThemedButton from './themed-button/ThemedButton';
const Dashboard = () => (
    <div style={{display:'flex'}}>
        <Card style={{width: '50%', marginRight:'1rem'}}>
            <CardTitle title="Admins"/>
            <List selectable ripple>
                <ListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                    caption='Dr. Manhattan'
                    legend="Jonathan 'Jon' Osterman"
                    rightIcon='more_vert'
                />
                <ListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                    caption='Ozymandias'
                    legend='Adrian Veidt'
                    rightIcon='more_vert'
                />
                <ListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
                    caption='Rorschach'
                    legend='Walter Joseph Kovacs'
                    rightIcon='more_vert'
                />
            </List>
            <CardActions>
                <ThemedButton label="Action 1"/>
                <Button label="Action 2"/>
            </CardActions>
        </Card>
        <Card style={{width: '50%', marginLeft:'1rem'}}>
            <CardTitle title="Accounts"/>
            <List selectable ripple>
                <ListItem
                    caption='A-0192-Z019191'
                    legend="A Company"
                />
                <ListItem
                    caption='B-0192-Z019191'
                    legend='B Company'
                />
                <ListItem
                    caption='C-0192-Z019191'
                    legend='C Company'
                />
            </List>
            <CardActions>
                <Button label="Action 2"/>
            </CardActions>
        </Card>
    </div>
);
export default Dashboard;