import React from 'react'
import './sidebarchat.css';
import { Avatar } from '@material-ui/core';

export default function Sidebarchat() {
    return (
        <div>
            <div className="sidebarchat">
                <Avatar/>
                <div className="sidebar_info">
                    <h2>Chat room name</h2>
                    <p>This is last message</p>
                </div>
            </div>
        </div>
    )
}
