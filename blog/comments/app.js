import express from 'express';
import {commentRouter} from './routes/commentRouter.js';

const app = express();

app.use(express.json())
app.use('/blog/api/v1/posts',commentRouter)
  
const PORT = 5001;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
})