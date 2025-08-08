import express from "express";
import { 
    createRoom,
    updateRoom, 
    deleteRoom, 
    getRoom, 
    getRooms, 
    updateRoomAvailability} from "../controllers/room.js";
import { verifyAdmin } from "../utils/VerifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("availability/:id", updateRoomAvailability);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GETALL
router.get("/", getRooms);

export default router