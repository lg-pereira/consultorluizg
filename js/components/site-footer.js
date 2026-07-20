class SiteFooter extends HTMLElement {
  connectedCallback() {
    const data = {
      info: {
        text: this.dataset.text || "EMPRESA",
        span: this.dataset.span || "XYZ",
        description: this.dataset.desc || "UMA DESCRIÇÃO MUITO LEGAL",
        cnpj: this.dataset.cnpj || "01.234.567/0001-99",
      },
      contact: {
        name: this.dataset.contactName || "EMPRESA",
        phone: this.dataset.contactPhone || "1198765431",
        email: this.dataset.contactEmail || "exemplo@email.com",
        instagram: this.dataset.contactInstagram || "@empresa",
        facebook: this.dataset.contactFacebook || "@empresa",
      },
    };

    this.innerHTML = `
      <div class="footer">
        <div class="footer-container">
          <div class="footer-column">
            <a href="#" class="footer-logo">
              <p>
                ${data.info.text} <span class="footer-logo-span">${data.info.span}</span>
              </p></a>
            <p class="footer-logo-description">
              ${data.info.description} </p>
              <p>CNPJ: ${data.info.cnpj}</p>
          </div>
          <div class="footer-column">
            <h3 class="footer-column-title">Navegação Rápida</h3>
            <ul class="footer-column-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Portfólio</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h3 class="footer-column-title">Fale com ${data.contact.name}</h3>
            <div class="footer-contact">
              <img
                src="../assets/icon/phone.svg"
                alt="Phone icon"
                aria-hidden="true"
              />
              <a href="tel:+55${data.contact.phone}">${data.contact.phone}</a>
            </div>
            <div class="footer-contact">
              <img
                src="../assets/icon/email.svg"
                alt="Email icon"
                aria-hidden="true"
              />
              <a href="mailto:${data.contact.email}">${data.contact.email}</a>
            </div>
            <h3 class="footer-column-title">Siga-nos</h3>
            <div
              class="footer-social-links"
              role="group"
              aria-label="Links para Redes Sociais"
            >
              <a 
                href="https://wa.me/55${data.contact.phone}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp">
                <img src="../assets/icon/whatsapp.webp" alt="WhatsApp icon" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/${data.contact.instagram}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                <img src="../assets/icon/instagram.webp" alt="Instagram icon" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com/${data.contact.facebook}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                <img src="../assets/icon/facebook.webp" alt="Facebook icon" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <p class="footer-copy">
          © 2026 ${data.contact.name} Todos os direitos reservados.
        </p>
      </div>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
