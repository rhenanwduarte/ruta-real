export const Footer = () => {
  return (
    <footer className="w-full bg-[#020305] rounded-t-[2.5rem] py-12 px-6 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-serif text-xl tracking-wide text-text-main">
          RUTA REAL<span className="text-main-red">.</span>
        </div>
        <div className="flex items-center gap-3 bg-[#111114] px-4 py-2 rounded-full border border-white/5 shrink-0">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-sans text-xs tracking-widest uppercase text-text-muted font-medium">Sistema activo.</span>
        </div>
        <div className="font-sans text-sm text-text-muted text-center md:text-right">
          &copy; {new Date().getFullYear()} Ruta Real. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
