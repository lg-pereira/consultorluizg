class ImgBox extends HTMLElement {
  connectedCallback() {
    const data = {
      subheadline: this.dataset.subheadline || "UMA SUBHEADLINE CHAMATIVA",
      text: this.dataset.text || "UM TEXTO LEGAL",
      ctaLabel: this.dataset.ctaLabel,
      image: this.dataset.image || "../assets/img/",
    };

    this.innerHTML = `
        <section class="imgbox-section">
            <div class="img-box">
              <img src="${data.image}" alt="${data.subheadline}" />
            </div>
            <div class="imgbox-content">
              <h2>${data.subheadline}</h2>
              <div class="imgbox-text">${data.text}</div>
              ${
                data.ctaLabel
                  ? `<div class="imgbox-buttons">
                <button onclick="openLeadModal()" class="cta-button">${data.ctaLabel}</button>
              </div>`
                  : ""
              }
            </div>
        </section>
    `;
  }
}

customElements.define("site-imgbox", ImgBox);
