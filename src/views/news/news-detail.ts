import { News } from "src/news/news.service";
import { Comment } from "src/news/comments/comments.service";


export function renderNewsDetail(news: News, comment:Comment[]):string {
    
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

function renderNewsComments(comments: Comment[]):string {
    let html=''
    for (const comment of comments) {
        html+=`
        <div style="margin:10px">
            <div style="height: 70px; display: flex;">
                <div style="height: 50px ;width: 50px; background:#adb5bd">
                </div>
                <div>${comment.author}</div>
            </div>
            <div style="text-align: left">${comment.message}</div>
        </div>
        
        `
    }
    
    return html
}

