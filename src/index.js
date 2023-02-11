const express=require('express');
const app= express();
const morgan = require ('morgan');
//configuracion
app.set('port',process.env.PORT||5000);//utilizo process para validar el port


//middleware:  Brinda funcionalidad para conectar las aplicaciones de manera inteligente y eficiente, de forma que se pueda innovar más rápido.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//routes
app.use(require('../routes/index'));
app.use('/api/movies',require('../routes/movies'));

//inicio el servidor
app.listen(5000,()=>{
    console.log(`Servidor levantado ${app.get('port')}`);
});