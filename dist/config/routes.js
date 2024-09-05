"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const questionsCtrl_1 = __importDefault(require("../controllers/questionsCtrl"));
const router = express_1.default.Router();
router.get("/questions", [], questionsCtrl_1.default.list);
router.get("/questions/getOne/:id", [], questionsCtrl_1.default.one);
router.put("/questions/update/:id", [], questionsCtrl_1.default.update);
router.delete("/questions/delete/:id", [], questionsCtrl_1.default.delete);
router.post("/questions", [], questionsCtrl_1.default.create);
// TODO: add POST / PUT
exports.default = router;
//# sourceMappingURL=routes.js.map