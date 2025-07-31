import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Calendar, Users } from "lucide-react";

const Projects = () => {
  const featuredProject = {
    title: "Turma do Bairro Vol. 01",
    artist: "Coletivo Golden Key",
    description: "Compilação que reúne os melhores talentos da nossa base, mostrando a diversidade e qualidade da cena urbana independente.",
    releaseDate: "2024",
    tracks: 12,
    streams: "150K+",
    coverUrl: "/lovable-uploads/6c51ed08-072c-45a7-8bdc-c8582707cdbb.png",
    spotifyUrl: "#",
    youtubeUrl: "#"
  };

  const recentReleases = [
    {
      title: "Quebrada Freestyle",
      artist: "Vincxnt",
      type: "Single",
      date: "Nov 2024",
      coverUrl: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=300&h=300&fit=crop&crop=center"
    },
    {
      title: "Trap Memories",
      artist: "Eiijay",
      type: "EP",
      date: "Out 2024",
      coverUrl: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?w=300&h=300&fit=crop&crop=center"
    },
    {
      title: "Rua Vazia",
      artist: "Gabola",
      type: "Single",
      date: "Set 2024",
      coverUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop&crop=center"
    },
    {
      title: "Flow Urbano",
      artist: "Coletivo GK",
      type: "Mixtape",
      date: "Ago 2024",
      coverUrl: "https://images.unsplash.com/photo-1496293455970-f8581a5a90e5?w=300&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section id="projetos" className="py-20 chaos-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-roc font-black text-gradient-electric mb-6">
              PROJETOS & LANÇAMENTOS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça os trabalhos que saíram do nosso estúdio e conquistaram a cena. 
              Cada projeto conta uma história única.
            </p>
          </div>

          {/* Featured Project */}
          <div className="urban-card p-8 mb-16 hover:animate-pulse-glow">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project Cover */}
              <div className="relative group">
                <img 
                  src={featuredProject.coverUrl} 
                  alt={featuredProject.title}
                  className="w-full aspect-square object-cover rounded-lg shadow-chaos"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Button className="btn-golden">
                    <Play className="mr-2 h-6 w-6" />
                    Ouvir Agora
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <div className="text-sm text-accent font-semibold mb-2">
                  DESTAQUE ATUAL
                </div>
                <h3 className="text-4xl font-roc font-black text-gradient-golden mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-xl text-secondary mb-4 font-semibold">
                  {featuredProject.artist}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-roc font-bold text-primary">
                      {featuredProject.tracks}
                    </div>
                    <div className="text-xs text-muted-foreground">Faixas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-roc font-bold text-secondary">
                      {featuredProject.streams}
                    </div>
                    <div className="text-xs text-muted-foreground">Streams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-roc font-bold text-accent">
                      {featuredProject.releaseDate}
                    </div>
                    <div className="text-xs text-muted-foreground">Ano</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-3">
                  <Button className="btn-electric flex-1">
                    <Play className="mr-2 h-4 w-4" />
                    Spotify
                  </Button>
                  <Button className="btn-neon flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    YouTube
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Releases */}
          <div>
            <h3 className="text-3xl font-roc font-bold text-gradient-chaos mb-8 text-center">
              Lançamentos Recentes
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {recentReleases.map((release, index) => (
                <div 
                  key={index}
                  className="urban-card group cursor-pointer hover:scale-105 transition-all duration-300"
                >
                  <div className="relative mb-4">
                    <img 
                      src={release.coverUrl} 
                      alt={release.title}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h4 className="font-roc font-bold text-foreground mb-2 group-hover:text-gradient-golden transition-all duration-300">
                    {release.title}
                  </h4>
                  <p className="text-secondary text-sm font-semibold mb-2">
                    {release.artist}
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{release.type}</span>
                    <span>{release.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button className="btn-chaos text-lg py-4 px-8">
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver Todos os Lançamentos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;