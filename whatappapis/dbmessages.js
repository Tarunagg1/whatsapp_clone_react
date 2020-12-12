import mongoose from 'mongoose';

const whatsappmessageschema = mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    isrecived:Boolean
});

export default mongoose.model('messagecontents',whatsappmessageschema);

