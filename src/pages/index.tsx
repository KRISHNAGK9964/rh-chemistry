import Image from "next/image";
import { Inter } from "next/font/google";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import { useRef } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const contactRef = useRef<HTMLDivElement|null>(null);
  const handleContactBtnClick = () => {
    console.log("scroll");
    window.scrollTo({behavior:'smooth'});
    contactRef.current?.scrollIntoView({behavior:"smooth"});
  }
  return (
    <div className="bg-gray-100">
      <Section1 handleContactBtnClick={handleContactBtnClick} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section9 ref={contactRef} />
      <Section8 />
    </div>
  );
}
