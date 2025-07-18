import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Send, Calendar } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    artistName: "",
    project: "",
    service: "",
    date: "",
    portfolio: "",
    message: ""
  });

  const services = [
    "Gravação Profissional",
    "Mixagem e Masterização", 
    "Produção Musical",
    "Audiovisual (Clipe/Visualizer)",
    "Direção Artística",
    "Pacote Completo"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui integraria com WhatsApp ou sistema de formulário
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:\n\nArtista: ${formData.artistName}\nProjeto: ${formData.project}\nServiço: ${formData.service}\nData sugerida: ${formData.date}\nPortfólio: ${formData.portfolio}\nDetalhes: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 chaos-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-roc font-black text-gradient-golden mb-6">
              FALE COM A GENTE
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pronto para transformar sua música? Entre em contato e vamos 
              criar algo incrível juntos. Resposta em até 24h.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="urban-card p-8">
              <h3 className="text-3xl font-roc font-bold text-gradient-electric mb-6">
                Solicitar Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nome Artístico *
                  </label>
                  <Input 
                    placeholder="Seu nome artístico"
                    value={formData.artistName}
                    onChange={(e) => setFormData({...formData, artistName: e.target.value})}
                    className="bg-input border-border"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Projeto que deseja gravar *
                  </label>
                  <Input 
                    placeholder="Nome do projeto/música"
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    className="bg-input border-border"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Tipo de serviço *
                  </label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Data sugerida
                  </label>
                  <Input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="bg-input border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Link do portfólio (opcional)
                  </label>
                  <Input 
                    placeholder="Instagram, SoundCloud, Spotify..."
                    value={formData.portfolio}
                    onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                    className="bg-input border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Detalhes do projeto
                  </label>
                  <Textarea 
                    placeholder="Conte mais sobre sua visão, referências, orçamento aproximado..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-input border-border min-h-[120px]"
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full btn-chaos text-lg py-4">
                  <Send className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* WhatsApp Direct */}
              <Card className="urban-card p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-roc font-bold text-gradient-golden text-lg">
                      WhatsApp Direto
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Resposta imediata
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Para dúvidas rápidas, agendamentos urgentes ou conversas diretas com nossa equipe.
                </p>
                <Button className="w-full btn-neon">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chamar no WhatsApp
                </Button>
              </Card>

              {/* Phone Contact */}
              <Card className="urban-card p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon mr-4 bg-gradient-electric">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-roc font-bold text-gradient-electric text-lg">
                      Telefone
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      (11) 99999-9999
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Horário de atendimento: Segunda a Sexta, das 9h às 18h.
                </p>
                <Button variant="outline" className="w-full neon-border">
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar Agora
                </Button>
              </Card>

              {/* Studio Location */}
              <Card className="urban-card p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon mr-4 bg-gradient-golden">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-roc font-bold text-gradient-golden text-lg">
                      Estúdio Golden Key
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      São Paulo - SP
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Rua da Música, 123 - Vila Madalena<br />
                  CEP: 05422-000 - São Paulo/SP
                </p>
                <Button variant="outline" className="w-full neon-border">
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver no Mapa
                </Button>
              </Card>

              {/* Quick Response Promise */}
              <Card className="urban-card p-6 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-roc font-bold text-gradient-chaos text-lg mb-2">
                  Resposta Garantida
                </h4>
                <p className="text-muted-foreground">
                  Respondemos todos os orçamentos em até <span className="text-primary font-bold">24 horas</span>. 
                  Sua música não pode esperar!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;