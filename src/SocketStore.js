import { types } from 'mobx-state-tree'

import io from 'socket.io-client';
// const socket = io('http://localhost:5000')

const Socket = types.model("SocketStore", {
    socket: types.frozen(),
    username: types.string

}).views(self => ({
    getUsername() {
        return self.username
    }
})).actions(self => {
    function register(name) {
        self.username = name;
        // console.log(self.socket, 'in register');
        // self.socket.emit('register','sexy eric')
        // console.log('is connected?:',self.socket.connected)
        // console.log("register emitted", name)
    }
    function setName(name) {
        self.username = name;
    }
    function setSocket(socket){
        self.socket=socket;
        
    }
    function afterCreate() {
    }
    return {
        register,
        setName,
        afterCreate,
        setSocket
    }
});

const socketStore = Socket.create({
    socket:{},// users is not required really since arrays and maps are optional by default since MST3
    username: ""
})

export default socketStore;