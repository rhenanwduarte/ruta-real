export const Manifesto = () => {
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
