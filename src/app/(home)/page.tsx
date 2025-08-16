import { Navbar } from "@/components/Navbar/Navbar";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionFive } from "./sections/SectionFive/SectionFive";
import { SectionSix } from "./sections/SectionSix/SectionSix";
import { SectionSeven } from "./sections/SectionSeven/SectionSeven";
import { SectionEight } from "./sections/SectionEight/SectionEight";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <SectionOne />
      <SectionTwo />
      {/* <SectionThree /> */}
      {/* <SectionFor /> */}
      {/* <SectionFive /> */}
      {/* <SectionSix /> */}
      {/* <SectionSeven /> */}
      {/* <SectionEight /> */}
    </div>
  );
}
