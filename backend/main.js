/* ------ Package imports ------*/
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

/* ----- Middlewares Imports ----- */
const notFoundMiddleware = require('./middelwares/notFound.middleware');
const errorMiddleware = require('./middelwares/error.middleware');

/* ----- Routes Imports ----- */
const camerasRoutes = require('./routes/camera.routes');
const ordersRoutes = require('./routes/order.routes');

/* ------ initialization ------*/ 
const app = express();
dotenv.config();

/* ----- Global Middlewares ----- */
app.use(express.json());
app.use(cors());
app.use('/public', express.static('./public'));

/* ----- Using Routes ----- */
app.use(camerasRoutes);
app.use(ordersRoutes);

/* ----- Error Middlewares ----- */
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`)
// .then(()=>{console.log("Connected!!");})
// .catch(()=>{(err)=>{console.log(err);}})
const bootstrap =async()=>{
    try{
        await mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`);
        app.listen(process.env.APP_PORT, ()=>{console.log(`App started on: http://localhost:${process.env.APP_PORT}`)});
    } 
    catch (err) {
        console.log("Failed to start the server");
    }
}

/* ------ App StartUp ------*/
bootstrap();