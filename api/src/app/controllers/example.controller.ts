import {Request, Response} from "express";
import * as model from "../models/example.model"
import Logger from "../../config/logger";

const getExample = async (req: Request, res: Response): Promise<void> => {
    try {
        const example: Example = model.getExample();
        res.status(200).send(example);
    } catch (err) {
        Logger.error(err);
        res.statusMessage = "Internal Server Error";
        res.status(500).send();
    }
}

export {getExample}