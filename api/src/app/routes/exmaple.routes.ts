import {Express} from "express";
import {rootUrl} from "./base.routes";

import * as controller from "../controllers/example.controller"

module.exports = (app: Express) => {
    app.route(rootUrl + "/example")
        .get(controller.getExample);
}