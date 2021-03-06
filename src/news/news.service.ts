import { Injectable } from '@nestjs/common';
import { CountQueuingStrategy } from 'node:stream/web';

export interface News{
    id: number;
    title: string;
    description: string;
    autor: string;
    countView?: number;
}

export interface NewsChange{
    
    title: string;
    description: string;
    autor: string;
    countView?: number;
}

function getRandomInt(min:number, max:number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor( Math.random()*(max-min))+min
}


@Injectable()
export class NewsService {
    private readonly news: News[]=[
        {
            id:1,
            title:'первая новость',
            description:'Текст первой новости',
            autor:'Eduard',
            countView:5
        },
    ]

    create(news: News): News {

        const id = getRandomInt(0, 99999)
        
        console.log(news)
        const finalNews = {
            ...news,
            id :id
        }

        this.news.push(finalNews)
        return finalNews
    }

    find(id: News['id']): News | undefined {
        return this.news.find((news: News) => news.id === id)
    }
    remove(id: News['id']): boolean{
        const indexRemoveNews = this.news.findIndex((news: News) => news.id === id)
        if(indexRemoveNews !== -1) {
            this.news.splice(indexRemoveNews, 1)
            return true
        }
        return false
    }

    change(id: number, news: NewsChange): News | undefined {
        console.log(id)
        const indexChangeNews = this.news.findIndex((news: News) => news.id === id)
        
        if(indexChangeNews !== -1) {
            this.news[indexChangeNews] = {
                ...this.news[indexChangeNews],
                ...news
            }
            console.log(this.news[indexChangeNews])
            return this.news[indexChangeNews]
        }
        return undefined
    }
    getAll(): News[] {
        console.log(this.news)
        return this.news;
      }
      
}

