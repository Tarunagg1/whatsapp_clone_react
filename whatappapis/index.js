import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app  = express();
import messagemodel from './dbmessages.js';
import Pusher from 'pusher';

const port = process.env.PORT || 9000;
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://tarun:Ipnwt9gojsKzoDOW@cluster0.ww0ok.mongodb.net/whatsapp?retryWrites=true&w=majority';
// const localdb = 'mongodb://localhost:27017/tarun';

const pusher = new Pusher({
    appId: "1121030",
    key: "d926bc8f9d052d007f95",
    secret: "d44c73a383fc75b30c39",
    cluster: "ap2",
    useTLS: true
});



mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
});
const connection = mongoose.connection;

connection.once('open', () => {
        console.log('mongoDB database connection established');
         const msgcollenction = connection.collection('messagecontents');
            const changeStream = msgcollenction.watch();
            changeStream.on('change', (change) => {
                if(change.operationType == 'insert'){
                    const messagedata = change.fullDocument;
                        pusher.trigger('message','inserted',{
                            name: messagedata.name,
                            message: messagedata.message,
                            timestamp:messagedata.timestamp,
                            isrecived:messagedata.isrecived
                        })
                }else{
                    console.log('error accure in the pusher')
                }
        });
	}).on('error', (err) => {
		console.log('Error: ', err);
});


app.get('/',(req,res)=>{
    res.status(200).send("hello world");
})

app.post('/messages/new',(req,res)=>{
    const dbmessage = req.body;
    messagemodel.create(dbmessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data);
        }
    })
})

app.get('/messages/sync',(req,res)=>{
    messagemodel.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data);
        }
    })
})

app.listen(port,()=>{
    console.log("server listining at port: "+port);
})


