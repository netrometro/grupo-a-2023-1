import {FastifyReply, FastifyRequest} from "fastify";
import { login, createUser, deleteUser, listUser, listUsers, updateUser } from "../service/userService";
import { userDTO } from "../dto/userDTO";

export async function registerUser (
    request: FastifyRequest<{Body: userDTO}>, 
    reply: FastifyReply){

    const body = request.body;

    try{
        const user = await createUser(body)

        return reply.code(201).send(user);
    } catch (e){
        console.log(e);
        return reply.send(e);
    }
}

export async function loginUser(request: FastifyRequest<{Body: userDTO}>,  reply: FastifyReply){
    const body = request.body;

    try{
        const user = await login(body);
        return reply.code(201).send(user);
    }
    catch(error){
        return reply.send(error);
    }
}

export async function findUser(request: FastifyRequest, reply: FastifyReply) {
    const id = Object(request.params);
    try{
        const user = await listUser(id.id);
        
        return reply.code(201).send(user);
    } catch(error){
        return reply.send(error)
    }
    
}

export async function findUsers(request: FastifyRequest, reply: FastifyReply) {
    try{
        const user = await listUsers();
        
        return reply.code(201).send(user);
    } catch(error){
        return reply.send(error);
    }
    
}

export async function upgradeUser(request: FastifyRequest<{Body:userDTO}>, reply: FastifyReply) {
    const id = Object(request.params);
    const body = request.body;
    try{
        const user = await updateUser(id.id, body);

        return reply.code(201).send(user);
    } catch(error){
        return reply.send(error);
    }
    
}

export async function removeUser(
    request: FastifyRequest,
    reply: FastifyReply){
    const id = Object(request.params);
    try {
        const user = await deleteUser(id.id);
        return reply.code(201).send(user);
    } catch (error) {
        console.log(error);
        return reply.send(error);
    }
}

