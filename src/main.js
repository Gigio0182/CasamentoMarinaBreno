import "./style.css";

const weddingDate = new Date("2026-10-12T16:00:00");

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
      <a href="#historia">História</a>
      <a href="#evento">Evento</a>
      <a href="#dicas">Dicas</a>
      <a href="#rsvp">RSVP</a>
      <a href="#presentes">Presentes</a>
    </nav>
    <div class="hero-content">
      <h1>Marina & Breno</h1>
      <p class="hero-date">12 / 10 / 2026</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#rsvp">Confirmar Presença</a>
        <a class="btn btn-outline" href="#evento">Ver Local</a>
      </div>
    </div>
  </header>

  <main>
    <section class="countdown section" aria-label="Contagem regressiva">
      <p class="section-eyebrow">Contagem regressiva para o grande dia</p>
      <div id="countdown-grid" class="countdown-grid"></div>
    </section>

    <section class="section welcome" id="historia">
      <p class="section-eyebrow">Sejam bem-vindos ao nosso site</p>
      <h2>Estamos vivendo o capítulo mais especial da nossa história.</h2>
      <p>Aqui vamos contar à vocês, queridos amigos e familiares, os momentos mais marcantes da nossa história de amor.</p>
      <p>A contagem regressiva começa, o frio na barriga e toda a ansiedade do dia mais esperado de nossas vidas nos enche de alegria em tê-los ao nosso lado. Vamos juntos nesse grande sonho, o dia em que uniremos nossas almas e corpos para sempre, <strong>o dia do nosso casamento</strong>.</p>
    </section>

    <section class="section story-grid">
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
      <div class="tips-grid">
        <article class="tip-card">
          <div class="tip-icon" aria-hidden="true">
            <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Suitcase body -->
              <rect x="28" y="28" width="86" height="68" rx="5" stroke="currentColor" stroke-width="2.6"/>
              <!-- Suitcase top handle -->
              <path d="M55 28V20C55 17 57 15 60 15H82C85 15 87 17 87 20V28" stroke="currentColor" stroke-width="2.4"/>
              <!-- Horizontal band top -->
              <line x1="28" y1="52" x2="114" y2="52" stroke="currentColor" stroke-width="2"/>
              <!-- Horizontal band bottom -->
              <line x1="28" y1="68" x2="114" y2="68" stroke="currentColor" stroke-width="2"/>
              <!-- Vertical center divider -->
              <line x1="71" y1="28" x2="71" y2="96" stroke="currentColor" stroke-width="1.8"/>
              <!-- Buckle left -->
              <rect x="38" y="57" width="14" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/>
              <!-- Buckle right -->
              <rect x="90" y="57" width="14" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/>
              <!-- Cart platform -->
              <line x1="16" y1="96" x2="128" y2="96" stroke="currentColor" stroke-width="2.8"/>
              <!-- Cart vertical pole -->
              <line x1="128" y1="96" x2="128" y2="22" stroke="currentColor" stroke-width="2.6"/>
              <!-- Cart handle bar -->
              <line x1="118" y1="22" x2="138" y2="22" stroke="currentColor" stroke-width="2.6"/>
              <!-- Small horizontal braces -->
              <line x1="128" y1="50" x2="118" y2="50" stroke="currentColor" stroke-width="1.8"/>
              <line x1="128" y1="70" x2="118" y2="70" stroke="currentColor" stroke-width="1.8"/>
              <!-- Left wheel -->
              <circle cx="38" cy="108" r="10" stroke="currentColor" stroke-width="2.4"/>
              <circle cx="38" cy="108" r="3.5" stroke="currentColor" stroke-width="1.6"/>
              <!-- Right wheel -->
              <circle cx="100" cy="108" r="10" stroke="currentColor" stroke-width="2.4"/>
              <circle cx="100" cy="108" r="3.5" stroke="currentColor" stroke-width="1.6"/>
              <!-- Axle -->
              <line x1="28" y1="108" x2="110" y2="108" stroke="currentColor" stroke-width="1.6"/>
              <!-- Small front wheel -->
              <circle cx="128" cy="106" r="7" stroke="currentColor" stroke-width="2.2"/>
            </svg>
          </div>
          <h3 class="tip-title">Hospedagem</h3>
        </article>

        <article class="tip-card">
          <div class="tip-icon" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 16V58" stroke="currentColor" stroke-width="2.2" />
              <path d="M22 56C26 38 41 25 60 22C79 25 94 38 98 56" stroke="currentColor" stroke-width="2.2" />
              <path d="M28 55C33 44 42 36 54 32" stroke="currentColor" stroke-width="1.6" />
              <path d="M44 54C47 43 53 33 60 26" stroke="currentColor" stroke-width="1.6" />
              <path d="M60 54C62 41 67 32 74 26" stroke="currentColor" stroke-width="1.6" />
              <path d="M76 54C79 42 86 35 93 31" stroke="currentColor" stroke-width="1.6" />
              <path d="M22 56H98" stroke="currentColor" stroke-width="2.2" />
              <path d="M32 69H58" stroke="currentColor" stroke-width="2.2" />
              <path d="M62 69H88" stroke="currentColor" stroke-width="2.2" />
              <path d="M29 69L24 84H56L61 69" stroke="currentColor" stroke-width="1.9" />
              <path d="M59 69L64 84H96L91 69" stroke="currentColor" stroke-width="1.9" />
              <path d="M24 84H56" stroke="currentColor" stroke-width="2" />
              <path d="M64 84H96" stroke="currentColor" stroke-width="2" />
            </svg>
          </div>
          <h3 class="tip-title">O que fazer</h3>
        </article>

        <article class="tip-card">
          <div class="tip-icon" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="62" width="18" height="23" rx="4" stroke="currentColor" stroke-width="2"/>
              <path d="M20 62L16 50C15 47 18 44 21 46L34 56" stroke="currentColor" stroke-width="1.8" />
              <circle cx="55" cy="37" r="13" stroke="currentColor" stroke-width="2" />
              <path d="M47 31C52 26 60 26 64 31" stroke="currentColor" stroke-width="1.6" />
              <path d="M44 52L67 52" stroke="currentColor" stroke-width="1.7" />
              <path d="M80 28L97 73" stroke="currentColor" stroke-width="2.1" />
              <path d="M70 73H101" stroke="currentColor" stroke-width="2.1" />
              <path d="M72 74C76 78 83 79 87 74" stroke="currentColor" stroke-width="1.6" />
              <path d="M40 75L53 63L66 75" stroke="currentColor" stroke-width="2" />
              <path d="M53 63V90" stroke="currentColor" stroke-width="2" />
              <path d="M40 90H66" stroke="currentColor" stroke-width="2" />
            </svg>
          </div>
          <h3 class="tip-title">Cabeleireiro e Maquiador</h3>
        </article>

        <article class="tip-card">
          <div class="tip-icon" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="55" cy="67" rx="26" ry="20" stroke="currentColor" stroke-width="2.1" />
              <ellipse cx="55" cy="67" rx="12" ry="8" stroke="currentColor" stroke-width="1.7" />
              <path d="M29 67H14" stroke="currentColor" stroke-width="2" />
              <path d="M14 52V84" stroke="currentColor" stroke-width="2" />
              <path d="M11 58H17" stroke="currentColor" stroke-width="1.7" />
              <path d="M11 66H17" stroke="currentColor" stroke-width="1.7" />
              <path d="M11 74H17" stroke="currentColor" stroke-width="1.7" />
              <path d="M84 50L90 41C93 37 98 37 101 41L103 44" stroke="currentColor" stroke-width="1.9" />
              <path d="M90 52V84" stroke="currentColor" stroke-width="2" />
              <path d="M84 84H96" stroke="currentColor" stroke-width="2" />
              <path d="M43 45C47 40 53 39 57 43" stroke="currentColor" stroke-width="1.5" />
            </svg>
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
