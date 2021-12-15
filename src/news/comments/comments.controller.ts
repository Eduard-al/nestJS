import { Controller, Param, Post, Body, Get, Delete, Put } from '@nestjs/common';
import { Comment, CommentChange, CommentsService } from './comments.service';


@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsServece: CommentsService){}

    @Post('/api/:idNews')
    create(@Param('idNews') idNews: string,@Body() comment: Comment) {
        const idNewsInt = parseInt(idNews);
        return this.commentsServece.create(idNewsInt, comment)
    }

    @Put('/api/:idNews/:idComment')
    change(@Param('idNews') idNews: string,@Param('idComment') idComment: string,@Body() comment: CommentChange) {
        const idNewsInt = parseInt(idNews);
        const idCommentInt = parseInt(idComment);
        return this.commentsServece.change(idNewsInt, idCommentInt, comment)
    }

    @Get('/api/details/:idNews')
    get(@Param('idNews') idNews: string) {
        
        const idNewsInt = parseInt(idNews);
        return this.commentsServece.find(idNewsInt)
    }
    @Delete('/api/details/:idNews/:idComments')
    remove(@Param('idNews') idNews: string, @Param('idComments') idComment:string) {
        
        const idNewsInt = parseInt(idNews);
        const idCommentInt = parseInt(idComment)
        return this.commentsServece.remove(idNewsInt, idCommentInt)
    }
}

