import express from "express";
import QuestionsCtrl from "../controllers/questionsCtrl";

const router = express.Router();

router.get("/questions", [], QuestionsCtrl.list);
router.get("/questions/getOne/:id", [], QuestionsCtrl.one);
router.put("/questions/update/:id", [], QuestionsCtrl.update);
router.delete("/questions/delete/:id", [], QuestionsCtrl.delete);
router.post("/questions", [], QuestionsCtrl.create);

// TODO: add POST / PUT

export default router;
