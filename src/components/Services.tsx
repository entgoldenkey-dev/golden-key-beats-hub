import { Button } from "@/components/ui/button";
import { Mic, Headphones, Music, Video, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: "Gravação Profissional",
      description: "Estúdio equipado com tecnologia de ponta para capturar sua essência com qualidade internacional.",
      features: ["Cabine acústica isolada", "Microfones premium", "Interface high-end", "Monitoramento profissional"],
      gradient: "gradient-golden"
    },
    {
      icon: Headphones,
      title: "Mixagem e Masterização",
      description: "Finalizamos suas faixas com o padrão de qualidade das grandes produções mundiais.",
      features: ["Mix analógico/digital", "Masterização para streaming", "Referências internacionais", "Revisões ilimitadas"],
      gradient: "gradient-electric"
    },
    {
      icon: Music,
      title: "Produção Musical",
      description: "Beatmakers e produtores especializados em rap, trap e música urbana contemporânea.",
      features: ["Beats exclusivos", "Arranjos personalizados", "Sound design", "Colaborações criativas"],
      gradient: "gradient-neon"
    },
    {
      icon: Video,
      title: "Audiovisual",
      description: "Criamos clipes, visualizers e conteúdo visual que complementa sua música.",
      features: ["Direção criativa", "Edição profissional", "Motion graphics", "Color grading"],
      gradient: "gradient-chaos"
    },
    {
      icon: Palette,
      title: "Direção Artística",
      description: "Desenvolvemos a identidade visual e conceito artístico completo do seu projeto.",
      features: ["Branding musical", "Capas de álbum", "Identidade visual", "Consultoria artística"],
      gradient: "gradient-electric"
    },
    {
      icon: Mic,
      title: "Planejamento de Lançamento e Marketing Musical",
      description: "Organização estratégica de todas as etapas de um lançamento musical, desde o pré até o pós. Foco em aumentar alcance, engajamento e profissionalizar o processo.",
      features: ["Cronograma completo", "Briefing e plano de conteúdo", "Estratégias de tráfego", "Calendário com datas-chave"],
      gradient: "gradient-golden"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-roc font-black text-gradient-golden mb-6">
              NOSSOS SERVIÇOS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estrutura completa para transformar sua visão em realidade. 
              Do conceito ao lançamento, cuidamos de cada detalhe.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="urban-card group cursor-pointer h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Icon */}
                <div className={`service-icon mb-6 bg-${service.gradient}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-roc font-bold text-gradient-golden mb-4 group-hover:text-gradient-electric transition-all duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button className="w-full btn-electric group-hover:btn-golden transition-all duration-300 mt-auto">
                  Quero esse serviço
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="urban-card p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-roc font-bold text-gradient-chaos mb-4">
                Pronto para profissionalizar seu som?
              </h3>
              <p className="text-xl text-muted-foreground mb-6">
                Combinamos serviços para criar pacotes personalizados. 
                Fale com nossa equipe e descubra a melhor solução para seu projeto.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button className="btn-chaos text-lg py-4 px-8">
                  Falar com Especialista
                </Button>
                <Button variant="outline" className="neon-border text-lg py-4 px-8">
                  Ver Portfólio Completo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;