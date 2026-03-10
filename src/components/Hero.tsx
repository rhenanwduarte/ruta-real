import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-base", {
        opacity: 0,
        duration: 2,
        ease: "power2.out"
      })
        .from(".hero-word", {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=1.5")
        .from(".hero-dot", {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }, "-=0.8")
        .from(".hero-sub", {
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=0.8")
        .from(".hero-micro", {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8")
        .from(".hero-cta", {
          y: 20,
          opacity: 0,
          scale: 0.98,
          duration: 1,
          ease: "power3.out"
        }, "-=0.6");
    }, container);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string, className: string = "") => {
    return text.split(' ').map((word, i) => (
      <span key={i} className={`inline-block hero-word ${className}`}>
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <section ref={container} className="relative w-full h-[100dvh] bg-[#020305] flex flex-col items-center justify-center overflow-hidden">
      {/* Base strategic UI: Grid + global ambiance */}
      <div className="absolute inset-0 grid-pattern opacity-100 mix-blend-overlay hero-base"></div>

      {/* Cinematic Airplane Responsive Background */}
      <div className="absolute inset-0 z-0 hero-base pointer-events-none">
        <picture>
          <source media="(min-width: 768px)" srcSet="/airplane-desktop.jpg.png" />
          <img
            src="/airplane-mobile.jpg.png"
            alt="Cinematic Airplane Background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'contrast(1.1) saturate(0.8)' }}
          />
        </picture>

        {/* Reduce blue tones & enhance deep red tones */}
        <div className="absolute inset-0 bg-[#400000] mix-blend-multiply opacity-60"></div>
        <div className="absolute inset-0 bg-main-red mix-blend-overlay opacity-30"></div>

        {/* Subtle black overlay (40-60%) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Soft vignette around edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#000000_100%)] opacity-80"></div>

        {/* Blend smoothly with sections above and below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020305] opacity-100"></div>
      </div>



      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center justify-center w-full h-full pt-12 md:pt-16">

        <h1 className="flex flex-col items-center justify-center w-full relative z-10">
          <div className="font-sans text-xs md:text-sm lg:text-base text-text-muted/80 font-semibold tracking-[0.25em] uppercase mb-4 relative z-20">
            {splitText("ANTES DE PAGAR UNA AGENCIA...")}
          </div>

          <div className="font-serif text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] text-text-main leading-none mt-2 tracking-[-0.04em] flex items-baseline justify-center relative z-20">
            <span className="inline-block hero-word drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">DETENTE</span>
            <span className="inline-block hero-dot w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-main-red rounded-full ml-3 md:ml-6 mb-4 sm:mb-6 md:mb-10 lg:mb-14 shadow-[0_0_15px_rgba(217,4,41,0.6)]"></span>
          </div>
        </h1>

        <div className="hero-sub mt-4 md:mt-8 max-w-4xl px-2 relative z-20">
          <p className="font-sans text-xl md:text-3xl lg:text-[2.5rem] text-text-main font-medium leading-[1.3] drop-shadow-md">
            Podrías estar a punto de perder miles<br className="hidden md:block" />
            por una decisión emocional mal calculada.
          </p>
        </div>

        <div className="hero-micro mt-8 md:mt-12 mb-12 relative z-20">
          <p className="font-sans text-sm md:text-lg text-text-muted/70 leading-relaxed italic tracking-wide">
            La mayoría no fracasa por falta de valor.<br />
            Fracasa por falta de estrategia.
          </p>
        </div>

        <div className="hero-cta flex flex-col items-center gap-4 mt-2 relative z-20">
          <a href="#oferta" className="block">
            <button className="bg-main-red text-text-main px-12 py-5 font-sans font-bold text-lg md:text-xl transition-transform duration-300 hover:bg-hover-red"
              style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.46,0.45,0.94)' }}>
              <span>EMPEZAR AHORA – USD 19</span>
            </button>
          </a>
          <span className="font-sans text-[11px] md:text-xs text-text-muted/50 tracking-widest uppercase">
            Antes de tomar una decisión irreversible.
          </span>
        </div>

      </div>
    </section>
  );
};
