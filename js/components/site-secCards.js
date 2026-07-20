class SiteCards extends HTMLElement {
  connectedCallback() {
    const data = {
      subheadline: this.dataset.subheadline || "UMA SUBHEADLINE LEGAL",
      card1Title: this.dataset.card1Title,
      card1Text: this.dataset.card1Text,
      card2Title: this.dataset.card2Title,
      card2Text: this.dataset.card2Text,
      card3Title: this.dataset.card3Title,
      card3Text: this.dataset.card3Text,
      ctaLabel: this.dataset.ctaLabel,
    };

    this.innerHTML = `
      <section class="cards-section">
        <div class="cards-container">
          <div class="cards-header">
            <h2>${data.subheadline}</h2>
          </div>
          <div class="cards-grid">
            ${
              data.card1Title && data.card1Text
                ? `<div class="card">
              <h3 class="card-title">${data.card1Title}</h3>
              <p class="card-text">${data.card1Text}</p>
            </div>
            `
                : ""
            }
            ${
              data.card2Title && data.card2Text
                ? `<div class="card">
              <h3 class="card-title">${data.card2Title}</h3>
              <p class="card-text">${data.card2Text}</p>
            </div>
            `
                : ""
            }
            ${
              data.card3Title && data.card3Text
                ? `<div class="card">
              <h3 class="card-title">${data.card3Title}</h3>
              <p class="card-text">${data.card3Text}</p>
            </div>
            `
                : ""
            }
          </div>
          <div class="cards-buttons">
            ${data.ctaLabel ? `<button onclick="openLeadModal()" class="cta-button">${data.ctaLabel}</button>` : ""} 
            <button onclick="openLeadModal()" class="more-button">Saiba Mais</button>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("site-cards", SiteCards);
