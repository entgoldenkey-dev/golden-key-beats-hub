import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Vincxnt",
      role: "Rapper/Trapstar",
      text: "A Golden Key entende minha vibe. Eles não só gravam, eles sentem a música junto comigo. Resultado sempre top!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Eiijay",
      role: "Artista/Produtor",
      text: "Profissionalismo e criatividade em um só lugar. A GK transformou minha música em algo que nunca imaginei ser possível.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Gabola",
      role: "MC/Compositor",
      text: "Aqui não é só um estúdio, é uma família. Eles respeitam minha arte e ainda conseguem elevar ela para outro nível.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "MC Drift",
      role: "Phonk Artist",
      text: "A mixagem ficou absurda! O som saiu limpo mas manteve toda a energia bruta que eu queria. Equipe top demais.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Lila Trap",
      role: "Trapeira",
      text: "Como mulher no trap, me senti super acolhida. Eles entenderam minha mensagem e potencializaram minha voz.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Flow Pesado",
      role: "Drill Artist",
      text: "A Golden Key sabe trabalhar com drill de verdade. Som pesado, mixagem na medida certa. Parceria garantida!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-roc font-black text-gradient-chaos mb-6">
              O QUE A CENA FALA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Depoimentos reais de artistas que confiaram na Golden Key 
              para elevar sua música ao próximo nível.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="urban-card p-6 group hover:animate-pulse-glow cursor-pointer relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-golden rounded-full flex items-center justify-center shadow-golden">
                    <Quote className="w-4 h-4 text-black" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground mb-6 leading-relaxed italic group-hover:text-gradient-golden transition-all duration-300">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-roc font-bold text-gradient-electric">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="urban-card p-6">
                <div className="text-4xl font-roc font-black text-gradient-golden mb-2">
                  98%
                </div>
                <p className="text-muted-foreground font-semibold">
                  Satisfação dos Clientes
                </p>
              </div>
              
              <div className="urban-card p-6">
                <div className="text-4xl font-roc font-black text-gradient-electric mb-2">
                  200+
                </div>
                <p className="text-muted-foreground font-semibold">
                  Artistas Atendidos
                </p>
              </div>
              
              <div className="urban-card p-6">
                <div className="text-4xl font-roc font-black text-gradient-neon mb-2">
                  50+
                </div>
                <p className="text-muted-foreground font-semibold">
                  Projetos Lançados
                </p>
              </div>
              
              <div className="urban-card p-6">
                <div className="text-4xl font-roc font-black text-gradient-chaos mb-2">
                  5★
                </div>
                <p className="text-muted-foreground font-semibold">
                  Avaliação Média
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Reconhecidos por:
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-roc font-bold">SPOTIFY</div>
              <div className="text-lg font-roc font-bold">DEEZER</div>
              <div className="text-lg font-roc font-bold">YOUTUBE MUSIC</div>
              <div className="text-lg font-roc font-bold">APPLE MUSIC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;