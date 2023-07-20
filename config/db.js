const mongoose = require('mongoose');
const colors = require("colors");

const connectDB = async () => {
   mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser:true ,
    useUnifiedTopology:true,
   })
   .then(()=>{console.log(`Connected ${mongoose.connection.host}`.bgRed.white)})
   .catch((err)=>{console.log(`Error in connection ${err}`)})

}

module.exports = connectDB