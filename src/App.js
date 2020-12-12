import React,{useEffect,useState} from 'react';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import './App.css';
import Pusher  from 'pusher-js'
import axios from './components/axios'

export default function App() {

  const [messages,setmessages] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:9000/messages/sync').then(response =>{
          setmessages(response.data)
        })
    },[])
    
    useEffect(()=>{
        var pusher = new Pusher('d926bc8f9d052d007f95', {
            cluster: 'ap2'
          });

          var channel = pusher.subscribe('message');
          channel.bind('inserted', function(newmessages) {
            setmessages([...messages,newmessages])
          });
          
          return ()=>{
            channel.unbind_all();
            channel.unsubscribe();
          };

    }, [messages]);
    console.log(messages);

    return (
        <div className="app">
               <div className="app_body">
                    <Sidebar />
                    <Chat messages={messages}/>
               </div>
        </div>
    )
}
