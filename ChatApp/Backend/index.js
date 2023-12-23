const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const {Server } = require('socket.io');
const io = new Server(server);
const connect = require('./config/db-config')
const {PORT}= require('./config/server-config');
const { Socket } = require('dgram');
const Group = require('./models/group')
const Chat = require("./models/chat")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use('/', express.static(__dirname + '/public'))

io.on('connection', (socket)=>{
    
    socket.on('join_room', (data)=>{
          socket.join(data.roomid);
    })

    socket.on('new_msg', async (data)=>{
        const chat = await Chat.create({
            content:data.message,
            sender:data.sender,
            roomid:data.roomid

        })
       io.to(data.roomid).emit('msg_rcvd', data)
    })
})

app.get('/chat/:roomid/:user', async (req,res,)=>{
    const group = await Group.findById(req.params.roomid);
    const chat = await Chat.find({
        roomid:req.params.roomid
    })
     console.log("chat", chat)
    res.render('index', {
        roomid:req.params.roomid,
        user:req.params.user,
        groupname:group.name,
        previousmsgs:chat
    })
})

app.get('/group', async (req,res)=>{
    res.render('group');
})

app.post('/group', async (req,res)=>{
    await Group.create({
        name:req.body.name
    })

    res.redirect('/group');
})

server.listen(PORT, async()=>{
    console.log(`Server runnnig on port ${PORT}`)
    await connect();
    console.log("db connected")
})