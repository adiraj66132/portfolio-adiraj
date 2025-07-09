
import React from 'react';
import HeroSection from '@/components/HeroSection';
import HighlightsSection from '@/components/HighlightsSection';
import ContactSection from '@/components/ContactSection';
import { Toaster } from 'react-hot-toast';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #374151',
          },
        }}
      />
      <HeroSection />
      <HighlightsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
