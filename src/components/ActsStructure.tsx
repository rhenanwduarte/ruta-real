import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ActsStructure = () => {
    const container = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray('.act-card') as HTMLDivElement[];
  
        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top top+=100`,
            endTrigger: container.current,
            end: `bottom bottom-=100`,
            pin: true,
            pinSpacing: false,
          });
  
          if (i > 0) {
            gsap.to(cards[i - 1], {
              scale: 0.9,
              filter: 'blur(20px)',
              opacity: 0.5,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: `top bottom-=100`,
                end: `top top+=100`,
                scrub: true,
              }
            });
          }
        });
      }, container);
  
      return () => ctx.revert();
    }, []);
  
    const actsData = [
      { title: "Día 1: ¿Debes salir ahora?", desc: "Auditoría de tu situación. Es el momento adecuado o un acto desesperado." },
      { title: "Día 2: País correcto según tu perfil", desc: "No te dejes llevar por tendencias. Escoge tu destino en base a tus capacidades y presupuesto." },
      { title: "Día 3: Estudio vs trabajo", desc: "Las dos vías principales de emigración. Desglosamos ventajas reales e ilusiones." },
      { title: "Día 4: Costos reales", desc: "La verdad sobre bolsas de dinero, manutención, pasajes y emergencias ocultas." },
      { title: "Día 5: Errores críticos", desc: "Los fallos de principiante que las agencias ocultan y que te obligan a volver derrotado." },
      { title: "Día 6: Preparación financiera", desc: "Cómo generar y proteger capital antes, durante y después del aterrizaje." },
      { title: "Día 7: Tu plan final", desc: "Armado de la ruta. Fechas, métricas, y una estructura inquebrantable." },
    ];
  
    return (
      <section id="estructura" ref={container} className="w-full py-32 bg-[#020305] relative z-10 pb-[50vh]">
  
        {/* 3D Hexagonal Subtle Background */}
        <div className="absolute top-0 left-0 w-full h-[200vh] z-0 pointer-events-none overflow-hidden flex flex-col items-center justify-start pt-20">
          {/* Hex Pattern */}
          <div
            className="absolute inset-0 bg-[url('/bg-hex.png')] bg-[length:250%_auto] md:bg-[length:150%_auto] lg:bg-[length:100%_auto] bg-top bg-no-repeat opacity-[0.06] mix-blend-screen"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)'
            }}
          ></div>
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[600px] bg-[#D90429] rounded-full blur-[120px] md:blur-[180px] opacity-[0.05] mix-blend-overlay"></div>
        </div>
  
        <div className="max-w-6xl mx-auto mb-32 text-center px-4 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-text-main mb-6">La <span className="text-main-red italic">Estructura</span></h2>
          <p className="font-sans text-xl lg:text-2xl text-text-muted">Desarrollado en 7 días accionables.</p>
        </div>
  
        <div className="max-w-6xl mx-auto relative px-4 z-10">
          {actsData.map((act, idx) => (
            <div key={idx} className="act-card w-full h-[80vh] flex items-center justify-center mb-[10vh] relative origin-top">
              <div className="w-full bg-bg-elevated border border-white/5 rounded-[3rem] p-10 md:p-20 flex flex-col justify-center shadow-[0_-10px_40px_rgba(11,11,13,0.9)] backdrop-blur-md">
                <div className="text-hover-red font-serif text-3xl md:text-4xl mb-6 italic opacity-80">0{idx + 1}</div>
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-main mb-6 tracking-tight leading-none">{act.title}</h3>
                <p className="font-sans text-xl lg:text-2xl text-text-muted/90 leading-relaxed max-w-4xl">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
