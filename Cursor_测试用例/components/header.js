class Header {
    constructor(data) {
        this.data = data;
    }

    render() {
        const header = document.getElementById('personal-info');
        header.innerHTML = `
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <img src="${this.data.avatar}" alt="${this.data.name}" class="img-fluid">
                    </div>
                    <div class="col-md-9">
                        <h1>${this.data.name}</h1>
                        <p>${this.data.bio}</p>
                        <div class="social-links">
                            ${this.data.socialLinks.map(link => `
                                <a href="${link.url}" target="_blank" class="btn btn-outline-primary btn-sm">
                                    ${link.platform}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
