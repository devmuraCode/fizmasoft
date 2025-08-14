import { Navbar } from "@/components/Navbar/Navbar";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionFive } from "./sections/SectionFive/SectionFive";
import { SectionSix } from "./sections/SectionSix/SectionSix";
import { SectionSeven } from "./sections/SectionSeven/SectionSeven";
import { SectionEight } from "./sections/SectionEight/SectionEight";
import { SectionThree } from "./sections/SectionThree/SectionThree";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <SectionOne/>
    <SectionThree/>
    <SectionFor/>
    <SectionSix/>
    <SectionSeven/>
    <SectionEight/>
   </div>
  );
}
