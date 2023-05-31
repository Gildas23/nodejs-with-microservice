import { Router } from "express";
import {getComments,createComment} from "../controller/commentController.js"

const router = Router()



router.route("/:id/comments")
    .get(getComments)
    .post(createComment)

export {router as commentRouter}