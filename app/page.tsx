import { Navbar } from "@/components/Navbar/Navbar";
import VerseCard from "@/components/VerseCard/VerseCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="absolute inset-0 flex-1 flex items-center justify-center p-4">
        <VerseCard />
      </main>
    </div>
  );
}
