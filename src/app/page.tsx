import Image from "next/image";
import Navbar from "../components/Navbar";
import OptionsBar from "@/components/OptionsBar";
import ContentBox from "@/components/ContentBox";

export default function Home() {
  return (
    <div className="font-sans bg-[#FCFCFC] w-full">
      <Navbar />
      <OptionsBar />
      <ContentBox />
    </div>
  );
}
