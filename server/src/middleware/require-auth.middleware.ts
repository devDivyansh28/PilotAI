import type { NextFunction , Request , Response } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth.js";
import type { Session } from "../lib/session.js";
import { error } from "node:console";

declare module "express-serve-static-core" {
    interface Request {
        session : Session
    }
}


//It will check whether the user is loggedIn or not

export async function requireAuth(
    req: Request,
    res: Response,
    next : NextFunction
): Promise<void>{
    const session = await auth.api.getSession(
        {
            headers : fromNodeHeaders(req.headers)
        }
    );

    if(!session?.user){
        res.status(401).json({error : "Unauthorized"});
        return
    }

    req.session = session;
    next();
}