const mongoose = require('mongoose');

console.log(`Connecting to ${process.env.MONGODB_URL}`);
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`MONGODB CONNECTED`)
}).catch(error => {
    console.log("Error", error);
})