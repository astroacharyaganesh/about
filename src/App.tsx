import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AtAGlanceStrip } from './components/AtAGlanceStrip';
import { JourneySection } from './components/JourneySection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { AchievementsSection } from './components/AchievementsSection';
import { WhyTrustSection } from './components/WhyTrustSection';
import { ClientStoriesSection } from './components/ClientStoriesSection';
import { LearnSection } from './components/LearnSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ReviewsModal } from './components/ReviewsModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [reviewsModalState, setReviewsModalState] = useState<{
    isOpen: boolean;
    tab: 'google' | 'students';
  }>({
    isOpen: false,
    tab: 'google',
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A202C] flex flex-col font-sans-clean selection:bg-amber-700/20 selection:text-amber-950">
      {/* 1-row 3-zone Top Bar Contract Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        {/* SECTION 1: Hero */}
        <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* SECTION 2: At a Glance (Quick-facts strip) */}
        <AtAGlanceStrip />

        {/* SECTION 3: Journey */}
        <JourneySection />

        {/* SECTION 4: Vision & Mission */}
        <VisionMissionSection />

        {/* SECTION 5: Experience & Expertise */}
        <ExpertiseSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* SECTION 6: Achievements in Numbers */}
        <AchievementsSection />

        {/* SECTION 7: Why Trust Acharya Ganesh */}
        <WhyTrustSection />

        {/* SECTION 8: Client Stories (Testimonials) */}
        <ClientStoriesSection
          onOpenReviews={(tab) => setReviewsModalState({ isOpen: true, tab })}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* SECTION 9: Learn With Him */}
        <LearnSection />

        {/* SECTION 10: FAQ */}
        <FaqSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* SECTION 11: Contact & Social Media */}
        <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer & Disclaimer */}
      <Footer />

      {/* Interactive Booking Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Interactive Verified Reviews & Student Video Reviews Modal */}
      <ReviewsModal
        isOpen={reviewsModalState.isOpen}
        onClose={() => setReviewsModalState({ isOpen: false, tab: 'google' })}
        initialTab={reviewsModalState.tab}
      />
    </div>
  );
}
