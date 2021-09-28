import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import menuIcon from '../../assets/menu.png'
import { NavLink } from 'react-router-dom';
import {logoutUser} from '../auth/authFunctions'

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleLogout = () => {
        logoutUser()
        window.location.reload(true)
    }

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List
                sx={{
                    fontSize: "180%",
                    marginTop: "15%",
                    marginBottom: "15%",
                    display: "flex",
                    flexDirection: 'column',
                }}
            >
                <NavLink
                className='sidebar-link'
                to='/profile'>
                    <ListItem button >
                        Profile
                    </ListItem>
                </NavLink>

                <ListItem button onClick={handleLogout} >
                    Logout
                </ListItem>

            </List>
            <Divider />
        </Box>
    );

    const anchor = <img id='settingsIcon' src={menuIcon} alt="settings" />

    return (
        <div>

            <React.Fragment>
                <Button
                    sx={{
                        margin: 0
                    }}
                    onClick={toggleDrawer(anchor, true)}>
                    <img id='settingsIcon' src={menuIcon} alt="settings" />
                </Button>
                <Drawer
                    anchor={'left'}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </React.Fragment>

        </div>
    );
}
