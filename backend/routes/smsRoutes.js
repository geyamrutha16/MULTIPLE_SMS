import express from "express";
import multer from "multer";
import { sendBulkSms, getSmsResults, acknowledgeSms, getSmsById } from "../controllers/smsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/send-bulk-sms", upload.single("file"), sendBulkSms);
router.get("/results", authMiddleware, getSmsResults);
router.get("/ack/:smsId", acknowledgeSms);
router.get("/record/:smsId", getSmsById);

export default router;
