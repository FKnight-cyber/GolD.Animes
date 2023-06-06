import { Request, Response } from 'express';
import animesServices from '../services/animesService';

export async function getTrendingAnimes(req: Request, res: Response) {

  const animes = await animesServices.trendingAnimes();

  return res.status(200).send(animes);
}