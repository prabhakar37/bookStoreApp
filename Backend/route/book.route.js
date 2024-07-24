import express from 'express';
import { getBook } from '../controller/book.controller.js';

const router = express.Router();

// ye api create keya h hmne
router.get("/", getBook);

export default router; 