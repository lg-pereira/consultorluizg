import { getAdressByIP } from "../services/get-adress.js";

class LeadModal extends HTMLElement {
  constructor() {
    this.innerHTML = `
    <div class="leadmodal-overlay">
        <div class="leadmodal-container">
            <button class="leadmodal-close-btn" aria-label="Fechar">
            <img
                src="../assets/icon/x.svg"
                alt="Fechar"
                class="leadmodal-icon"
            />
            </button>

            <div class="leadmodal-header">
            <h3 class="leadmodal-title">Vamos Alavancar suas Vendas?</h3>
            <p class="leadmodal-subtitle">
                Preencha seus dados abaixo para iniciar seu atendimento
                personalizado no WhatsApp.
            </p>
            </div>

            <form class="leadmodal-form">
            <div class="leadmodal-form-row">
                <div class="leadmodal-form-group">
                <label for="firstName">Nome</label>
                <input
                    required
                    id="firstName"
                    placeholder="Seu nome"
                    type="text"
                    name="firstName"
                />
                </div>
                <div class="leadmodal-form-group">
                <label for="lastName">Sobrenome</label>
                <input
                    required
                    id="lastName"
                    placeholder="Seu sobrenome"
                    type="text"
                    name="lastName"
                />
                </div>
            </div>

            <div class="leadmodal-form-group">
                <label for="phone">Telefone com DDD</label>
                <input
                required
                id="phone"
                placeholder="(11) 00000-0000"
                type="tel"
                name="phone"
                />
            </div>

            <div class="leadmodal-form-group">
                <label for="email">E-mail</label>
                <input
                required
                id="email"
                placeholder="seu@email.com"
                type="email"
                name="email"
                />
            </div>

            <button type="submit" class="leadmodal-submit-btn">
                <span class="leadmodal-submit-text">Enviar formulário</span>
                <img
                src="../assets/icon/send.svg"
                alt="Enviar"
                class="leadmodal-icon"
                />
            </button>

            <p class="leadmodal-disclaimer">
                Ao continuar, você concorda em receber nosso contato comercial.
            </p>
            </form>
        </div>
    </div>
    `;
  }
}

customElements.define("lead-modal", LeadModal);

const form = document.querySelector(".leadmodal-form");
const cityInput = document.querySelector("#city");
const stateInput = document.querySelector("#state");

getAdressByIP().then((data) => {
  cityInput.value = data[0];
  stateInput.value = data[1];
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  onFormSubmit();
});

function onFormSubmit() {
  let container = document.querySelector(".leadmodal-container");
  container.replaceChildren();
  container.innerHTML = `
             <div class="leadmodal-header">
              <h3>Muito obrigado pelo seu interesse!</h3>
              <p>
                Em breve entraremos em contato pelo WhatsApp para entender
                melhor suas necessidades e apresentar as melhores soluções para o
                seu negócio.
              </p>
            </div>
        `;
}
