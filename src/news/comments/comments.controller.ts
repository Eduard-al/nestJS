import { Controller, Param, Post, Body, Get, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import {  CommentsService } from './comments.service';
import { CreateCommentsDto } from '../comments/dtos/create-comment-dto'
import { EditCommentsDto } from '../comments/dtos/edit-comment-dto'
import { HelperFileLoader } from 'src/utils/HelperFileLoader';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

const PATH_NEWS = '/news-static/comments/'
HelperFileLoader.path = PATH_NEWS

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsServece: CommentsService){}

    @Post('/api/:idNews')

    @UseInterceptors(
        FileInterceptor('avatar',{
            storage: diskStorage({
                destination: HelperFileLoader.destinationPath, 
                filename: HelperFileLoader.customFileName
            })
        })
    )
    create(@Param('idNews') idNews: string,
    @Body() comment: CreateCommentsDto,
    @UploadedFile() avatar: Express.Multer.File
    ) {
        if (avatar?.filename){
            comment.avatar = PATH_NEWS + avatar.filename
        } 
        const idNewsInt = parseInt(idNews);
        return this.commentsServece.create(idNewsInt, comment)
    }

    @Put('/api/:idNews/:idComment')
    change(@Param('idNews') idNews: string,@Param('idComment') idComment: string,@Body() comment: EditCommentsDto) {
        const idNewsInt = parseInt(idNews);
        const idCommentInt = parseInt(idComment);
        console.log(idCommentInt)
        const isChange = this.commentsServece.change(idNewsInt, idCommentInt, comment)
        console.log(isChange)
        return isChange
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

