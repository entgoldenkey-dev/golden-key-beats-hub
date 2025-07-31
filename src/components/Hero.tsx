import { Button } from "@/components/ui/button";
import { Play, Mic, Calendar } from "lucide-react";
import heroBackground from "@/assets/studio-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-electric rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-neon rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-40 w-16 h-16 bg-gradient-golden rounded-full opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-roc font-black mb-6 text-white">
            ONDE O CAOS
            <br />
            <span className="text-golden">
              VIRA HIT
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-degular">
            Golden Key Entertainment - Gravadora e estúdio independente
            <br />
            <span className="text-gradient-electric font-semibold">
              Transformando a cena urbana em arte profissional
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button className="btn-golden text-lg py-6 px-8 group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Ver Lançamentos
            </Button>
            
            <Button className="btn-electric text-lg py-6 px-8 group">
              <Mic className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Quero Gravar com a GK
            </Button>
            
            <Button className="btn-neon text-lg py-6 px-8 group">
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Orçamento Rápido
            </Button>
          </div>

        </div>
      </div>

      {/* Chaos Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="chaos-bg w-full h-full animate-chaos-float"></div>
      </div>
    </section>
  );
};

export default Hero;