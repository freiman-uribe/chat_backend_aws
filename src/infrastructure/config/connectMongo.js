const mongoose = require('mongoose');
require("dotenv").config();

const connect = async () => {
    console.log("process.env.URL_CONNECT>>>", process.env.URL_CONNECT);
    
    try {
        await mongoose.connect("mongodb://localhost:27017/classRoom", {
          useUnifiedTopology: true,
        });
        console.log('Conexion exitosa a la BD');
    } catch (error) {
        console.error('🚀 ~ connect ~ error:', error);
        process.exit(1);
    }
}

module.exports = connect;