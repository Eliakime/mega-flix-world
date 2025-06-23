
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ChannelsSection from '@/components/ChannelsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <ChannelsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CTASection />
    </div>
  );
};

export default Index;
