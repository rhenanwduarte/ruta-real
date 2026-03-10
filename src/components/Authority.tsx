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

export const Authority = () => {
    return (
      <section id="autoridad" className="w-full py-12 md:py-20 px-4 bg-[#020305] relative z-10 overflow-hidden">
        <CinematicCloudBackground />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-6 md:gap-8 relative z-20 md:pr-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-main-red leading-tight">No fue suerte.</h2>
            <div className="flex flex-col gap-6 text-text-muted font-sans text-lg md:text-xl leading-relaxed">
              <p>
                Trabajo y estudio fuera de mi país. No fue motivación barata, ni creer que el universo conspiró a mi favor.
              </p>
              <p>
                Fue entender el sistema. Diseñé una hoja de ruta comprobada para minimizar riesgos, costos y evitar la falsa ilusión de las agencias masivas.
              </p>
            </div>
          </div>
  
          {/* Adjusted base height for mobile to fit tighter cluster */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center mt-8 lg:mt-0">
            {[
              "/1.png",
              "/2.png",
              "/3.png",
              "/5.png"
            ].map((src, i) => {
              // UX FIX: Added mobile-specific default rotations so they don't look flat on non-hover devices
              const rotations = [
                '-rotate-[14deg] md:-rotate-[14deg]', 
                'rotate-[4deg] md:rotate-[4deg]', 
                '-rotate-[8deg] md:-rotate-[8deg]', 
                'rotate-[16deg] md:rotate-[16deg]'
              ];
              const hoverRotations = ['md:group-hover:-rotate-[6deg]', 'md:group-hover:rotate-0', 'md:group-hover:-rotate-[2deg]', 'md:group-hover:rotate-[6deg]'];
  
              // Tighter spread using fixed rems on mobile to avoid screen cut-off and expose background
              const xOffsets = [
                '-translate-x-16 sm:-translate-x-24 md:-translate-x-32 lg:-translate-x-[50%]',
                '-translate-x-4 sm:-translate-x-8 md:-translate-x-12 lg:-translate-x-[10%]',
                'translate-x-4 sm:translate-x-8 md:translate-x-12 lg:translate-x-[30%]',
                'translate-x-16 sm:translate-x-24 md:translate-x-32 lg:translate-x-[70%]'
              ];
  
              const yOffsets = [
                '-translate-y-12 sm:-translate-y-16 md:-translate-y-8 lg:translate-y-4',
                '-translate-y-2 sm:translate-y-0 md:translate-y-4 lg:-translate-y-6',
                'translate-y-8 sm:translate-y-16 md:translate-y-20 lg:translate-y-12',
                'translate-y-20 sm:translate-y-32 md:translate-y-36 lg:-translate-y-8'
              ];
              const zIndexes = ['z-10', 'z-20', 'z-30', 'z-40'];
  
              return (
                // Forced !z-[60] on hover to guarantee it jumps to front
                <div
                  key={i}
                  className={`absolute ${xOffsets[i]} ${yOffsets[i]} ${zIndexes[i]} md:hover:!z-[60] group flex items-center justify-center transition-all duration-300`}
                  style={{
                    perspective: '1200px'
                  }}
                >
                  {/* Reduced mobile sizes so they fit the screen width */}
                  <div
                    className={`w-36 sm:w-48 md:w-56 lg:w-[260px] xl:w-[280px] bg-[#F5F6F8] p-2.5 pb-10 sm:p-3 sm:pb-12 md:p-4 md:pb-16 lg:p-5 lg:pb-20 shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out cursor-pointer md:group-hover:scale-[1.2] md:group-hover:-translate-y-8 md:group-hover:shadow-[0_45px_100px_rgba(0,0,0,1)] ${rotations[i]} ${hoverRotations[i]} border border-white/10`}
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
