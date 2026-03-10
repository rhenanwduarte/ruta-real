export const SocialProof = () => {
    const testimonials = [
      { name: "Miguel A.", text: "Hermano, si hubiera tenido esto hace 6 meses me ahorraba 5 mil dólares y tres dolores de cabeza con migración." },
      { name: "Valentina P.", text: "Las agencias me querían cobrar una locura por este mismo paso a paso. La estructura financiera del Día 6 vale oro puro." },
      { name: "Carlos F.", text: "Dejé de improvisar. El nivel de detalle sobre errores críticos me salvó de cagarla en el aeropuerto." },
      { name: "Lucía M.", text: "Impactada. No es motivación barata, es estrategia cruda y real para salir del hoyo sin depender de falsas promesas." },
      { name: "Diego R.", text: "Brutal. Pensé que sabía y cuando vi la sección de costos ocultos me di cuenta que iba directo a quebrar llegando." },
      { name: "Andrea B.", text: "Me ahorraste literalmente 1 año de trabajo y estrés emocional. Brutal transparente, cero humo." },
      { name: "Fernando G.", text: "Lo mejor de 'Ruta Real' es que te quita la venda de los ojos. El mercado está lleno de charlatanes, esto es la cura." },
      { name: "Camila V.", text: "Directo, sin filtro y 100% aplicable. Hoy tengo un plan financiero sólido que la agencia me ocultó." },
    ];
  
    // Tripling the array to ensure smooth infinite scrolling even on ultra-wide screens
    const scrollTracks = [...testimonials, ...testimonials, ...testimonials];
  
    return (
      <section className="w-full py-32 bg-[#020305] relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 mb-16 relative z-20">
          <h2 className="font-sans text-[#E10600] text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Cientos ya salieron de la ignorancia estratégica
          </h2>
          <p className="font-serif text-3xl md:text-5xl text-text-main text-balance">
            No consumas humo. <span className="text-text-muted italic">Consume resultados.</span>
          </p>
        </div>
  
        {/* Infinite Carousel Container */}
        <div className="relative w-full flex flex-col gap-6 -mx-4 md:mx-0 mask-edges">
          {/* Track 1 - Scrolls Left */}
          <div className="flex w-[300vw] md:w-[200vw] lg:w-[150vw] animate-scroll-left gap-6 group hover:[animation-play-state:paused] pr-6">
            {scrollTracks.map((t, i) => (
              <div key={`t1-${i}`} className="w-[300px] md:w-[400px] shrink-0 bg-[#111114]/80 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-white/5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E10600]/20 flex items-center justify-center text-[#E10600] font-bold text-sm shrink-0 border border-[#E10600]/30">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-sans font-bold text-text-main text-sm">{t.name}</span>
                </div>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
  
          {/* Track 2 - Scrolls Right (Offset animation start to stagger) */}
          <div className="flex w-[300vw] md:w-[200vw] lg:w-[150vw] animate-scroll-right gap-6 group hover:[animation-play-state:paused] pr-6 ml-[-100vw]">
            {[...scrollTracks].reverse().map((t, i) => (
              <div key={`t2-${i}`} className="w-[300px] md:w-[400px] shrink-0 bg-[#0A0A0C]/90 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-white/5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-main font-bold text-sm shrink-0 border border-white/10">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-sans font-bold text-text-main text-sm">{t.name}</span>
                </div>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Left/Right Fade Masks for smooth scrolling disappear effect */}
        <div className="absolute left-0 top-0 w-16 md:w-48 xl:w-96 h-full bg-gradient-to-r from-[#020305] via-[#020305]/80 to-transparent z-20 pointer-events-none fade-mask-left"></div>
        <div className="absolute right-0 top-0 w-16 md:w-48 xl:w-96 h-full bg-gradient-to-l from-[#020305] via-[#020305]/80 to-transparent z-20 pointer-events-none fade-mask-right"></div>
      </section>
    );
  };
