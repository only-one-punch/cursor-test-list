class ArticleList {
    constructor() {
        this.articles = [];
    }

    loadArticles() {
        // 这里应该从服务器获取文章列表
        this.articles = [
            { id: 1, title: '第一篇文章', date: '2023-04-01', tags: ['技术', '编程'] },
            { id: 2, title: '第二篇文章', date: '2023-04-15', tags: ['生活', '随笔'] }
        ];
        this.render();
    }

    render() {
        const articleList = document.getElementById('article-list');
        articleList.innerHTML = this.articles.map(article => `
            <div class="article-item">
                <h2><a href="article.html?id=${article.id}">${article.title}</a></h2>
                <p>发布日期：${article.date}</p>
                <p>标签：${article.tags.join(', ')}</p>
            </div>
        `).join('');
    }

    getArticleById(id) {
        return this.articles.find(article => article.id === id);
    }
}

function loadArticle(id) {
    const article = articleList.getArticleById(id);
    if (article) {
        document.getElementById('article-list').style.display = 'none';
        const articleContent = document.getElementById('article-content');
        articleContent.style.display = 'block';
        articleContent.innerHTML = `
            <h1>${article.title}</h1>
            <p>发布日期：${article.date}</p>
            <p>标签：${article.tags.join(', ')}</p>
            <div>${article.content}</div>
            <button onclick="backToList()" class="btn btn-secondary mt-3">返回文章列表</button>
        `;
    }
}

function backToList() {
    document.getElementById('article-content').style.display = 'none';
    document.getElementById('article-list').style.display = 'block';
}

const articleList = new ArticleList();
