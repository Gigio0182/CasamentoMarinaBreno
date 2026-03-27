(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d=new Date("2026-10-12T16:00:00");function l(s){if(s<=0)return{dias:"00",horas:"00",minutos:"00",segundos:"00"};const a=Math.floor(s/(1e3*60*60*24)),t=Math.floor(s/(1e3*60*60)%24),r=Math.floor(s/(1e3*60)%60),e=Math.floor(s/1e3%60);return{dias:String(a).padStart(2,"0"),horas:String(t).padStart(2,"0"),minutos:String(r).padStart(2,"0"),segundos:String(e).padStart(2,"0")}}document.querySelector("#app").innerHTML=`
  <div class="page-bg"></div>
  <header class="hero" id="home">
    <nav class="nav">
      <a href="#historia">História</a>
      <a href="#evento">Evento</a>
      <a href="#rsvp">RSVP</a>
      <a href="#presentes">Presentes</a>
    </nav>
    <div class="hero-content">
      <p class="eyebrow">12 Outubro 2026</p>
      <h1>Marina & Breno</h1>
      <p class="subtitle">Vamos celebrar nosso casamento com você</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#rsvp">Confirmar Presença</a>
        <a class="btn btn-outline" href="#evento">Ver Local</a>
      </div>
    </div>
  </header>

  <main>
    <section class="countdown section">
      <h2>Contagem Regressiva</h2>
      <p>Estamos contando os dias para viver esse momento ao lado de pessoas especiais.</p>
      <div id="countdown-grid" class="countdown-grid"></div>
    </section>

    <section class="section" id="historia">
      <h2>Nossa História</h2>
      <div class="cards">
        <article class="card"><h3>O começo</h3><p>Tudo começou de um jeito simples, mas com uma conexão que parecia destino.</p></article>
        <article class="card"><h3>O pedido</h3><p>Entre risos, planos e muito amor, chegou o dia do sim mais importante da nossa história.</p></article>
        <article class="card"><h3>O grande dia</h3><p>Agora queremos celebrar esse novo capítulo com quem sempre fez parte da nossa caminhada.</p></article>
      </div>
    </section>

    <section class="section" id="evento">
      <h2>Informações do Evento</h2>
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

    <section class="section" id="rsvp">
      <h2>Confirme sua Presença</h2>
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
      <h2>Lista de Presentes</h2>
      <p>Sua presença é o nosso maior presente. Se desejar, deixamos opções abaixo com carinho.</p>
      <div class="hero-actions">
        <a class="btn btn-outline" href="#">Ver lista de presentes</a>
        <a class="btn btn-primary" href="#">Contribuir via PIX</a>
      </div>
      <p class="pix">Chave PIX: seuemail@exemplo.com</p>
    </section>
  </main>

  <footer class="footer">Com amor, Marina e Breno</footer>
`;const p=document.getElementById("countdown-grid"),i=document.getElementById("rsvp-form"),m=document.getElementById("form-ok");function c(){const s=Date.now(),a=d.getTime()-s,t=l(a);p.innerHTML=`
    <div><strong>${t.dias}</strong><span>dias</span></div>
    <div><strong>${t.horas}</strong><span>horas</span></div>
    <div><strong>${t.minutos}</strong><span>min</span></div>
    <div><strong>${t.segundos}</strong><span>seg</span></div>
  `}c();setInterval(c,1e3);i.addEventListener("submit",s=>{s.preventDefault(),m.hidden=!1,i.reset()});
