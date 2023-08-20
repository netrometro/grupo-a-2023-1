import { userDTO } from "../dto/userDTO";
import prisma from "../prisma/prisma";
 
export async function createUser(input: userDTO) {
    const user = await prisma.user.create({
            data: input,
        });    
    return user;
};

export async function login(body: userDTO){
    const user = await prisma.user.findFirst({
        where: {email: body.email}
    })
    if (!user){
        throw new Error("user not found")
    }

    const verify = user.password == body.password;
    if(!verify){
        throw new Error("wrong credentials");
    }

    return user;
};

export async function listUser(input: Number){
    
    const user = await prisma.user.findFirst({
        where: {id: Number(input)}
    })
    if (!user){
        throw new Error("user not found")
    }

    return user;
}

export async function listUsers(){

    const user = await prisma.user.findMany();
    return user;
}

export async function updateUser(id: Number, body: userDTO){
    const user = await prisma.user.findFirst({
        where: {id: Number(id)},
    });
    if(!user){
        throw new Error("user not found");
    }

    const {name, email, endereco} = body;

    const update = await prisma.user.update({
        where:{
            id: Number(id)  
        },
        data:{
            email: email,
            name: name,
            endereco: endereco
        },
    });

}

export async function deleteUser(input: Number){
    const id = input;
    const user = await prisma.user.findFirst({
        where: {
            id: Number(id)
        },
    })
    if (!user){
        throw new Error('user not found')            
    }
    const deleteUser = await prisma.user.delete({
        where: user
    });

    return deleteUser;

}