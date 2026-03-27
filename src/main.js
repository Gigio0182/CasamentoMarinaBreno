import "./style.css";

const weddingDate = new Date("2026-09-19T16:00:00");

function formatCountdown(diff) {
  if (diff <= 0) {
    return { dias: "00", horas: "00", minutos: "00", segundos: "00" };
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  return {
    dias: String(dias).padStart(2, "0"),
    horas: String(horas).padStart(2, "0"),
    minutos: String(minutos).padStart(2, "0"),
    segundos: String(segundos).padStart(2, "0"),
  };
}

document.querySelector("#app").innerHTML = `
  <div class="page-bg"></div>
  <a class="floating-rsvp" href="#rsvp">Confirmar presença</a>
  <header class="hero" id="home">
    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#evento">Evento</a>
      <a href="#dicas">Dicas</a>
      <a href="#rsvp">RSVP</a>
      <a href="#presentes">Presentes</a>
    </nav>
    <div class="hero-content">
      <h1>Marina & Breno</h1>
      <p class="hero-date">19 / 09 / 2026</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#rsvp">Confirmar Presença</a>
        <a class="btn btn-outline" href="#evento">Ver Local</a>
      </div>

      <div class="home-story">
        <p class="section-eyebrow">Sejam bem-vindos ao nosso site</p>
        <h2>Estamos vivendo o capítulo mais especial da nossa história.</h2>
        <p>Aqui vamos contar à vocês, queridos amigos e familiares, os momentos mais marcantes da nossa história de amor.</p>
        <p>A contagem regressiva começa, o frio na barriga e toda a ansiedade do dia mais esperado de nossas vidas nos enche de alegria em tê-los ao nosso lado. Vamos juntos nesse grande sonho, o dia em que uniremos nossas almas e corpos para sempre, <strong>o dia do nosso casamento</strong>.</p>

        <div class="cards mini-story-grid">
          <article class="card">
            <h3>O começo</h3>
            <p>Tudo começou de um jeito simples, mas com uma conexão que parecia destino.</p>
          </article>
          <article class="card">
            <h3>O pedido</h3>
            <p>Entre risos, planos e muito amor, chegou o dia do sim mais importante da nossa história.</p>
          </article>
          <article class="card">
            <h3>O grande dia</h3>
            <p>Agora queremos celebrar esse novo capítulo com quem sempre fez parte da nossa caminhada.</p>
          </article>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section class="countdown section" aria-label="Contagem regressiva">
      <p class="section-eyebrow">Contagem regressiva para o grande dia</p>
      <div id="countdown-grid" class="countdown-grid"></div>
    </section>

    <section class="section" id="evento">
      <p class="section-eyebrow">Informações do evento</p>
      <h2>Reserve essa data</h2>
      <div class="cards two-cols">
        <article class="card">
          <h3>Cerimônia</h3>
          <p>16h00 - Igreja São José</p>
          <p>Rua Exemplo, 123 - Cidade/UF</p>
        </article>
        <article class="card">
          <h3>Recepção</h3>
          <p>19h00 - Espaço Jardim</p>
          <p>Av. Exemplo, 456 - Cidade/UF</p>
        </article>
      </div>
      <p class="event-note">Dress code: esporte fino em tons suaves</p>
    </section>

    <section class="section" id="dicas">
      <p class="section-eyebrow">Dicas</p>
      <h2>Para aproveitar melhor a viagem</h2>
      <p class="tips-subtitle">Separamos algumas opções de hotéis e restaurantes que recomendamos na cidade. Para reservar sua hospedagem, utilize nosso cupom de desconto MARINAEBRENO20 para aproveitar os benefícios! (Pode ser utilizado em qualquer um dos 3 hotéis indicados, basta inserir na página final, na área de pagamento):</p>
      <div class="tips-grid">
        <article class="tip-card">
          <div class="tip-icon" aria-hidden="true">
            <img src="/icons/hospedagem.svg" alt="Icone de hospedagem" loading="lazy" />
          </div>
          <button class="tip-title tip-button" id="hospedagem-toggle" type="button" aria-expanded="false" aria-controls="hospedagem-details">
            Hospedagem
          </button>
          <div class="hotel-list" id="hospedagem-details" hidden>
            <article class="hotel-item">
              <a class="hotel-name" href="https://www.hcchospitality.com.br/qoya-hotel-curitiba" target="_blank" rel="noreferrer">Qoya Hotel Curitiba</a>
              <p>Av. Sete de Setembro, 4211 - Batel</p>
              <a class="hotel-link" href="https://www.hcchospitality.com.br/qoya-hotel-curitiba" target="_blank" rel="noreferrer">https://www.hcchospitality.com.br/qoya-hotel-curitiba</a>
            </article>

            <div class="hotel-divider" aria-hidden="true"></div>

            <article class="hotel-item">
              <a class="hotel-name" href="https://www.hcchospitality.com.br/radisson-hotel-curitiba" target="_blank" rel="noreferrer">Radisson Hotel Curitiba</a>
              <p>Av. Sete de Setembro, 5190 - Batel</p>
              <a class="hotel-link" href="https://www.hcchospitality.com.br/radisson-hotel-curitiba" target="_blank" rel="noreferrer">https://www.hcchospitality.com.br/radisson-hotel-curitiba</a>
            </article>

            <div class="hotel-divider" aria-hidden="true"></div>

            <article class="hotel-item">
              <a class="hotel-name" href="https://www.hcchospitality.com.br/hotel-bleev-curitiba" target="_blank" rel="noreferrer">Bleev Hotel Curitiba</a>
              <p>Rua Des. Motta, 1221 - Água Verde</p>
              <a class="hotel-link" href="https://www.hcchospitality.com.br/hotel-bleev-curitiba" target="_blank" rel="noreferrer">https://www.hcchospitality.com.br/hotel-bleev-curitiba</a>
            </article>
          </div>
        </article>

        <article class="tip-card">
          <div class="tip-icon" aria-hidden="true">
            <img src="/icons/o-que-fazer.svg" alt="Icone de o que fazer" loading="lazy" />
          </div>
          <h3 class="tip-title">O que fazer</h3>
        </article>

        <article class="tip-card">
          <div class="tip-icon" aria-hidden="true">
            <img src="/icons/cabeleireiro-maquiador.svg" alt="Icone de cabeleireiro e maquiador" loading="lazy" />
          </div>
          <h3 class="tip-title">Cabeleireiro e Maquiador</h3>
        </article>

        <article class="tip-card">
          <div class="tip-icon" aria-hidden="true">
            <img src="/icons/bares-restaurantes.svg" alt="Icone de bares e restaurantes" loading="lazy" />
          </div>
          <h3 class="tip-title">Bares e Restaurantes</h3>
        </article>
      </div>
    </section>

    <section class="section" id="rsvp">
      <p class="section-eyebrow">Confirmação de presença</p>
      <h2>Confirme sua presença</h2>
      <form class="rsvp-form" id="rsvp-form">
        <label>Nome completo<input required name="nome" type="text" /></label>
        <label>Vai comparecer?
          <select name="presenca" required>
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </label>
        <label>Acompanhantes<input name="acompanhantes" type="number" min="0" max="5" value="0" /></label>
        <label>Restrições alimentares<input name="restricoes" type="text" /></label>
        <button class="btn btn-primary" type="submit">Enviar confirmação</button>
        <p class="form-ok" id="form-ok" hidden>Obrigado por confirmar. Estamos ansiosos para celebrar com você.</p>
      </form>
    </section>

    <section class="section" id="presentes">
      <p class="section-eyebrow">Com carinho</p>
      <h2>Lista de presentes</h2>
      <p>Sua presença é o nosso maior presente. Se desejar, deixamos opções abaixo.</p>
      <div class="hero-actions">
        <a class="btn btn-outline" href="#">Ver lista de presentes</a>
        <a class="btn btn-primary" href="#">Contribuir via PIX</a>
      </div>
      <p class="pix">Chave PIX: ficticio@casamento.com</p>
    </section>
  </main>

  <footer class="footer">
    <a class="back-top" href="#home">Voltar ao topo</a>
    <p>Com amor, Marina e Breno</p>
  </footer>
`;

const countdownGrid = document.getElementById("countdown-grid");
const form = document.getElementById("rsvp-form");
const formOk = document.getElementById("form-ok");
const hospedagemToggle = document.getElementById("hospedagem-toggle");
const hospedagemDetails = document.getElementById("hospedagem-details");

function renderCountdown() {
  const now = Date.now();
  const diff = weddingDate.getTime() - now;
  const countdown = formatCountdown(diff);

  countdownGrid.innerHTML = `
    <div><strong>${countdown.dias}</strong><span>Dias</span></div>
    <div><strong>${countdown.horas}</strong><span>Horas</span></div>
    <div><strong>${countdown.minutos}</strong><span>Minutos</span></div>
    <div><strong>${countdown.segundos}</strong><span>Segundos</span></div>
  `;
}

renderCountdown();
setInterval(renderCountdown, 1000);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formOk.hidden = false;
  form.reset();
});

if (hospedagemToggle && hospedagemDetails) {
  hospedagemToggle.addEventListener("click", () => {
    const isExpanded = hospedagemToggle.getAttribute("aria-expanded") === "true";
    hospedagemToggle.setAttribute("aria-expanded", String(!isExpanded));
    hospedagemDetails.hidden = isExpanded;
  });
}
