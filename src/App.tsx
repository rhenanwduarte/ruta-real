import { NoiseOverlay } from './components/ui/NoiseOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainAndBreak } from './components/PainAndBreak';
import { Manifesto } from './components/Manifesto';
import { Authority } from './components/Authority';
import { ActsStructure } from './components/ActsStructure';
import { Exclusion } from './components/Exclusion';
import { SocialProof } from './components/SocialProof';
import { OfferAndUrgency } from './components/OfferAndUrgency';
import { SafePurchase } from './components/SafePurchase';
import { Footer } from './components/Footer';

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
