class Hero extends HTMLElement {
  connectedCallback() {
    const data = {
      headline: this.dataset.headline || "UMA HEADLINE CHAMATIVA",
      subheadline: this.dataset.subheadline || "UMA SUBHEADLINE CHAMATIVA",
      ctaLabel: this.dataset.ctaLabel || "UM CTA CHAMATIVO",
      image: this.dataset.image || "../assets/img/",
    };

    this.innerHTML = `
        <section class="hero-section">
            <div class="hero-content">
              <h1>${data.headline}</h1>
              <h2>${data.subheadline}</h2>
              <div class="hero-buttons">
                <button onclick="openLeadModal()" class="cta-button">${data.ctaLabel}</button>
                <button onclick="openLeadModal()" class="more-button">Saiba Mais</button>
              </div>
            </div>
            <div class="img-hero-box">
              <img src="${data.image}" alt="${data.headline}" />
            </div>
        </section>
    `;
  }
}

customElements.define("site-hero", Hero);
