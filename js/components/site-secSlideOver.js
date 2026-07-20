class SiteSlideOver extends HTMLElement {
  connectedCallback() {
    // 1. Receber os dados do HTML (como string JSON) ou usar um padrão (fallback)
    let testimonialsData = [];
    try {
      if (this.dataset.testimonials) {
        testimonialsData = JSON.parse(this.dataset.testimonials);
      }
    } catch (e) {
      console.error("Erro ao ler os depoimentos do HTML:", e);
    }

    // Fallback caso não venha nada no HTML
    if (testimonialsData.length === 0) {
      testimonialsData = [
        {
          quote: "Um depoimento legal",
          name: "Luizinho",
          work: "Hacker",
          business: "Acme Inc.",
          img: "/url_da_imagem",
        },
        {
          quote: "Outro depoimento legal",
          name: "Carlinhos",
          work: "Batman",
          business: "Arkhem Asilum",
          img: "/url_da_imagem",
        },
        {
          quote: "Ainda outro depoimento legal",
          name: "Juquinha",
          work: "Xerife",
          business: "Toy Story Inc.",
          img: "/url_da_imagem",
        },
      ];
    }

    const data = {
      headline: this.dataset.headline,
      subheadline: this.dataset.subheadline,
      testimonials: testimonialsData,
    };

    let currentIndex = 0;
    const activeTestimonial = data.testimonials[currentIndex];
    const starSvg = `<img src="../assets/icon/star.svg" alt="Estrela" class="slideover-star" />`;

    // 2. Montar o HTML inicial usando o primeiro depoimento
    this.innerHTML = `
      <section class="slideover-section">
        <div class="slideover-container">   
          <div class="slideover-header">
            <h2>${data.headline}</h2>
            <div class="slideover-divider"></div>
            <p>${data.subheadline}</p>
          </div>
          
          <div class="slideover-content">
            <div class="slideover-card">
              <img class="slideover-quote-icon" src="../assets/icon/quote.svg" alt="Aspas" />
              
              <div class="slideover-card-inner">
                <div class="slideover-image-wrapper">
                  <div class="slideover-image-glow"></div>
                  <img alt="${activeTestimonial.name}" class="slideover-image" src="${activeTestimonial.img}">
                </div>
                
                <div class="slideover-text-content">
                  <div class="slideover-stars">
                    ${starSvg.repeat(5)}
                  </div>
                  <p class="slideover-quote">"${activeTestimonial.quote}"</p>
                  <div class="slideover-name">
                    <h4>${activeTestimonial.business}</h4>
                    <p>${activeTestimonial.name} &bull; <span>${activeTestimonial.work}</span></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="slideover-controls">
              <button class="slideover-btn prev-btn" aria-label="Depoimento Anterior">
                <img src="../assets/icon/left.svg" alt="Anterior" />
              </button>
              <div class="slideover-dots">
                ${data.testimonials.map((_, i) => `<button class="slideover-dot ${i === 0 ? "active" : ""}" aria-label="Ir para depoimento ${i + 1}"></button>`).join("")}
              </div>
              <button class="slideover-btn next-btn" aria-label="Próximo Depoimento">
                <img src="../assets/icon/left.svg" alt="Próximo" />
              </button>
            </div>
          </div>
        </div>
      </section>
    `;

    // 3. Pegar os elementos que vão mudar de conteúdo
    const quoteText = this.querySelector(".slideover-quote");
    const img = this.querySelector(".slideover-image");
    const name = this.querySelector(".slideover-name p");
    const business = this.querySelector(".slideover-name h4");
    const dots = this.querySelectorAll(".slideover-dot");
    const prevBtn = this.querySelector(".prev-btn");
    const nextBtn = this.querySelector(".next-btn");

    // 4. Função para atualizar os dados na tela
    const updateSlide = () => {
      const item = data.testimonials[currentIndex];

      // Atualizar textos e imagem
      quoteText.textContent = `"${item.quote}"`;
      img.src = item.img;
      img.alt = item.name;
      business.textContent = item.business;
      name.innerHTML = `${item.name} &bull; <span>${item.work}</span>`;

      // Atualizar as bolinhas
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    };

    // 5. Funções de navegação
    const nextSlide = () => {
      currentIndex++;
      if (currentIndex >= data.testimonials.length) currentIndex = 0;
      updateSlide();
    };

    const prevSlide = () => {
      currentIndex--;
      if (currentIndex < 0) currentIndex = data.testimonials.length - 1;
      updateSlide();
    };

    // 6. Automação e Timer
    let autoSlide = setInterval(nextSlide, 5000);

    const resetTimer = () => {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 5000);
    };

    // 7. Adicionar os cliques
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetTimer();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetTimer();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlide();
        resetTimer();
      });
    });
  }
}

customElements.define("site-slide", SiteSlideOver);
