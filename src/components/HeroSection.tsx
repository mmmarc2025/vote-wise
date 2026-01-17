import { Button } from "@/components/ui/button";
import { Search, Vote } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <Vote className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white/90">台灣選舉資料庫</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight animate-fade-in">
            政見{" "}
            <span className="text-white/80 font-light">political.now</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            透明、開放的選舉候選人資料庫。搜尋候選人政見、了解參選人背景，為台灣民主做出明智的選擇。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto gap-2 text-base font-medium"
            >
              <Search className="w-4 h-4" />
              開始搜尋候選人
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">6</p>
              <p className="text-sm text-white/60">候選人</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">4</p>
              <p className="text-sm text-white/60">縣市</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">3</p>
              <p className="text-sm text-white/60">參選職位</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
