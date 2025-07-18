import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Music, Mic, Users, Phone } from "lucide-react";
import logoIcon from "@/assets/golden-key-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "#inicio", icon: Music },
    { name: "Sobre", href: "#sobre", icon: Users },
    { name: "Serviços", href: "#servicos", icon: Mic },
    { name: "Projetos", href: "#projetos", icon: Music },
    { name: "Artistas", href: "#artistas", icon: Users },
    { name: "Contato", href: "#contato", icon: Phone },
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
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("#inicio")}>
              <img src={logoIcon} alt="Golden Key" className="w-10 h-10 animate-float" />
              <div>
                <h1 className="font-roc font-black text-lg text-gradient-golden">
                  GOLDEN KEY
                </h1>
                <p className="text-xs text-muted-foreground font-semibold">
                  ENTERTAINMENT
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-gradient-golden transition-all duration-300 font-semibold relative group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-golden group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-2 transition-all duration-300"
                onClick={() => scrollToSection("#contato")}
              >
                Gravar Agora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-3 w-full text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-semibold group-hover:text-gradient-golden transition-all duration-300">
                      {item.name}
                    </span>
                  </button>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 transition-all duration-300"
                    onClick={() => scrollToSection("#contato")}
                  >
                    <Mic className="mr-2 h-4 w-4" />
                    Gravar Agora
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-nav md:hidden">
        <div className="grid grid-cols-4 gap-1">
          {navigation.slice(0, 4).map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="flex flex-col items-center py-2 px-1 rounded-lg hover:bg-muted transition-colors group"
            >
              <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform mb-1" />
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <button
        onClick={() => scrollToSection("#contato")}
        className="fixed bottom-20 right-4 md:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-golden hover:bg-primary/90 z-40 flex items-center justify-center transition-all duration-300"
      >
        <Mic className="w-6 h-6" />
      </button>
    </>
  );
};

export default Header;