import React from 'react';
import './sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import Sidebarchat from './Sidebarchat';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src='https://cdn.dribbble.com/users/1041205/screenshots/3636353/dribbble.jpg?compress=1&resize=400x300' />
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_container">
                    <SearchOutlined/>
                    <input placeholder="Search or start chat now" type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <Sidebarchat/>
                <Sidebarchat/>
            </div>
            {/* <div className="sidebar_header"></div>
            <div className="sidebar_header"></div> */}
        </div>
    )
}

export default Sidebar
