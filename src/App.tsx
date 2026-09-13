/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { StickyMobileBar } from './components/StickyMobileBar';
import { EnquiryModal } from './components/EnquiryModal';
import { RouteLoadingFallback } from './components/RouteLoadingFallback';
import { scheduleIdlePrefetch } from './utils/routePrefetch';

// Eagerly loaded primary landing page for zero-delay First Contentful Paint
import { HomePage } from './pages/HomePage';

// Code-split route modules loaded asynchronously on demand
const ExplorePage = lazy(() => import('./pages/ExplorePage').then(m => ({ default: m.ExplorePage })));
const ExploreDetailPage = lazy(() => import('./pages/ExploreDetailPage').then(m => ({ default: m.ExploreDetailPage })));
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage').then(m => ({ default: m.ActivitiesPage })));
const ActivityDetailPage = lazy(() => import('./pages/ActivityDetailPage').then(m => ({ default: m.ActivityDetailPage })));
const PackagesPage = lazy(() => import('./pages/PackagesPage').then(m => ({ default: m.PackagesPage })));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage').then(m => ({ default: m.PackageDetailPage })));
const TripPlansPage = lazy(() => import('./pages/TripPlansPage').then(m => ({ default: m.TripPlansPage })));
const TripPlanDetailPage = lazy(() => import('./pages/TripPlanDetailPage').then(m => ({ default: m.TripPlanDetailPage })));
const ResortsPage = lazy(() => import('./pages/ResortsPage').then(m => ({ default: m.ResortsPage })));
const ResortDetailPage = lazy(() => import('./pages/ResortDetailPage').then(m => ({ default: m.ResortDetailPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));

interface AnimatedRoutesProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = ({ onOpenEnquiry }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition-enter flex-1 flex flex-col">
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes location={location}>
          <Route path="/" element={<HomePage onOpenEnquiry={onOpenEnquiry} />} />
          
          {/* Explore Section */}
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore/:slug" element={<ExploreDetailPage onOpenEnquiry={onOpenEnquiry} />} />

          {/* Activities Section */}
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/:slug" element={<ActivityDetailPage onOpenEnquiry={onOpenEnquiry} />} />

          {/* Travel Packages Section */}
          <Route path="/packages" element={<PackagesPage onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/packages/:slug" element={<PackageDetailPage onOpenEnquiry={onOpenEnquiry} />} />

          {/* Trip Plans Section */}
          <Route path="/trip-plans" element={<TripPlansPage onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/trip-plans/:slug" element={<TripPlanDetailPage onOpenEnquiry={onOpenEnquiry} />} />

          {/* Resorts & Stays Section */}
          <Route path="/resorts" element={<ResortsPage onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/resorts/:slug" element={<ResortDetailPage onOpenEnquiry={onOpenEnquiry} />} />

          {/* Dedicated Photography Gallery */}
          <Route path="/gallery" element={<GalleryPage onOpenEnquiry={onOpenEnquiry} />} />

          {/* About & Contact */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryPreselectedItem, setEnquiryPreselectedItem] = useState<string>('');

  useEffect(() => {
    scheduleIdlePrefetch();
  }, []);

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
        <main className="flex-1 pb-16 md:pb-0 flex flex-col">
          <AnimatedRoutes onOpenEnquiry={handleOpenEnquiry} />
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
