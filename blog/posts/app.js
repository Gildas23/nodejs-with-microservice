import express from 'express';
import {postRouter} from './routes/postRouter.js';

const app = express();

app.use(express.json())
app.use('/blog/api/v1/posts',postRouter)
  
const PORT = 5000;
  
app.listen(PORT,() => {
    console.log(`Listening on PORT ${PORT}`);
})

