import { CheckCircle2 } from 'lucide-react';

export const OfferAndUrgency = () => {
    return (
      <section id="oferta" className="w-full relative z-20 py-32 px-4 bg-[#020305] overflow-hidden flex flex-col items-center">
  
        {/* Background Eclipse Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-[#E10600] rounded-[100%] blur-[120px] opacity-15 pointer-events-none"></div>
  
        <div className="relative w-full max-w-2xl group perspective-[2000px]">
  
          {/* The Monolith Core Card */}
          <div
            className="relative w-full rounded-[2rem] md:rounded-[3rem] bg-[#0A0A0C] border-[1px] border-[#E10600]/30 p-10 md:p-14 md:pb-16 flex flex-col items-center overflow-hidden transition-all duration-700 hover:border-[#E10600]/80 shadow-[0_0_50px_rgba(225,6,0,0.05)] group-hover:shadow-[0_0_80px_rgba(225,6,0,0.15)] group-hover:-translate-y-2"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Inner Light Beams */}
            <div className="absolute top-0 left-0 w-[200%] h-px bg-gradient-to-r from-transparent via-[#E10600]/50 to-transparent -translate-x-1/2 group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
  
            {/* Heading */}
            <div className="relative z-10 text-center mb-10 w-full flex flex-col items-center">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#E10600]/20 bg-[#E10600]/10 text-[#E10600] text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
                O MAPA ESTRATÉGICO
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-2 tracking-wide font-black drop-shadow-md">
                RUTA REAL <span className="text-[#E10600]">2026</span>
              </h2>
            </div>
  
            {/* Price Block - Extreme Brutalist Type */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 mb-12 w-full">
              <span className="font-sans text-text-muted line-through text-lg font-medium tracking-wider">USD 39</span>
              <div className="flex items-start text-text-main relative group-hover:scale-105 transition-transform duration-500 ease-out">
                <span className="font-sans font-bold mt-3 md:mt-4 text-2xl md:text-3xl tracking-widest">USD</span>
                <span className="font-sans text-[7rem] md:text-[9rem] leading-none font-black tracking-tighter drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">19</span>
              </div>
            </div>
  
            {/* Features Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-14 text-left relative z-10">
              {[
                "Auditoría paso a paso",
                "La estructura de 7 días",
                "Costos y fallos documentados",
                "Acceso inmediato y vitalicio"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-2xl border border-white/[0.03] hover:border-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#E10600]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#E10600] shrink-0" />
                  </div>
                  <span className="font-sans text-text-main/90 text-sm md:text-base font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>
  
            {/* Action Button - Extreme Contrast */}
            <button className="relative w-full md:w-[85%] bg-[#E10600] text-[#0A0A0C] py-6 md:py-7 rounded-2xl font-sans font-black text-xl md:text-2xl hover:bg-[#F21A15] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_20px_40px_rgba(225,6,0,0.3)] hover:shadow-[0_25px_50px_rgba(225,6,0,0.4)] overflow-hidden group/btn z-20">
              <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
              <span className="relative z-10 w-full text-center block tracking-[0.1em] drop-shadow-sm">QUIERO MI PLAN AHORA</span>
            </button>
  
            <div className="mt-6 font-sans text-xs md:text-sm text-[#E10600]/80 w-full text-center tracking-widest font-bold uppercase transition-opacity duration-300 opacity-70 group-hover:opacity-100">
              En 48 horas el acceso sube a USD 39.
            </div>
  
          </div>
        </div>
  
        {/* Guarantee */}
        <div className="max-w-xl mx-auto mt-16 text-center px-4 relative z-30">
          <p className="font-sans text-text-muted/80 text-sm md:text-base leading-relaxed p-6 rounded-3xl border border-white/5 bg-[#111114]/50 backdrop-blur-sm">
            <strong className="text-text-main font-semibold mr-1">Garantía Inquebrantable:</strong> 7 días de acceso total. Si descubres que no obtienes valor extremo y aplicable para tu futuro, te devolvemos el 100% de tu dinero hoy mismo. Zero riesgos.
          </p>
        </div>
  
      </section>
    );
  };
