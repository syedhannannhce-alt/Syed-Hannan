/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { WorkSection } from './components/WorkSection';
import { SocialCampaignsSection } from './components/SocialCampaignsSection';
import { VideosSection } from './components/VideosSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProofVaultSection, ProofTabKey } from './components/ProofVaultSection';
import { EventMarketingSection } from './components/EventMarketingSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [proofTab, setProofTab] = useState<ProofTabKey>('articles');

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F0F4F8] selection:bg-[#A855F7]/30 selection:text-[#F0F4F8] relative overflow-x-hidden font-sans">
      {/* Custom smooth cursor with slight lag and hover ring */}
      <CustomCursor />

      {/* Top Navbar */}
      <Navbar />

      <main>
        {/* 1. Hero with 3D Varsity Character & subtle tilt */}
        <HeroSection />

        {/* 2. Marquee */}
        <MarqueeSection />

        {/* 3. About Me (Framed for brand & product marketing) */}
        <AboutSection />

        {/* 4. What I enjoy doing (3 cards with color highlights) */}
        <WhatIDoSection />

        {/* 5. Where I've worked (Tabs with metric highlights & Instagram link) */}
        <WorkSection onNavigateToProofTab={(tabKey) => setProofTab(tabKey)} />

        {/* 6. Social Campaigns & UGC Meta Ads (Split grid with Instagram & LinkedIn) */}
        <SocialCampaignsSection />

        {/* 7. Videos I've worked on (with cinema modal) */}
        <VideosSection />

        {/* 8. Dedicated Certifications & Awards Section */}
        <CertificationsSection />

        {/* 9. The Proof Vault (Tabs for Articles, Decks, Social, Awards, Podcasts, YouTube) */}
        <ProofVaultSection
          activeTab={proofTab}
          onTabChange={(tabKey) => setProofTab(tabKey)}
        />

        {/* 10. Event Marketing */}
        <EventMarketingSection />

        {/* 11. Tools I use (with Higgsfield) */}
        <ToolsSection />

        {/* 12. Contact / Footer (Email, Phone, LinkedIn, Instagram) */}
        <ContactSection />
      </main>
    </div>
  );
}
