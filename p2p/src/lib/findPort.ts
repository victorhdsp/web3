import net from "node:net";

function findPort(port: number) {
    return new Promise<number>((resolve, reject) => {
        const server = net.createServer();

        server.listen(port, () => {
            server.once("close", () => {
                resolve(port);
            });
            server.close();
        })

        server.on("error", () => {
            resolve(findPort(port + 1));
        });
    })
}

export default findPort;