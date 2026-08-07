import { Router } from "express";
import { asyncHandler } from "../utils/async-handler.js";
import {
  uploadPdf,
  createSource,
  listSources,
  importWebsite,
  importYoutube,
  bulkDeleteSources,
  getSource,
  deleteSource
} from "../controllers/source.controller.js";
import { uploadSinglePdf } from "../middleware/upload.middleware.js";


export const sourceRoutes = Router({ mergeParams: true });

sourceRoutes.post("/upload", uploadSinglePdf, asyncHandler(uploadPdf));
sourceRoutes.post("/import/website", asyncHandler(importWebsite));
sourceRoutes.post("/import/youtube", asyncHandler(importYoutube));

sourceRoutes.get("/", asyncHandler(listSources));
sourceRoutes.post("/", asyncHandler(createSource));
sourceRoutes.post("/bulk-delete", asyncHandler(bulkDeleteSources));
sourceRoutes.get("/:sourceId", asyncHandler(getSource));
sourceRoutes.delete("/:sourceId", asyncHandler(deleteSource));

