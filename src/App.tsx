/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { StickyMobileBar } from './components/StickyMobileBar';
import { EnquiryModal } from './components/EnquiryModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { ExploreDetailPage } from './pages/ExploreDetailPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ActivityDetailPage } from './pages/ActivityDetailPage';
import { PackagesPage } from './pages/PackagesPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { TripPlansPage } from './pages/TripPlansPage';
import { TripPlanDetailPage } from './pages/TripPlanDetailPage';
import { ResortsPage } from './pages/ResortsPage';
import { ResortDetailPage } from './pages/ResortDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryPreselectedItem, setEnquiryPreselectedItem] = useState<string>('');

  const handleOpenEnquiry = (preselectedItem?: string) => {
    setEnquiryPreselectedItem(preselectedItem || 'General Expedition Enquiry');
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF8F5] text-[#19231D] flex flex-col selection:bg-[#247565] selection:text-white">
        {/* Persistent Global Header */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Dynamic Route Pages */}
        <main className="flex-1 pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            
            {/* Explore Section */}
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/explore/:slug" element={<ExploreDetailPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* Activities Section */}
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activities/:slug" element={<ActivityDetailPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* Travel Packages Section */}
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/:slug" element={<PackageDetailPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* Trip Plans Section */}
            <Route path="/trip-plans" element={<TripPlansPage />} />
            <Route path="/trip-plans/:slug" element={<TripPlanDetailPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* Resorts & Stays Section */}
            <Route path="/resorts" element={<ResortsPage />} />
            <Route path="/resorts/:slug" element={<ResortDetailPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* About & Contact */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Global Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Mobile Sticky Quick Action Bar */}
        <StickyMobileBar onOpenEnquiry={handleOpenEnquiry} />

        {/* Global Instant Enquiry / Quick Booking Modal */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={handleCloseEnquiry}
          preselectedItem={enquiryPreselectedItem}
        />
      </div>
    </BrowserRouter>
  );
}
