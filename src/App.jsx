import Header from "./components/Header";
import Hero from "./components/Hero";
import Payment from "./components/Payment";
import ApiSection from "./components/ApiSection";
import SecuritySection from "./components/SecutritySection";
import TrustedSection from "./components/TrustedSection";
import LogoSection from "./components/LogoSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Payment />
      <ApiSection />
      <SecuritySection />
      <TrustedSection />
      <LogoSection />
      <PartnersSection />
      <Footer />

    </div>
  );
}
