import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PainAndBreak = () => {
    const containerRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        // Subtle staggered reveal for the problem items
        gsap.fromTo(
          ".problem-item",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%", // Trigger when top of section hits 60% of viewport
            }
          }
        );
      }, containerRef);
  
      return () => ctx.revert();
    }, []);
  
    return (
      <section id="problema" ref={containerRef} className="w-full py-16 md:py-24 px-4 bg-[#020305] relative z-10 overflow-hidden group">
        {/* Smoky Generated Image Background with Hover Effect */}
        <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-[1.02]">
          <div className="absolute inset-0 bg-[url('/smoke.png')] bg-cover bg-center opacity-30 mix-blend-screen transition-opacity duration-700 group-hover:opacity-50" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)' }}></div>
        </div>
  
        {/* Top Blend Gradient to fuse with Hero section seamlessly */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#020305] to-transparent z-0 pointer-events-none"></div>
  
        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center leading-tight mb-14 text-text-main">
            El problema no es salir.<br />
            <span className="text-hover-red italic">Es salir sin estrategia.</span>
          </h2>
  
          <div className="w-full max-w-4xl flex flex-col gap-4 md:gap-5">
            <div className="problem-item opacity-0 bg-bg-elevated p-5 md:p-6 lg:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 flex items-start gap-4 md:gap-6 transition-colors duration-300 hover:border-main-red/30 hover:bg-white/[0.03]">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-main-red mt-2 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
              <p className="font-sans text-text-muted text-[15px] md:text-xl lg:text-2xl leading-relaxed">Elegir un país por emoción y no por viabilidad real.</p>
            </div>
            <div className="problem-item opacity-0 bg-bg-elevated p-5 md:p-6 lg:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 flex items-start gap-4 md:gap-6 transition-colors duration-300 hover:border-main-red/30 hover:bg-white/[0.03]">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-main-red mt-2 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
              <p className="font-sans text-text-muted text-[15px] md:text-xl lg:text-2xl leading-relaxed">Subestimar los costos reales de instalación a largo plazo.</p>
            </div>
            <div className="problem-item opacity-0 bg-bg-elevated p-5 md:p-6 lg:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 flex items-start gap-4 md:gap-6 transition-colors duration-300 hover:border-main-red/30 hover:bg-white/[0.03]">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-main-red mt-2 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
              <p className="font-sans text-text-muted text-[15px] md:text-xl lg:text-2xl leading-relaxed">Depender totalmente de terceros e intermediarios que no velan por tu futuro.</p>
            </div>
            <div className="problem-item opacity-0 bg-bg-elevated p-5 md:p-6 lg:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 flex items-start gap-4 md:gap-6 transition-colors duration-300 hover:border-main-red/30 hover:bg-white/[0.03]">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-main-red mt-2 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
              <p className="font-sans text-text-muted text-[15px] md:text-xl lg:text-2xl leading-relaxed">Decidir sin estructura legal o financiera clara.</p>
            </div>
          </div>
  
          <div className="mt-24 text-center font-sans text-2xl lg:text-3xl text-text-main font-medium italic pb-12 opacity-90 drop-shadow-md">
            "Salir del país no es difícil. Hacerlo mal sí."
          </div>
        </div>
      </section>
    );
  };
