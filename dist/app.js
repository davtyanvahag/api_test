"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./config/routes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const mongoString = process.env.DATABASE_URL;
console.log("aaa:::", mongoString);
mongoose_1.default.connect(mongoString);
const database = mongoose_1.default.connection;
database.on("error", (error) => {
    console.log(error);
});
database.once("connected", () => {
    console.log("Database Connected");
});
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(routes_1.default);
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});
//# sourceMappingURL=app.js.map