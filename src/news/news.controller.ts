import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CommentsService } from './comments/comments.service';
import { News, NewsService,NewsChange } from './news.service';
import { renderNewsAll } from '../views/news/news-all';
import { renderTemplate } from '../views/template'
import { renderNewsDetail } from '../views/news/news-detail'

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService, private readonly commentsService: CommentsService){

    }
       
    @Get('/api/detail/:id')
        get(@Param('id')id: string): News{
            
        const idInt = parseInt(id)
        const news = this.newsService.find(idInt)
        const comments = this.commentsService.find(idInt)
        return {
            ...news,
            comments
        }
    }

    @Get('/api/all')
    getAll(): News[] {     
        return this.newsService.getAll();
    }

    @Get('/all')
    getAllView() { 
        const news = this.newsService.getAll()
        const content = renderNewsAll(news)
        return renderTemplate(content, {
            title: "список новостей",
            description: 'самые крутые новости',
            })
    }

    @Get('/detail/:id')
    getDetailView(@Param('id')id: string) { 
        const inInt = parseInt(id)
        const news = this.newsService.find(inInt) 
        const comments = this.commentsService.find(inInt)    
        const content = renderNewsDetail(news, comments)
        return renderTemplate(content, {
            title: news.title,
            description: news.description,
            })
    }

    

    @Post('/api')
    create(@Body()news: News): News{        
        return this.newsService.create(news)
    }

    @Delete('/api/detail/:id')
    remove(@Param('id')id: string): string{
        const idInt = parseInt(id)
        const isRemoved = this.newsService.remove(idInt)
        return isRemoved ? 'новость удалена' : 'передан неверный идентификатор'
    }
    @Put('/api/detail/:id')
    change(@Param('id')id: string, @Body()news: NewsChange): string{
        const idInt = parseInt(id)

        const isChange=this.newsService.change(idInt,news)
        return isChange ? 'новость изменена' : 'передан неверный идентификатор'

    }
    
}


