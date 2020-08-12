"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // import express and the express types
const app = express_1.default(); // app is an Application interface type
const port = Number(process.env.PORT) || 3000; // port is a number type
/**
 * @param {Object} - req object with interface type Request
 * @param {Object} - res object with interface type Response
 * @returns void - nothing to return
 */
app.get('/', (req, res) => {
    res.send('The fat cat sat on a mat');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(`App running on port ${port}!`);
});
//# sourceMappingURL=server.js.map