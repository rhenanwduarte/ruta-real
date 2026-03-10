import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ShieldCheck, Lock, CreditCard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Texture overlay component
const NoiseOverlay = () => (
  <svg
    className="noise-overlay"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="noiseFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

const Navbar = () => {
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

const Hero = () => {
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

const PainAndBreak = () => {
  return (
    <section id="problema" className="w-full py-16 md:py-24 px-4 bg-[#020305] relative z-10 overflow-hidden group">
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
          <div className="bg-bg-elevated p-5 md:p-6 lg:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 flex items-start gap-4 md:gap-6 transition-colors duration-300 hover:border-main-red/30 hover:bg-white/[0.03]">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-main-red mt-2 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
            <p className="font-sans text-text-muted text-[15px] md:text-xl lg:text-2xl leading-relaxed">Elegir un país por emoción y no por viabilidad real.</p>
          </div>
          <div className="bg-bg-elevated p-5 md:p-6 lg:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 flex items-start gap-4 md:gap-6 transition-colors duration-300 hover:border-main-red/30 hover:bg-white/[0.03]">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-main-red mt-2 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
            <p className="font-sans text-text-muted text-[15px] md:text-xl lg:text-2xl leading-relaxed">Subestimar los costos reales de instalación a largo plazo.</p>
          </div>
          <div className="bg-bg-elevated p-5 md:p-6 lg:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 flex items-start gap-4 md:gap-6 transition-colors duration-300 hover:border-main-red/30 hover:bg-white/[0.03]">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-main-red mt-2 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
            <p className="font-sans text-text-muted text-[15px] md:text-xl lg:text-2xl leading-relaxed">Depender totalmente de terceros e intermediarios que no velan por tu futuro.</p>
          </div>
          <div className="bg-bg-elevated p-5 md:p-6 lg:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 flex items-start gap-4 md:gap-6 transition-colors duration-300 hover:border-main-red/30 hover:bg-white/[0.03]">
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

const Manifesto = () => {
  return (
    <section id="manifesto" className="w-full py-12 md:py-16 px-4 bg-[#020305] relative overflow-hidden flex flex-col items-center justify-center group">
      {/* Base dark tone matching the site */}
      <div className="absolute inset-0 bg-[#020305] z-0"></div>

      {/* Atmospheric Texture Background with Intense Red Tint */}
      <div className="absolute inset-0 z-0 transition-transform duration-[1.5s] ease-in-out group-hover:scale-[1.05] pointer-events-none">

        {/* Red Tint Overlay for the smoke */}
        <div className="absolute top-1/2 left-1/2 w-[150%] md:w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[#D90429] opacity-20 mix-blend-multiply z-0"></div>

        <div
          className="absolute top-1/2 left-1/2 w-[150%] md:w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[url('/smoke.png')] bg-cover bg-center opacity-[0.25] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.35]"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, transparent 75%)'
          }}
        ></div>
      </div>

      {/* Deep Red Strong Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D90429] rounded-full blur-[100px] opacity-20 mix-blend-overlay z-0 pointer-events-none"></div>

      {/* Top and Bottom Fading Gradients for Seamless Blending */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#020305] via-[#020305]/80 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020305] via-[#020305]/80 to-transparent z-0 pointer-events-none"></div>

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#020305_100%)] opacity-95 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-text-main leading-tight mb-4 tracking-tight drop-shadow-lg">
          La mayoría improvisa.<br />
          <span className="text-hover-red italic">Los estratégicos se preparan.</span>
        </h2>
      </div>
    </section>
  );
};


const CinematicCloudBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Base dark tone matching the site */}
    <div className="absolute inset-0 bg-[#020305] opacity-100"></div>

    {/* Abstract Crystal Texture Background (Responsive & Unaltered) */}
    <div className="absolute inset-0 w-full h-full pt-4 lg:pt-0 flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-center">
      <picture className="w-full h-full flex items-start lg:items-center justify-center">
        <source media="(min-width: 1024px)" srcSet="/fundo-desktop-centro.png" />
        <img
          src="/fundo-mobile-centro.png"
          alt="Atmospheric Energy Background"
          className="w-full max-w-[500px] lg:max-w-none lg:w-full h-auto lg:h-full mx-auto object-contain object-top lg:object-cover lg:object-center opacity-100"
        />
      </picture>
    </div>

    {/* Top and Bottom gradient fades for absolute perfect blending */}
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020305] via-[#020305]/80 to-transparent opacity-100"></div>
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020305] via-[#020305]/80 to-transparent opacity-100"></div>
  </div>
);

const Authority = () => {
  return (
    <section id="autoridad" className="w-full py-8 md:py-16 px-4 bg-[#020305] relative z-10 overflow-hidden">
      <CinematicCloudBackground />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1 flex flex-col gap-6 md:gap-8">
          <h2 className="font-serif text-4xl md:text-5xl text-main-red">No fue suerte.</h2>
          <div className="flex flex-col gap-6 text-text-muted font-sans text-lg leading-relaxed">
            <p>
              Trabajo y estudio fuera de mi país. No fue motivación barata, ni creer que el universo conspiró a mi favor.
            </p>
            <p>
              Fue entender el sistema. Diseñé una hoja de ruta comprobada para minimizar riesgos, costos y evitar la falsa ilusión de las agencias masivas.
            </p>
          </div>
        </div>

        {/* Adjusted base height for mobile to fit tighter cluster */}
        <div className="order-1 lg:order-2 relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0 lg:pr-12">
          {[
            "/1.png",
            "/2.png",
            "/3.png",
            "/5.png"
          ].map((src, i) => {
            const rotations = ['-rotate-[14deg]', 'rotate-[4deg]', '-rotate-[8deg]', 'rotate-[16deg]'];
            const hoverRotations = ['group-hover:-rotate-[6deg]', 'group-hover:rotate-0', 'group-hover:-rotate-[2deg]', 'group-hover:rotate-[6deg]'];

            // Tighter spread using fixed rems on mobile to avoid screen cut-off and expose background
            const xOffsets = [
              '-translate-x-20 sm:-translate-x-24 md:-translate-x-32 lg:-translate-x-[70%]',
              '-translate-x-6 sm:-translate-x-8 md:-translate-x-12 lg:-translate-x-[10%]',
              'translate-x-6 sm:translate-x-8 md:translate-x-12 lg:translate-x-[50%]',
              'translate-x-20 sm:translate-x-24 md:translate-x-32 lg:translate-x-[110%]'
            ];

            const yOffsets = [
              '-translate-y-12 sm:-translate-y-16 md:-translate-y-8 lg:translate-y-8',
              '-translate-y-2 sm:translate-y-0 md:translate-y-4 lg:-translate-y-10',
              'translate-y-8 sm:translate-y-16 md:translate-y-20 lg:translate-y-14',
              'translate-y-20 sm:translate-y-32 md:translate-y-36 lg:-translate-y-6'
            ];
            const zIndexes = ['z-10', 'z-20', 'z-30', 'z-40'];

            return (
              // Forced !z-[60] on hover to guarantee it jumps to front
              <div
                key={i}
                className={`absolute ${xOffsets[i]} ${yOffsets[i]} ${zIndexes[i]} hover:!z-[60] group flex items-center justify-center transition-all duration-300`}
                style={{
                  perspective: '1200px'
                }}
              >
                {/* Reduced mobile sizes so they fit the screen width */}
                <div
                  className={`w-40 sm:w-48 md:w-56 lg:w-[280px] bg-[#F5F6F8] p-2.5 pb-10 sm:p-3 sm:pb-12 md:p-4 md:pb-16 lg:p-5 lg:pb-20 shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out cursor-pointer group-hover:scale-[1.15] md:group-hover:scale-[1.2] group-hover:-translate-y-6 md:group-hover:-translate-y-8 group-hover:shadow-[0_45px_100px_rgba(0,0,0,1)] ${rotations[i]} ${hoverRotations[i]} border border-white/10`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-[#0A0A0C] border border-[#E5E7EB]/50 shadow-inner">
                    <img
                      src={src}
                      alt={`Momento ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ActsStructure = () => {
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
      <div className="max-w-6xl mx-auto mb-32 text-center px-4">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-text-main mb-6">La <span className="text-main-red italic">Estructura</span></h2>
        <p className="font-sans text-xl lg:text-2xl text-text-muted">Desarrollado en 7 días accionables.</p>
      </div>

      <div className="max-w-6xl mx-auto relative px-4">
        {actsData.map((act, idx) => (
          <div key={idx} className="act-card w-full h-[80vh] flex items-center justify-center mb-[10vh] relative origin-top">
            <div className="w-full bg-bg-elevated border border-white/5 rounded-[3rem] p-10 md:p-20 flex flex-col justify-center shadow-[0_-10px_40px_rgba(11,11,13,0.9)]">
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

const Exclusion = () => {
  return (
    <section className="w-full py-32 px-4 bg-[#020305] relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-text-main mb-16 tracking-tight">
          Esto <span className="text-cta-critical">NO</span> es para todos.
        </h2>

        <div className="w-full max-w-3xl flex flex-col gap-5 mb-20 text-left">
          <div className="bg-[#1A1A1E]/50 p-6 md:p-8 rounded-[2.5rem] border border-white/5 flex items-start gap-5 transition-colors hover:bg-white/[0.02]">
            <div className="w-2.5 h-2.5 rounded-full bg-cta-critical mt-2.5 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
            <p className="font-sans text-text-muted text-lg md:text-xl leading-relaxed">Personas que solo buscan motivación para salir.</p>
          </div>
          <div className="bg-[#1A1A1E]/50 p-6 md:p-8 rounded-[2.5rem] border border-white/5 flex items-start gap-5 transition-colors hover:bg-white/[0.02]">
            <div className="w-2.5 h-2.5 rounded-full bg-cta-critical mt-2.5 shrink-0 shadow-[0_0_10px_rgba(217,4,41,0.5)]"></div>
            <p className="font-sans text-text-muted text-lg md:text-xl leading-relaxed">Quienes creen que, llegando, 'todo saldrá bien' por arte de magia.</p>
          </div>
          <div className="bg-[#1A1A1E]/50 p-6 md:p-8 rounded-[2.5rem] border border-white/5 flex items-start gap-5 transition-colors hover:bg-white/[0.02]">
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

const OfferAndUrgency = () => {
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

const SafePurchase = () => {
  return (
    <section className="w-full bg-[#020305] py-16 px-4 relative z-20">
      <div className="max-w-5xl mx-auto">
        {/* Mobile: stacked; Desktop: 3 columns */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 md:divide-x md:divide-white/10">

          {/* Item 1 */}
          <div className="flex flex-col items-center justify-center text-center px-4 md:px-12 w-full md:w-1/3 group">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-[#111114] flex items-center justify-center mb-4 transition-colors duration-500 group-hover:border-[#E10600]/30 group-hover:bg-[#E10600]/5">
              <ShieldCheck className="w-5 h-5 text-[#E10600]" />
            </div>
            <h4 className="font-sans font-bold text-text-main text-sm uppercase tracking-widest mb-2">Compra 100% Segura</h4>
            <p className="font-sans text-xs text-text-muted/80 leading-relaxed max-w-[220px]">
              Entorno seguro. Tus datos están protegidos bajo estándares globales de encriptación.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center justify-center text-center px-4 md:px-12 w-full md:w-1/3 group">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-[#111114] flex items-center justify-center mb-4 transition-colors duration-500 group-hover:border-[#E10600]/30 group-hover:bg-[#E10600]/5">
              <Lock className="w-5 h-5 text-[#E10600]" />
            </div>
            <h4 className="font-sans font-bold text-text-main text-sm uppercase tracking-widest mb-2">Privacidad Absoluta</h4>
            <p className="font-sans text-xs text-text-muted/80 leading-relaxed max-w-[220px]">
              Tu información personal es estrictamente confidencial y nunca será compartida.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center justify-center text-center px-4 md:px-12 w-full md:w-1/3 group">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-[#111114] flex items-center justify-center mb-4 transition-colors duration-500 group-hover:border-[#E10600]/30 group-hover:bg-[#E10600]/5">
              <CreditCard className="w-5 h-5 text-[#E10600]" />
            </div>
            <h4 className="font-sans font-bold text-text-main text-sm uppercase tracking-widest mb-2">Múltiples Opciones</h4>
            <p className="font-sans text-xs text-text-muted/80 leading-relaxed max-w-[220px]">
              Aceptamos tarjetas de crédito, débito y métodos de pago locales de tu país.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
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

const SocialProof = () => {
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

function App() {
  return (
    <div className="relative bg-bg-deep min-h-screen text-text-main selection:bg-main-red/30">
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <PainAndBreak />
        <Manifesto />
        <Authority />
        <ActsStructure />
        <Exclusion />
        <SocialProof />
        <OfferAndUrgency />
        <SafePurchase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
