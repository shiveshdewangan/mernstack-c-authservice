import { Request, Response } from "express";

class AuthControllers {
    register(req: Request, res: Response) {
        res.status(201).json();
    }
}

export default AuthControllers;
