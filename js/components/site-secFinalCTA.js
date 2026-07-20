class FinalCTA extends HTMLElement {
  connectedCallback() {
    const data = {
      headline: this.dataset.headline || "UMA HEADLINE CHAMATIVA",
      subheadline: this.dataset.subheadline || "UMA SUBHEADLINE CHAMATIVA",
      ctaLabel: this.dataset.ctaLabel || "UM CTA CHAMATIVO",
    };

    this.innerHTML = `
        <section class="cta-section">
            <div class="cta-content">
              <h2>${data.headline}</h2>
              <h3>${data.subheadline}</h3>
              <div class="final-cta">
                <button onclick="openLeadModal()" class="cta-button">${data.ctaLabel}
                <img src="../assets/icon/calendar.svg" alt="Agende agora">
                </button>
              </div>
            </div>
        </section>
    `;
  }
}

customElements.define("site-cta", FinalCTA);
