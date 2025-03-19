import express from 'express';
import { createCourse } from '../controllers/course.controller';

const router=express.Router();
router.post("/create",createCourse)
export default router;
