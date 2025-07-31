import { Button } from "@/components/ui/button";
import { Instagram, Music, Users, Star } from "lucide-react";

const Artists = () => {
  const artists = [
    "VINCXNT",
    "JHUANITO", 
    "NT_BS",
    "KYRIOS",
    "JU",
    "GT",
    "RXBIN",
    "TINNE"
  ];

  return (
    <section id="artistas" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-roc font-black text-golden mb-6">
              NOSSOS ARTISTAS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Talentos únicos que confiam na Golden Key para levar sua música ao próximo nível.
            </p>
          </div>

          {/* Artists Grid */}
          <div className="mb-16">
            {/* First Row - 4 artists */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {artists.slice(0, 4).map((artist, index) => (
                <div 
                  key={index}
                  className="urban-card text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-4">
                    <h4 className="text-2xl font-roc font-black text-golden group-hover:text-white transition-all duration-300">
                      {artist}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - 4 artists */}
            <div className="grid grid-cols-4 gap-6">
              {artists.slice(4, 8).map((artist, index) => (
                <div 
                  key={index + 4}
                  className="urban-card text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-4">
                    <h4 className="text-2xl font-roc font-black text-golden group-hover:text-white transition-all duration-300">
                      {artist}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="text-center">
            <div className="urban-card p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-roc font-bold text-gradient-chaos mb-4">
                Quer fazer parte da família Golden Key?
              </h3>
              <p className="text-xl text-muted-foreground mb-6">
                Estamos sempre em busca de novos talentos. Se você tem o flow, 
                nós temos a estrutura para te levar longe.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button className="btn-golden text-lg py-4 px-8">
                  <Users className="mr-2 h-5 w-5" />
                  Quero fazer parte da GK
                </Button>
                <Button variant="outline" className="neon-border text-lg py-4 px-8">
                  <Music className="mr-2 h-5 w-5" />
                  Enviar Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;