"use client";

import ChatBox from "@/components/chat";
import Democracy from "@/components/democracy";
import Section6Examples from "@/components/example";
import VietnamFooter from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LuanDiemSection from "@/components/menu-section";
import Section2RuleOfLaw from "@/components/rule-of-law";
import Section1Theory from "@/components/section-1-theory";
import Section2Relation from "@/components/section-2-relation";
import Section3Balance from "@/components/section-3-balance";
import Section4StateRole from "@/components/section-4-state-role";
import Section5Conclusion from "@/components/section-5-conclusion";

export default function Home() {
  return (
    <div className="min-h-screen bg-beige-light text-black-smoke">
      <Header />
      <Hero />
      <Democracy />
      <Section2RuleOfLaw />
      <LuanDiemSection />
      <Section1Theory />
      <Section2Relation />
      <Section3Balance />
      <Section4StateRole />
      <Section5Conclusion />
      <Section6Examples />
      <VietnamFooter />
      {/* <ChatBox /> */}
    </div>
  );
}
