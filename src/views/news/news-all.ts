import { News } from "src/news/news.service";


export function renderNewsAll(news: News[]) {
    let neswListHtml =''
    for (const newsItem of news) {
        neswListHtml += renderNewsBlock(newsItem)
    }
    return `<h1>Список новостей<h1>
    <div class="row">
        ${neswListHtml}
    </div>
    
    `
}

function renderNewsBlock(news: News) {
    return `
    <div class="col-lg-4 mb-2">
        <div class="card" style="width: 100%;">
        ${news.cover ? `<img src="${news.cover}" style="height: 200px; object-fit: cover; class="card-img-top" alt="...">`:''}
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${news.author}</h6>
                <p class="card-text">${news.description}</p>
            </div>
            <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Читать полностью</button>
            </div>
        </div>
    </div>
    `
}