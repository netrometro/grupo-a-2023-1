import {FastifyInstance} from "fastify";
import { findUser, findUsers, loginUser, registerUser, removeUser, upgradeUser } from "../controller/userController";

async function userRoutes(server: FastifyInstance){
    server.get('/:id', findUser);
    server.get('/users', findUsers);
    server.put('/:id', upgradeUser)
    server.post('/', registerUser);
    server.post('/login', loginUser);
    server.post('/delete/:id', removeUser);    
}

export default userRoutes;