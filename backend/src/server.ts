import Fastify from "fastify";

const server = Fastify();

// just to check if its running
server.get("/healthcheck", async function () {
    return {status: "ok"};
});

async function main(){
    try{
        await server.listen(3000);
        console.log("Server ready at port 3000");
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}

main();