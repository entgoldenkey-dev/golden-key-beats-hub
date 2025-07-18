import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Music, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Artistas", href: "#artistas" },
    { name: "Contato", href: "#contato" },
  ];

  const services = [
    "Gravação Profissional",
    "Mixagem e Masterização",
    "Produção Musical",
    "Audiovisual",
    "Direção Artística"
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/goldenkeyent", color: "hover:text-pink-500" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/goldenkeyent", color: "hover:text-red-500" },
    { name: "Spotify", icon: Music, href: "https://spotify.com/goldenkeyent", color: "hover:text-green-500" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logoIcon} alt="Golden Key" className="w-12 h-12 animate-float" />
                <div>
                  <h3 className="font-roc font-black text-xl text-gradient-golden">
                    GOLDEN KEY
                  </h3>
                  <p className="text-sm text-muted-foreground font-semibold">
                    ENTERTAINMENT
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gravadora e estúdio independente especializada em rap/trap. 
                <span className="text-gradient-electric font-semibold"> Onde o caos vira hit.</span>
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-roc font-bold text-gradient-electric text-lg mb-4">
                Navegação
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-gradient-golden transition-all duration-300 font-semibold"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-roc font-bold text-gradient-neon text-lg mb-4">
                Serviços
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-roc font-bold text-gradient-golden text-lg mb-4">
                Contato
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold">Estúdio GK</p>
                    <p className="text-muted-foreground text-sm">
                      Rua da Música, 123<br />
                      Vila Madalena - São Paulo/SP
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold">(11) 99999-9999</p>
                    <p className="text-muted-foreground text-sm">Seg a Sex, 9h às 18h</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold">contato@goldenkey.com</p>
                    <p className="text-muted-foreground text-sm">Resposta em 24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="urban-card p-8 mb-12 text-center">
            <h3 className="text-3xl font-roc font-black text-gradient-chaos mb-4">
              Pronto para gravar seu próximo hit?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato agora e vamos transformar sua música em algo extraordinário. 
              A Golden Key está aqui para elevar sua arte ao próximo nível.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="btn-golden text-lg py-4 px-8">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Direto
              </Button>
              <Button 
                className="btn-electric text-lg py-4 px-8"
                onClick={() => scrollToSection("#contato")}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground text-sm">
                  © 2024 Golden Key Entertainment. Todos os direitos reservados.
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Desenvolvido com 🔥 para a cena urbana independente.
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-primary transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;