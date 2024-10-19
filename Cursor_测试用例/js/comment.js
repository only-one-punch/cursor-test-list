class Comment {
    constructor(articleId, username, content) {
        this.articleId = articleId;
        this.username = username;
        this.content = content;
        this.timestamp = new Date().toLocaleString();
    }

    submit() {
        // 这里应该有发送到服务器的逻辑
        console.log('评论已提交:', this);
        return Promise.resolve(this);
    }
}

function submitComment(articleId) {
    const username = document.getElementById('comment-username').value;
    const content = document.getElementById('comment-content').value;

    if (!username || !content) {
        alert('请填写用户名和评论内容！');
        return;
    }

    const comment = new Comment(articleId, username, content);
    comment.submit().then((submittedComment) => {
        // 添加新评论到评论系统
        commentSystem.addComment(submittedComment);
        
        alert('评论提交成功！');
        // 清空表单
        document.getElementById('comment-form').reset();
    });
}
