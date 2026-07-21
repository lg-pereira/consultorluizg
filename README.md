# Agência Volk | Ads Tech & Automação

Este é o repositório do projeto da landing page da **Agência Volk**, focada em serviços de consultoria de marketing digital, automação e inovação em Ads Tech. O objetivo da página é apresentar os serviços, benefícios e cases de sucesso da agência, além de capturar leads interessados através de formulários integrados.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web nativas (Vanilla), com objetivo didático para compreender as tecnologias base e absorver os conhecimentos aplicados à Frameworks Modernos.

- **HTML5:** Estruturação semântica do conteúdo.
- **CSS3 (Vanilla):** Estilização customizada (`index.css` e `main.css`), focada em um design limpo e responsivo.
- **JavaScript (Vanilla JS):** Lógica de interação da página e validação de formulários.
- **Web Components Nativos:** A arquitetura front-end foi desenvolvida com base em _Custom Elements_ (Componentes Web nativos do navegador), permitindo a reutilização de código e encapsulamento.
- **Imagens WebP:** Utilização de formato de imagem moderno para otimização de velocidade e performance SEO.
- **Google Fonts:** Fontes _Inter_ e _Plus Jakarta Sans_ para a tipografia do site.

## 🏗️ Modo de Construção e Arquitetura

Com objetivo didático, o projeto foi desenvolvido utilizando o padrão de **Web Components**. Isso significa que cada seção principal da página (cabeçalho, rodapé, seções de conteúdo, formulários) foi encapsulada em seu próprio componente customizado em JavaScript.

### Estrutura de Diretórios

- `/assets/`: Contém os recursos visuais como imagens em formato `.webp` e ícones.
- `/css/`: Contém as folhas de estilo da página (`index.css` e `main.css`).
- `/js/`: Diretório principal de scripts.
  - `/js/components/`: Contém a definição de todos os Web Components (ex: `site-header.js`, `site-hero.js`, `lead-form.js`, etc.). Cada arquivo define um _Custom Element_ específico utilizado no HTML.
  - `/js/pages/`: Contém scripts específicos atrelados às páginas, como inicializações ou integrações gerais (`index.js`).
- `index.html`: A página principal, que invoca os componentes através de tags HTML personalizadas (ex: `<site-hero>`, `<site-cards>`) e passa os dados de conteúdo através de atributos `data-*`.

### Como Funciona

1.  **Declaração de Componentes:** No `index.html`, tags customizadas como `<site-header>` e `<site-hero>` são utilizadas em vez de `<div>` convencionais. O conteúdo dinâmico (títulos, textos, imagens) é passado para esses componentes por meio de atributos `data-` (ex: `data-headline`, `data-image`).
2.  **Lógica Encapsulada:** Cada componente no diretório `/js/components/` é uma classe JavaScript que estende `HTMLElement`. Esses componentes capturam os atributos passados pelo HTML e montam sua própria estrutura interna, separando a lógica de apresentação do conteúdo em si.
3.  **Formulário de Leads:** Há um componente dedicado (`lead-form.js`) responsável por lidar com a captura de contato dos clientes em potencial.

## 👨‍💻 Desenvolvedor

Desenvolvido por **Luiz Gustavo** (Consultor Luiz G).
