import { Router } from "express";
import { asyncHandler } from "../utils/async-handler.js";
import {
  uploadPdf,
  createSource,
  listSources,
  importWebsite
} from "../controllers/source.controller.js";
import { uploadSinglePdf } from "../middleware/upload.middleware.js";


export const sourceRoutes = Router({ mergeParams: true });

sourceRoutes.post("/upload", uploadSinglePdf, asyncHandler(uploadPdf));
sourceRoutes.post("/import/website", asyncHandler(importWebsite));

sourceRoutes.get("/", asyncHandler(listSources));
sourceRoutes.post("/", asyncHandler(createSource));

