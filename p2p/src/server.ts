import findPort from "./lib/findPort";
import Peer from "./services/peer";

const PORT = parseInt(process.env.PORT || "3000")

async function main() {
    const port = await findPort(PORT);
    const peer = new Peer(port);
    process.argv.slice(2).forEach((address) => {
        peer.connect(address)
    })
}

main()