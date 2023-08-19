import { userDTO } from "../dto/userDTO";
import prisma from "../prisma/prisma";
 
export async function createUser(input: userDTO) {
    const user = await prisma.user.create(
        {
            data: input,
        }
    );    

    return user;
};