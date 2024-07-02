
import {Server} from  "socket.io"

export default class MessageIO extends Server{
    static socketlist = {}
    static clientlist = {}
    constructor(httpserver){
        super(httpserver)
        this.on("connection",(socket)=>{
            console.log(socket.request._query)
            const  {u_id} = socket.request._query
            MessageIO.clientlist[socket.id] = u_id
            MessageIO.socketlist[u_id] = socket
            socket.on("test",MessageIO.test)
            socket.on("disconnect",(reason)=>{
                delete MessageIO.socketlist[MessageIO.clientlist[socket.id]]
                delete MessageIO.clientlist[socket.id]
            })
        })
    }


    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++ TestEvents ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    static test(args){
        // console.log(args)
        this.emit("test",MessageIO.testreturn(this))
    }
    static testreturn(args){
        console.log(Object.keys(MessageIO.clientlist))
        return `hii ${args.client.id}`
    }
    
}
