import express from "express";
import { getActors, addActor } from "../controllers/actorController";

const router = express.Router();

console.log("Actor Routes");

router.get("/getActors", getActors);
router.post("/addActor", addActor);

export default router;
