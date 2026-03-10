import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Exclusion = () => {
    const containerRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".exclusion-item",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%", 
            }
          }
        );
      }, containerRef);
  
      return () => ctx.revert();
    }, []);
  
    return (
      <section ref={containerRef} className="w-full py-32 px-4 bg-[#020305] relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-text-main mb-16 tracking-tight">
            Esto <span className="text-cta-critical">NO</span> es para todos.
          </h2>
  
          <div className="w-full max-w-3xl flex flex-col gap-5 mb-20 text-left">
            <div className="exclusion-item opacity-0 bg-[#1A1A1E]/50 p-6 md:p-8 rounded-[2.5rem] border border-white/5 flex items-start gap-5 transition-colors hover:bg-white/[0.02]">
              <div className="w-2.5 h-2.5 rounded-full bg-cta-critical mt-2.5 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
              <p className="font-sans text-text-muted text-lg md:text-xl leading-relaxed">Personas que solo buscan motivación para salir.</p>
            </div>
            <div className="exclusion-item opacity-0 bg-[#1A1A1E]/50 p-6 md:p-8 rounded-[2.5rem] border border-white/5 flex items-start gap-5 transition-colors hover:bg-white/[0.02]">
              <div className="w-2.5 h-2.5 rounded-full bg-cta-critical mt-2.5 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
              <p className="font-sans text-text-muted text-lg md:text-xl leading-relaxed">Quienes creen que, llegando, 'todo saldrá bien' por arte de magia.</p>
            </div>
            <div className="exclusion-item opacity-0 bg-[#1A1A1E]/50 p-6 md:p-8 rounded-[2.5rem] border border-white/5 flex items-start gap-5 transition-colors hover:bg-white/[0.02]">
              <div className="w-2.5 h-2.5 rounded-full bg-cta-critical mt-2.5 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
              <p className="font-sans text-text-muted text-lg md:text-xl leading-relaxed">Personas que quieren atajos mágicos o sistemas ilegales.</p>
            </div>
          </div>
  
          <p className="font-sans text-2xl lg:text-3xl text-hover-red font-medium italic drop-shadow-md">
            Es para quien quiere salir... pero quiere hacerlo bien.
          </p>
        </div>
      </section>
    );
  };
