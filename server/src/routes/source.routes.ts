import { Router } from "express";
import { asyncHandler } from "../utils/async-handler.js";
import {
 
  createSource,
  
  listSources,
} from "../controllers/source.controller.js";


export const sourceRoutes = Router({ mergeParams: true });


sourceRoutes.get("/", asyncHandler(listSources));
sourceRoutes.post("/", asyncHandler(createSource));

