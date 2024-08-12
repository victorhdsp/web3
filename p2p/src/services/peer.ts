import net from "node:net";
import EventManager, { Address, EventInterface } from "./events";

class Peer {
    private port:number;
    private eventManager: EventManager;
    private connections: Address[];

    constructor(port: number) {
        this.port = port;
        this.connections = [];
        this.eventManager = new EventManager(this);

        const server = net.createServer((socket) => {
            console.log("Outro peer se conectou!");
            this.receiveMessage(socket)
        })

        server.listen(port, () => {
            console.log("iniciado na porta", port);
        });
    }

    receiveMessage(socket: net.Socket) {
        socket.on("data", (buffer) => {
            const {data, type}: EventInterface = JSON.parse(
                buffer.toString()
            );
            this.eventManager[type](data)
        })
    }

    sendMessage(socket: net.Socket, data: EventInterface) {
        const buffer = JSON.stringify(data)
        socket.write(buffer)
    }

    connect(address:string) {
        if(!address.includes(":")) {
            throw new Error("Endereço de ip esta incorreto!");
        }
        
        const host = address.split(":")[0];
        const port = parseInt(address.split(":")[1])

        const connections = this.connections.map(
            ({host, port}) => `${host}:${port}`
        )

        if (connections.includes(address)) {
            return;
        }

        const socket = net.createConnection({ host, port }, () => {
            if (!socket.localAddress) {
                throw new Error("Erro ao conectar");
            }

            const message: EventInterface = { 
                type: "address", 
                data: {
                    host: socket.localAddress,
                    port: this.port
                }
            }

            console.log(`Conectando ao peer: ${host}:${port}`);
            this.connections.push({ host, port })
            this.sendMessage(socket, message)
        })

        socket.on("error", () => {})
    }
}

export default Peer;