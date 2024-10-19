class Article {
    constructor(title, content, tags) {
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.date = new Date();
    }

    publish() {
        // 这里应该有发送到服务器的逻辑
        console.log('文章已发布:', this);
        return Promise.resolve();
    }
}

function createArticle() {
    const title = document.getElementById('article-title').value;
    const content = document.getElementById('article-content').value;
    const tags = Array.from(document.getElementById('article-tags').selectedOptions).map(option => option.value);

    const article = new Article(title, content, tags);
    article.publish().then(() => {
        alert('文章发布成功！');
        // 清空表单
        document.getElementById('article-form').reset();
    });
}

function fetchArticle(id) {
    // 这里应该从服务器获取文章内容
    // 为了演示，我们使用模拟数据
    const article = {
        id: id,
        title: `文章 ${id}`,
        date: '2023-04-20',
        tags: ['示例', '文章'],
        content: `这是文章 ${id} 的内容。这里应该是从服务器获取的实际内容。`
    };

    renderArticle(article);
}

function renderArticle(article) {
    const articleContent = document.getElementById('article-content');
    articleContent.innerHTML = `
        <h1>${article.title}</h1>
        <p>发布日期：${article.date}</p>
        <p>标签：${article.tags.join(', ')}</p>
        <div>${article.content}</div>
        <a href="index.html" class="btn btn-secondary mt-3">返回文章列表</a>
    `;
}
