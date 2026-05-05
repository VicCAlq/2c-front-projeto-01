import React from 'react';

export default function Rodape() {
  return (
    <footer className="rodapeContainer">
      <style>{`
        .rodapeContainer {
          padding: 1.25rem 1rem;
          background: linear-gradient(90deg, #0f1724 0%, #0b1220 100%);
          color: #e6eef8;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .rodapeInner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .repoLink {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          padding: 0.5rem 0.75rem;
          border-radius: 999px;
          color: #e6eef8;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 6px 18px rgba(2,6,23,0.45);
          transition: transform 160ms ease, box-shadow 160ms ease;
        }
        .repoLink:hover { transform: translateY(-3px); box-shadow: 0 18px 40px rgba(2,6,23,0.55); }
        .repoIcon {
          width: 18px; height: 18px; display: inline-block; fill: currentColor;
        }
        .credits {
          margin: 0;
          font-size: 0.9rem;
          color: #cfe3ff;
          opacity: 0.95;
        }
        @media (max-width: 640px) {
          .rodapeInner { flex-direction: column; align-items: center; text-align: center; }
          .credits { margin-top: 0.6rem; }
        }
      `}</style>

      <div className="rodapeInner">
        <a
          href="https://github.com/usuario/repositorio"
          target="_blank"
          rel="noreferrer"
          className="repoLink"
          aria-label="Abrir repositório no GitHub"
        >
          <svg className="repoIcon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.19 0 0 1.005-.322 3.295 1.23.955-.266 1.98-.399 3-.405 1.02.006 2.045.139 3 .405 2.285-1.552 3.29-1.23 3.29-1.23.655 1.66.245 2.885.12 3.19.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.1.815 2.22 0 1.606-.015 2.9-.015 3.295 0 .32.215.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>Ver repositório</span>
        </a>

        <p className="credits">
          Criado por: Davi Barboza, Gabriel Vitor, Samuel Erivaldo, Saulo Bizerril, Walleysson Ferreira
        </p>
      </div>
    </footer>
  );
}