import express from "express";
import findPort from "./lib/findPort";
import router from "./routes"

async function startServer(PORT: number) {
    const port = await findPort(PORT);
    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(port, async () => {
        console.log("Servidor iniciado na porta: " + port);

        if (port !== 3000) {
            await fetch("http://localhost:3000/connect");
        } else {
            // await fetch("http://localhost:3001/connect")
        }
    });

}

startServer(3000);