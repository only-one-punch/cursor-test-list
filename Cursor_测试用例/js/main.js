document.addEventListener('DOMContentLoaded', () => {
    loadPersonalInfo();
    loadArticleList();
    setupCommentSystem();
});

function loadPersonalInfo() {
    const header = new Header({
        name: '张三',
        avatar: 'https://example.com/avatar.jpg',
        bio: '热爱编程和写作的全栈开发者',
        socialLinks: [
            { platform: 'GitHub', url: 'https://github.com/zhangsan' },
            { platform: 'Twitter', url: 'https://twitter.com/zhangsan' }
        ]
    });
    header.render();
}

function loadArticleList() {
    articleList.loadArticles();
}

function setupCommentSystem() {
    commentSystem.init();
}
