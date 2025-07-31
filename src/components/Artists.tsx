import { Button } from "@/components/ui/button";
import { Instagram, Music, Users, Star } from "lucide-react";

const Artists = () => {
  const artists = [
    {
      name: "VINCXNT",
      genre: "Boombap",
      image: "/lovable-uploads/71eb47ca-0c7f-45c4-8900-57ba8c378a27.png",
      tracks: 15
    },
    {
      name: "JHUANITO", 
      genre: "Trap/Drill",
      image: "/lovable-uploads/d5c3d470-13a3-404f-99a0-4152cbb143f3.png",
      tracks: 12
    },
    {
      name: "NT_BS",
      genre: "Trap/Drill/Funk",
      image: "/lovable-uploads/aebc85dd-8a88-4dba-97d8-2a97398ec6a8.png",
      tracks: 8
    },
    {
      name: "DJ KYRIOS",
      genre: "Funk/DJ",
      image: "/lovable-uploads/9c11282e-2160-4e82-be78-481f56e9ecf7.png",
      tracks: 5
    },
    {
      name: "iODES",
      genre: "Boombap",
      image: "/lovable-uploads/a304db14-660a-4d7b-a4e4-c5ef25187fdd.png",
      tracks: 7
    },
    {
      name: "RXBIN",
      genre: "Boombap/DJ",
      image: "/lovable-uploads/976f13a0-95b4-4d8e-b83d-1f3adeafc8eb.png",
      tracks: 6
    },
    {
      name: "TINNE",
      genre: "R&B",
      image: "/lovable-uploads/bba06fe5-e1b2-486d-b33b-006e04219cf3.png",
      tracks: 9
    },
    {
      name: "MC GT",
      genre: "Funk",
      image: "/lovable-uploads/ffd26faa-0b90-412d-b373-0452f292c49c.png",
      tracks: 4
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