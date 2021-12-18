import { News } from "src/news/news.service";
import { CreateCommentsDto } from "src/news/comments/dtos/create-comment-dto";


export function renderNewsDetail(news: News, comment:CreateCommentsDto[]):string {
    
    return `
    <div class="conteiner text-center">
        <img src="${news.cover}" style="height: 200px; object-fit: cover; class="card-img-top" alt="...">
        <h1>${news.title}<h1>
        <div>${news.description}<?div>
        <div>${news.author}</div>

        ${comment? renderNewsComments(comment) : 'нет комментариев'}
    </div>
    
    `
}

function renderNewsComments(comments: CreateCommentsDto[]):string {
    let html=''
    for (const comment of comments) {
        html+=`
        <div style="margin:25px">
            <div style=" display: flex;">
            ${comment?.avatar
                ?`<img src="${comment.avatar}" style="height: 50px ;width: 50px;border-radius: 50%; background:#adb5bd; overfiow: hidden ;object-fit: cover;"`
                :'<div style="height: 50px ;width: 50px; background:#adb5bd">'}
                
                
                </div>
                <div style="font-size: 20px; margin: 10px;">${comment.author}</div>
            </div>
            <div style="text-align: left; font-size: 14px">${comment.message}</div>
        </div>
        
        `
    }
    
    return html
}

