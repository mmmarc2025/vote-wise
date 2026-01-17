import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchFilters from "@/components/SearchFilters";
import CandidateGrid from "@/components/CandidateGrid";

const Index = () => {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [position, setPosition] = useState("");
  const [constituency, setConstituency] = useState("");

  const handleReset = () => {
    setCity("");
    setDistrict("");
    setPosition("");
    setConstituency("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        <SearchFilters
          city={city}
          setCity={setCity}
          district={district}
          setDistrict={setDistrict}
          position={position}
          setPosition={setPosition}
          constituency={constituency}
          setConstituency={setConstituency}
          onReset={handleReset}
        />
        
        <CandidateGrid
          city={city}
          district={district}
          position={position}
          constituency={constituency}
        />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 政見 political.now. 台灣選舉候選人資料庫
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
