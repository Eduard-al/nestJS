import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { News, NewsService,NewsChange } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService){

    }
       
    @Get('/detail/:id')
        get(@Param('id')id: string): News{
            
        const idInt = parseInt(id)
        return this.newsService.find(idInt)
    }

    @Get('/all')
        getAll(): News[] {
        console.log('/:all')
        return this.newsService.getAll();
    }

    @Post()
    create(@Body()news: News): News{        
        return this.newsService.create(news)
    }

    @Delete('/detail/:id')
    remove(@Param('id')id: string): string{
        const idInt = parseInt(id)
        const isRemoved = this.newsService.remove(idInt)
        return isRemoved ? 'новость удалена' : 'передан неверный идентификатор'
    }
    @Put('/detail/:id')
    change(@Param('id')id: string, @Body()news: NewsChange): string{
        const idInt = parseInt(id)

        const isChange=this.newsService.change(idInt,news)
        return isChange ? 'новость изменена' : 'передан неверный идентификатор'

    }
    
}
