import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export const SafePurchase = () => {
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
