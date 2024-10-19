class CommentSystem {
    constructor() {
        this.comments = [];
        this.articleId = null;
    }

    init(articleId) {
        this.articleId = articleId;
        this.render();
        this.loadComments();
    }

    loadComments() {
        // 这里应该从服务器获取特定文章的评论列表
        // 为了演示，我们使用模拟数据
        this.comments = [
            { username: '用户1', content: '很好的文章！', timestamp: '2023-04-20 10:30' },
            { username: '用户2', content: '学到了很多，谢谢分享。', timestamp: '2023-04-20 11:15' }
        ];
        this.renderComments();
    }

    render() {
        const commentSystem = document.getElementById('comment-system');
        commentSystem.innerHTML = `
            <h3>评论</h3>
            <form id="comment-form" onsubmit="event.preventDefault(); submitComment(${this.articleId});">
                <div class="mb-3">
                    <input type="text" id="comment-username" class="form-control" placeholder="您的名字" required>
                </div>
                <div class="mb-3">
                    <textarea id="comment-content" class="form-control" rows="3" placeholder="您的评论" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">提交评论</button>
            </form>
            <div id="comment-list"></div>
        `;
    }

    renderComments() {
        const commentList = document.getElementById('comment-list');
        commentList.innerHTML = this.comments.map(comment => `
            <div class="comment">
                <strong>${comment.username}</strong>
                <small>${comment.timestamp}</small>
                <p>${comment.content}</p>
            </div>
        `).join('');
    }

    addComment(comment) {
        this.comments.unshift(comment);
        this.renderComments();
    }
}

const commentSystem = new CommentSystem();
