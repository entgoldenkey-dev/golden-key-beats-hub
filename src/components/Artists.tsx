import { Button } from "@/components/ui/button";
import { Instagram, Music, Users, Star } from "lucide-react";

const Artists = () => {
  const artists = [
    {
      name: "VINCXNT",
      genre: "Trap/Drill",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop&crop=faces",
      tracks: 15
    },
    {
      name: "JHUANITO", 
      genre: "Trap Melódico",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      tracks: 12
    },
    {
      name: "NT_BS",
      genre: "Rap Consciente",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
      tracks: 8
    },
    {
      name: "KYRIOS",
      genre: "Phonk Brasileiro",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
      tracks: 5
    },
    {
      name: "JU",
      genre: "Trap Feminino",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=300&h=300&fit=crop&crop=faces",
      tracks: 7
    },
    {
      name: "GT",
      genre: "Drill Nacional",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
      tracks: 4
    },
    {
      name: "RXBIN",
      genre: "Rap Experimental",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=faces",
      tracks: 6
    },
    {
      name: "TINNE",
      genre: "Trap Melódico",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
      tracks: 9
    }
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {artists.slice(0, 4).map((artist, index) => (
                <div 
                  key={index}
                  className="urban-card text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <h4 className="text-xl font-roc font-black text-golden group-hover:text-white transition-all duration-300 mb-2">
                    {artist.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {artist.genre}
                  </p>
                  <div className="text-xs text-primary font-semibold">
                    {artist.tracks} faixas
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - 4 artists */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {artists.slice(4, 8).map((artist, index) => (
                <div 
                  key={index + 4}
                  className="urban-card text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <h4 className="text-xl font-roc font-black text-golden group-hover:text-white transition-all duration-300 mb-2">
                    {artist.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {artist.genre}
                  </p>
                  <div className="text-xs text-primary font-semibold">
                    {artist.tracks} faixas
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