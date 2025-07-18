import { Music, Headphones, Users, Trophy } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Music, value: "50+", label: "Projetos Lançados" },
    { icon: Headphones, value: "200+", label: "Artistas Gravaram" },
    { icon: Users, value: "15", label: "Colaboradores" },
    { icon: Trophy, value: "5", label: "Anos de Experiência" },
  ];

  return (
    <section id="sobre" className="py-20 chaos-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-roc font-black text-gradient-chaos mb-6">
              SOBRE A GOLDEN KEY
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais que uma gravadora. Somos um estúdio criativo, uma comunidade 
              e uma estrutura completa pra quem vive de música urbana.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-roc font-bold text-gradient-golden mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                A Golden Key existe para <span className="text-gradient-electric font-semibold">profissionalizar a cena</span>, 
                de forma independente. Acreditamos que o talento da rua merece estrutura, 
                tecnologia e visibilidade de primeiro mundo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nosso compromisso é com a <span className="text-primary font-semibold">autenticidade</span> e 
                a <span className="text-secondary font-semibold">qualidade</span>. 
                Cada projeto que sai daqui carrega nossa assinatura: 
                <span className="text-gradient-neon font-bold"> onde o caos vira hit</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="urban-card text-center p-6 hover:animate-pulse-glow"
                >
                  <div className="service-icon mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-roc font-black text-gradient-golden mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h3 className="text-3xl font-roc font-bold text-gradient-electric mb-8">
              Nossos Valores
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="urban-card p-8">
                <h4 className="text-xl font-roc font-bold text-primary mb-4">
                  Autenticidade
                </h4>
                <p className="text-muted-foreground">
                  Respeitamos a essência de cada artista e preservamos 
                  a originalidade em todos os projetos.
                </p>
              </div>
              
              <div className="urban-card p-8">
                <h4 className="text-xl font-roc font-bold text-secondary mb-4">
                  Inovação
                </h4>
                <p className="text-muted-foreground">
                  Usamos tecnologia de ponta e técnicas criativas 
                  para elevar cada produção.
                </p>
              </div>
              
              <div className="urban-card p-8">
                <h4 className="text-xl font-roc font-bold text-accent mb-4">
                  Comunidade
                </h4>
                <p className="text-muted-foreground">
                  Construímos uma rede de apoio onde artistas 
                  crescem juntos e colaboram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;