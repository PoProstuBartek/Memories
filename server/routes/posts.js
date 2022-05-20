import  express  from 'express';

import { getPosts, createPost } from '../controllers/posts.js'; 
// in node you have to add .js at the end

const router = express.Router();

// this route is reachable by localhost:5000/posts - set in index.js :9
router.get('/', getPosts);
router.post('/', createPost);

export default router;