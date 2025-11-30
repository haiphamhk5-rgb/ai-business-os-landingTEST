
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Speaker from './components/Speaker';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import PaymentModal from './components/PaymentModal';

const App: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{name: string, price: string} | undefined>(undefined);

  const openPayment = (pkgName: string = "ƯU ĐÃI ĐẶC BIỆT", price: string = "9.900.000đ") => {
    setSelectedPackage({ name: pkgName, price: price });
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header onOpenPayment={() => openPayment()} />
      <main>
        <Hero onOpenPayment={() => openPayment()} />
        <Problems />
        <Solution />
        <Speaker />
        <Testimonials />
        <Pricing onOpenPayment={openPayment} />
        <FAQ />
      </main>
      <Footer />
      
      {/* AI Assistant Feature */}
      <AIChat />

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)}
        packageName={selectedPackage?.name}
        price={selectedPackage?.price}
      />
    </div>
  );
};

export default App;
