export const Navbar = () => {
    return (
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl rounded-full bg-bg-deep/50 backdrop-blur-md border border-white/5 py-3 px-6 flex items-center justify-between transition-all duration-300">
        <div className="font-serif text-xl tracking-wide text-text-main">
          RUTA REAL<span className="text-main-red">.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-sans tracking-wide">
          <a href="#problema" className="text-text-muted hover:text-text-main transition-colors duration-300 hover:-translate-y-px">El Problema</a>
          <a href="#estructura" className="text-text-muted hover:text-text-main transition-colors duration-300 hover:-translate-y-px">La Estrutura</a>
          <a href="#autoridad" className="text-text-muted hover:text-text-main transition-colors duration-300 hover:-translate-y-px">Autoridad</a>
        </div>
        <div>
          <a href="#oferta">
            <button className="bg-cta-critical text-text-main px-6 py-2.5 rounded-[2.5rem] font-sans font-medium text-sm transition-transform duration-300 hover:scale-[1.03] overflow-hidden relative group"
              style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.46,0.45,0.94)' }}>
              <span className="relative z-10">EMPEZAR AHORA</span>
              <div className="absolute inset-0 bg-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
            </button></a>
        </div>
      </nav>
    );
  };
