const express = require('express');
const app = express();
const http=require('http').Server(app);
const io=require('socket.io')(http);
const PORT=process.env.PORT || 7000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.get('/subject', (req, res) => {
    res.render('subject.ejs');
});

app.get('/experimenterCheck', (req, res) => {
    res.render('experimenterCheck.ejs');
});

app.get('/experimenter', (req, res) => {
    res.render('experimenter.ejs');
});

io.on('connection',function(socket){
    socket.on('message',function(msg){
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
});

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});