import { Navbar } from "@/components/Navbar/Navbar";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionFor } from "./sections/SectionFor/SectionFor";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <SectionOne/>
    <SectionFor/>
   </div>
  );
}
