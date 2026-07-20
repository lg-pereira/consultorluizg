class SiteHeader extends HTMLElement {
  connectedCallback() {
    const data = {
      text: this.dataset.text || "EMPRESA",
      span: this.dataset.span || "XYZ",
    };

    this.innerHTML = `
        <div class="header">
          <div class="logo">
            <a href="../pages/index.html">${data.text}<span class="accent">${data.span}</span></a>
          </div>
          <nav class="nav">
            <button onclick="openLeadModal()" class="">Fale Conosco</button>
          </nav>
        </div>
    `;
  }
}

customElements.define("site-header", SiteHeader);
