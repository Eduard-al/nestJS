import { Injectable } from '@nestjs/common';
import { getRandomInt } from '../news.service';
import { CreateCommentsDto } from '../comments/dtos/create-comment-dto'


export type Comment = {
    id?: number;
    message: string;
    author: string;
}

export type CommentChange = {
    id?: number;
    message?: string;
    author?: string;
}

@Injectable()
export class CommentsService {
    private readonly comments ={}
    

    create(idNews: number, comment: CreateCommentsDto){
        if(!this.comments[idNews]){
            this.comments[idNews]=[]
        }

        const newComment = {...comment, id: getRandomInt()}
        this.comments[idNews].push(newComment)
        return newComment
    }
    

    find(idNews: number): CreateCommentsDto[] | null{
        return this.comments[idNews] || null
    }

    remove(idNews: number, idComment: number): Comment[] | string{

        if(!this.comments[idNews]) {
            return 'нет такой новости'
        }
        const indexComment = this.comments[idNews].findIndex((c) => c.id === idComment)
        if(indexComment === -1) {
            return "комментарий не найден"
        }
        return this.comments[idNews].splice(indexComment, 1)
    }

    change(idNews: number,idComment: number, comment: CommentChange)  {
        if (!this.comments[idNews]){
            return false
        }
        const indexChangeComments=this.comments[idNews].findIndex((c) => c.id === idComment) 
        if(indexChangeComments !== -1) {
            this.comments[indexChangeComments] = {
                ...this.comments[indexChangeComments],
                ...comment
            }
            console.log(this.comments[indexChangeComments])
            return this.comments[indexChangeComments]
        }    
        return false

    }
}
