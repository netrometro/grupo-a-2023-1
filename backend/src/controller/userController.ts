import {FastifyReply, FastifyRequest} from "fastify";
import { createUser } from "../service/userService";
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
