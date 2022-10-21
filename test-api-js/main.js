const app = require('./index.js');

const start = (port) =>{
    try{
        app.listen(port, () => console.log(`Listening on port ${port}...`));
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

start(3000);