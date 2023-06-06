import { Router } from "express";
import { getTrendingAnimes } from "../controllers/animesController";

const animesRouter = Router();

animesRouter.get('/trending', getTrendingAnimes)

export default animesRouter;