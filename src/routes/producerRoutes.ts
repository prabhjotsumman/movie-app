import express from "express";
import { getProducers, addProducer } from "../controllers/producerController";

const router = express.Router();

router.get("/getProducers", getProducers);
router.post("/addProducer", addProducer);

export default router;
