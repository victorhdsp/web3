import Peer from "../peer"

export type Address = { 
    host: string, 
    port: number 
}

export interface EventInterface {
    type: "address"
    data: Address
}

class EventManager {
    private peer: Peer;
    constructor(peer: Peer) {
        this.peer = peer;
    }

    address (data: Address) {
        const { host, port } = data;
        this.peer.connect(`${host}:${port}`);
    }
    
}

export default EventManager