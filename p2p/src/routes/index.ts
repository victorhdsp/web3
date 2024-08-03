import express from "express";
import ConnectionController from "../controller/connection";

const connection = new ConnectionController

const router = express.Router();
router.get("/connect", async (req, res) => {
    const {remoteAddress, remotePort} = req.socket;
    // const controller = connection.connect();
    console.log(remoteAddress, remotePort,)
    return res.status(200).send()
});
router.get("/getPeers", (req, res) => {
    const controller = connection.getPeers();
    return res.status(200).send()
});
router.get("/broadcast", (req, res) => {
    const controller = connection.broadcast();
    return res.status(200).send()
});
router.get("/getData", (req, res) => {
    const controller = connection.getData();
    return res.status(200).send()
});

export default router;