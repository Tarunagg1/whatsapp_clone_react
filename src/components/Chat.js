import React,{useState} from 'react'
import './chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from 'axios';

export default function Chat({messages}) {
    const [input,setinput] = useState('');

    const sendmessage = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:9000/messages/new',{
            message:input,
            name:"aravinding",
            timestamp:"21 jan 2020",
            isrecived:false

        })
        setinput('');
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerinfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at...</p>
                </div>
                <div className="header_right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                    {messages.map((mes) => (
                        <p className={`chat_mesaage ${mes.isrecived && "chat_reciver"}`}>
                            <span className="chat_name">{mes.name}</span>
                            {mes.message}
                            <span className="chat_timestamp">{mes.timestamp}</span>
                        </p>
                    ))}
              
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" value={input} onChange={e => setinput(e.target.value)} placeholder="Type a message" />
                    <button onClick={sendmessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}
