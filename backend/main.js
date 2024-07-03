/* ------ Package imports ------*/
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
/* ----- Routes Imports ----- */
const camerasRoutes = require('./routes/camera.routes');
const ordersRoutes = require('./routes/order.routes');

/* ------ initialization ------*/
const app = express();
dotenv.config();
// mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`)
// .then(()=>{console.log("Connected!!");})
// .catch(()=>{(err)=>{console.log(err);}})
const bootstrap =async()=>{
    try{
        await mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`);
        app.listen(process.env.APP_PORT, ()=>{console.log(`App started on: http://localhost:${process.env.APP_PORT}`)});
    } 
    catch (err) {

    }
}

/* ----- Global Middlewares ----- */
app.use(express.json());
app.use(cors());
/* ----- Using Routes ----- */
app.use(camerasRoutes);
app.use(ordersRoutes);

/* ------ App StartUp ------*/
bootstrap();