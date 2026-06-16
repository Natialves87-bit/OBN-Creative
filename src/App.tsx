import { useState, useEffect } from "react";
import aboutImg from "./assets/images/2ABE8A74-FD56-4FC3-834E-AEF02DDF71D7.JPG.jpeg";
import contactImg from "./assets/images/IMG_8244.JPG.jpeg";
import sedeImg from "./assets/images/D57AFEEF-53B9-4111-870F-182705C2BE65.JPG.jpeg";
import {
  TrendingUp,
  Camera,
  Sliders,
  Activity,
  Check,
  ChevronDown,
  Globe,
  MapPin,
  Clock,
  Phone,
  Instagram,
  ExternalLink,
  Copy,
  CheckCircle,
  Award,
  Layers,
  ArrowRight,
  Menu,
  X,
  FileText,
  Search,
  MessageSquare,
  Sparkles,
  Heart,
  Droplet,
  Compass,
  Tv,
  Star,
  Plus,
  Minus,
  Trash2,
  ShoppingBag
} from "lucide-react";
import { OBN_DATA, FAQItem, Service, Testimonial, CollectionItem } from "./data";

// Custom SVG Logo capturing 'Movement', 'Play', and active status 'On/Connected'
export function SoulInMotionLogo({ className = "w-10 h-10", light = true }: { className?: string, light?: boolean }) {
  const color = light ? "#F4F1EA" : "#0E0F11";
  return (
    <div className={`${className} relative flex items-center justify-center select-none shrink-0 group`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
      >
        <style>{`
          @keyframes chevron-pulse-1 {
            0%, 100% { opacity: 0.35; transform: translateX(0px); }
            50% { opacity: 1; transform: translateX(4px); }
          }
          @keyframes chevron-pulse-2 {
            0%, 100% { opacity: 1; transform: translateX(0px); }
            50% { opacity: 0.35; transform: translateX(-4px); }
          }
          .c-1 {
            animation: chevron-pulse-1 2s infinite ease-in-out;
          }
          .c-2 {
            animation: chevron-pulse-2 2s infinite ease-in-out;
          }
        `}</style>
        {/* Left chevron */}
        <path 
          d="M25 25L50 50L25 75" 
          stroke={color} 
          strokeWidth="11" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="c-1"
        />
        {/* Right chevron */}
        <path 
          d="M50 25L75 50L50 75" 
          stroke={color} 
          strokeWidth="11" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="c-2"
        />
      </svg>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("#inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  
  // Interactive Cart for Clothing Goods & Merch (Products for Sale)
  const [cart, setCart] = useState<{ [key: string]: number }>({
    camisetas: 0,
    garrafinhas: 0,
    bones: 0,
    adesivos: 0
  });

  const updateCart = (id: string, delta: number) => {
    setCart(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const getCartTotal = () => {
    const entries = Object.entries(cart) as [string, number][];
    return entries.reduce((total, [id, qty]) => {
      const item = OBN_DATA.colecoes.itens.find(p => p.id === id);
      return total + (item ? item.preco * qty : 0);
    }, 0);
  };

  const handleWhatsAppOrder = () => {
    const total = getCartTotal();
    if (total === 0) {
      alert("Sua mochila de compras está vazia! Adicione alguns produtos antes de enviar.");
      return;
    }
    const lines = [];
    lines.push("⚡ Olá equipe Soul in Motion!");
    lines.push("Gostaria de encomendar os seguintes produtos/serviços oficiais à venda:");
    
    const entries = Object.entries(cart) as [string, number][];
    entries.forEach(([id, qty]) => {
      if (qty > 0) {
        const item = OBN_DATA.colecoes.itens.find(p => p.id === id);
        if (item) {
          lines.push(`- ${qty}x ${item.nome} (R$ ${item.preco} cada)`);
        }
      }
    });

    lines.push(`\n*Valor Total do Pedido: R$ ${total}*`);
    lines.push("\nEstou em Florianópolis (ou arredores) e gostaria de combinar os detalhes/entrega fisicamente.");
    
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${OBN_DATA.empresa.whatsapp}?text=${message}`, "_blank");
  };

  // Slide-out copywriter clipboard drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  // Auto-scroll tracking for active tab highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "concept-book", "servicos", "atuacao", "sobre", "faq", "contato"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStatus(id);
      setTimeout(() => setCopiedStatus(null), 2000);
    });
  };

  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  // Dynamically map appropriate icon components for the agency services
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-[#F4F1EA]" />;
      case "Camera":
        return <Camera className="w-6 h-6 text-[#F4F1EA]" />;
      case "Sliders":
        return <Sliders className="w-6 h-6 text-[#F4F1EA]" />;
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-[#F4F1EA]" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-[#F4F1EA]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#F4F1EA]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0F11] text-[#F4F1EA] font-sans selection:bg-[#F4F1EA] selection:text-[#0E0F11] relative overflow-x-hidden">
      
      {/* 4. ACTIVE COPYS/SEO OVERLAY ACTION BUTTON FOR SLIDEOUT */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="btn-copiar-textos"
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2.5 px-5 py-3.5 bg-[#F4F1EA] hover:bg-white text-[#0E0F11] font-mono text-xs uppercase tracking-widest font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group border border-[#0E0F11]/10"
        >
          <FileText className="w-4 h-4 text-[#0E0F11]" />
          <span>Copiar Textos (SEO/CRO)</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        </button>
      </div>

      {/* DYNAMIC HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0E0F11]/90 backdrop-blur-md border-b border-[#F4F1EA]/10 text-[#F4F1EA] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo brand configuration following uploaded visual guides */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <SoulInMotionLogo className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-[17px] tracking-wide leading-none text-[#F4F1EA] group-hover:text-white transition-colors/italic">
                Soul in Motion
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-[#5E6064] uppercase mt-1">
                OBN CREATIVE
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center md:gap-2.5 lg:gap-8">
            <a
              href="#inicio"
              className={`font-mono md:text-[10px] lg:text-xs uppercase tracking-widest font-normal transition-colors hover:text-white ${
                activeTab === "#inicio" ? "text-[#F4F1EA] border-b-2 border-[#F4F1EA]/80 pb-1" : "text-[#F4F1EA]/60"
              }`}
            >
              Início
            </a>
            <a
              href="#concept-book"
              className={`font-mono md:text-[10px] lg:text-xs uppercase tracking-widest font-normal transition-colors hover:text-white ${
                activeTab === "#concept-book" ? "text-[#F4F1EA] border-b-2 border-[#F4F1EA]/80 pb-1" : "text-[#F4F1EA]/60"
              }`}
            >
              Coleção de Produtos
            </a>
            <a
              href="#servicos"
              className={`font-mono md:text-[10px] lg:text-xs uppercase tracking-widest font-normal transition-colors hover:text-white ${
                activeTab === "#servicos" ? "text-[#F4F1EA] border-b-2 border-[#F4F1EA]/80 pb-1" : "text-[#F4F1EA]/60"
              }`}
            >
              Serviços
            </a>
            <a
              href="#atuacao"
              className={`font-mono md:text-[10px] lg:text-xs uppercase tracking-widest font-normal transition-colors hover:text-white ${
                activeTab === "#atuacao" ? "text-[#F4F1EA] border-b-2 border-[#F4F1EA]/80 pb-1" : "text-[#F4F1EA]/60"
              }`}
            >
              Atuação
            </a>
            <a
              href="#sobre"
              className={`font-mono md:text-[10px] lg:text-xs uppercase tracking-widest font-normal transition-colors hover:text-white ${
                activeTab === "#sobre" ? "text-[#F4F1EA] border-b-2 border-[#F4F1EA]/80 pb-1" : "text-[#F4F1EA]/60"
              }`}
            >
              Sobre
            </a>
            <a
              href="#faq"
              className={`font-mono md:text-[10px] lg:text-xs uppercase tracking-widest font-normal transition-colors hover:text-white ${
                activeTab === "#faq" ? "text-[#F4F1EA] border-b-2 border-[#F4F1EA]/80 pb-1" : "text-[#F4F1EA]/60"
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={OBN_DATA.empresa.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="md:px-2.5 lg:px-5 md:py-1.5 lg:py-2.5 bg-[#F4F1EA] text-[#0E0F11] hover:bg-white hover:text-black transition-all rounded font-mono md:text-[8px] lg:text-[10px] uppercase tracking-widest font-bold shadow-md inline-flex items-center gap-1.5 lg:gap-2 hover:scale-[1.02] active:scale-95"
            >
              <MessageSquare className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
              <span className="hidden lg:inline">{OBN_DATA.hero.ctaPrincipal}</span>
              <span className="lg:hidden tracking-wider">WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F4F1EA] hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
        
        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0E0F11] border-t border-[#F4F1EA]/10 px-6 py-8 flex flex-col gap-6 shadow-lg animate-fadeIn text-left">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-widest block text-[#F4F1EA]/85 hover:text-white"
            >
              Início
            </a>
            <a
              href="#concept-book"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-widest block text-[#F4F1EA]/85 hover:text-white"
            >
              Coleção de Produtos
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-widest block text-[#F4F1EA]/85 hover:text-white"
            >
              Serviços
            </a>
            <a
              href="#atuacao"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-widest block text-[#F4F1EA]/85 hover:text-white"
            >
              Atuação
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-widest block text-[#F4F1EA]/85 hover:text-white"
            >
              Sobre
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-widest block text-[#F4F1EA]/85 hover:text-white"
            >
              FAQ
            </a>
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#F4F1EA]/5">
              <a
                href={OBN_DATA.empresa.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#F4F1EA] text-[#0E0F11] text-center rounded font-mono text-xs uppercase tracking-widest font-bold block"
              >
                {OBN_DATA.hero.ctaPrincipal}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN LAYOUT SPACING */}
      <main className="pt-20">

        {/* 1. HERO SECTION - MATCHES IMAGE 7 PERFECTLY */}
        <section id="inicio" className="relative text-[#F4F1EA] overflow-hidden py-24 sm:py-32 lg:py-40 flex items-center min-h-[90vh] bg-[#0E0F11]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center flex flex-col items-center">
            
            {/* Visual Header Representation: double arrow logo centered above text */}
            <div className="mb-8 flex flex-col items-center animate-fadeIn duration-700">
              <SoulInMotionLogo className="w-16 h-16 sm:w-20 sm:h-20 mb-6 drop-shadow-lg" />
              <h2 className="font-serif italic font-light text-2xl sm:text-4xl text-[#F4F1EA] leading-tight flex items-center justify-center gap-1.5 font-medium tracking-wide">
                Soul in Motion
              </h2>
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.35em] text-[#5E6064] uppercase mt-2 block">
                {OBN_DATA.empresa.assinatura}
              </span>
            </div>

            {/* Agência Criativa Floripa tag line */}
            <span className="text-xs font-mono tracking-[0.25em] text-[#5E6064] uppercase mb-4 block">
              {OBN_DATA.hero.h1_pre}
            </span>

            {/* Headline H1 with beautiful serif elegant look */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-white font-medium max-w-3xl leading-snug tracking-wide mb-8 whitespace-pre-line">
              {OBN_DATA.hero.h1}
            </h1>

            {/* Paragraph Introduction */}
            <p className="text-[#F4F1EA]/80 text-base sm:text-lg lg:text-xl font-sans font-light leading-relaxed max-w-2xl mb-12 text-pretty">
              {OBN_DATA.hero.subtitulo}
            </p>

            {/* Dual Actions buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <a
                href={OBN_DATA.empresa.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#F4F1EA] text-[#0E0F11] hover:bg-white hover:text-black transition-all rounded font-mono text-xs uppercase tracking-widest font-extrabold shadow-2xl flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-95 group"
              >
                <Phone className="w-4 h-4" />
                <span>{OBN_DATA.hero.ctaPrincipal}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#concept-book"
                className="px-8 py-4 bg-transparent border border-[#F4F1EA]/30 text-[#F4F1EA] hover:bg-[#F4F1EA]/10 hover:border-[#F4F1EA] transition-all rounded font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center"
              >
                {OBN_DATA.hero.ctaSecundario}
              </a>
            </div>

            {/* Support Copy below with target keyword display */}
            <p className="text-[10px] font-mono text-[#5E6064] tracking-widest flex items-center gap-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span>{OBN_DATA.hero.textoApoio}</span>
            </p>

          </div>
        </section>

        {/* 2. CREDIBILIDADE BAR - HIGH CONTRAST CREAM STRIP */}
        <section className="bg-[#F4F1EA] text-[#0E0F11] border-y border-[#F4F1EA]/15 py-12 relative z-10 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-0 lg:divide-x lg:divide-[#0E0F11]/10">
              {OBN_DATA.credibilidade.indicadores.map((ind, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start lg:px-8 justify-center">
                  <span className="text-3xl sm:text-4xl font-serif italic text-[#0E0F11] font-bold">
                    {ind.valor}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#0E0F11]/70 mt-1.5 text-center lg:text-left font-semibold">
                    {ind.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SERVICES SECTION - MATCHES IMAGE 7 DIRECT LIST */}
        <section id="servicos" className="py-24 bg-[#1A1C1E] text-[#F4F1EA] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#5E6064] block mb-3">
                Estilo de vida, Imagem & Conversão
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif italic font-medium text-white max-w-xl mx-auto whitespace-pre-line">
                {OBN_DATA.servicos.h2}
              </h2>
              <div className="w-12 h-px bg-[#F4F1EA]/30 mx-auto mt-4"></div>
            </div>

            {/* Direct list formatting following Image 7 layout style */}
            <div className="max-w-3xl mx-auto bg-[#0E0F11] border border-[#F4F1EA]/10 rounded-lg p-6 sm:p-12 shadow-2xl relative">
              <div className="absolute top-4 right-4">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#5E6064]">
                  SERVIÇOS DE MARCA / SLM
                </span>
              </div>

              <div className="space-y-12">
                {OBN_DATA.servicos.itens.map((service, index) => (
                  <div 
                    key={service.id} 
                    className="group border-b border-[#F4F1EA]/5 pb-10 last:border-0 last:pb-0 flex flex-col sm:flex-row gap-6 items-start"
                  >
                    {/* Icon indicator with stylized bracket chevron resembling custom logo list */}
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded bg-[#1A1C1E] border border-[#F4F1EA]/10 text-[#F4F1EA]">
                      {renderServiceIcon(service.icon)}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-serif italic text-white font-medium flex items-center gap-2 group-hover:text-[#F4F1EA] transition-colors">
                          {service.nome}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#5E6064]">
                          /{service.slug}
                        </span>
                      </div>
                      
                      {/* Detailed service description */}
                      <p className="text-sm font-sans font-light text-[#F4F1EA]/80 leading-relaxed mb-4">
                        {service.descricao}
                      </p>

                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => copyToClipboard(`${service.nome}: ${service.descricao}`, service.id)}
                          className="text-[10px] font-mono uppercase text-[#5E6064] hover:text-[#F4F1EA] transition-colors flex items-center gap-1"
                          title="Copiar texto explicativo"
                        >
                          {copiedStatus === service.id ? (
                            <>
                              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                              <span className="text-green-400">Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar Pitch</span>
                            </>
                          )}
                        </button>
                        
                        <span className="text-[#5E6064] text-xs">|</span>

                        <a
                          href={OBN_DATA.empresa.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono uppercase text-[#F4F1EA] hover:underline font-bold"
                        >
                          Contratar Serviço &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services footer resolution */}
            <div className="mt-16 bg-[#0E0F11]/60 border border-[#F4F1EA]/10 rounded-lg p-8 text-center max-w-3xl mx-auto">
              <p className="text-sm text-[#F4F1EA]/80 mb-6 font-medium italic font-serif">
                "{OBN_DATA.servicos.fechamento}"
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={OBN_DATA.empresa.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#F4F1EA] text-[#0E0F11] hover:bg-white transition-all rounded text-xs font-mono uppercase tracking-widest font-extrabold"
                >
                  {OBN_DATA.servicos.cta}
                </a>
                <a
                  href="#atuacao"
                  className="text-xs font-mono text-[#F4F1EA]/50 hover:text-[#F4F1EA] hover:underline"
                >
                  Veja nossa logística e atuação fora de Floripa.
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 5. ATUAÇÃO SEM LIMITES / COORDENADOR EM FLORIPA */}
        <section id="atuacao" className="py-24 bg-[#0E0F11] border-b border-[#F4F1EA]/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1A1C1E] rounded-lg overflow-hidden border border-[#F4F1EA]/10 shadow-2xl text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Text Side content */}
                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0f11] border border-[#F4F1EA]/15 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#F4F1EA]/80 mb-6">
                    <Globe className="w-3.5 h-3.5" />
                    <span>SEO Foco: {OBN_DATA.seo.palavra_chave_principal}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-6 whitespace-pre-line">
                    {OBN_DATA.atuacao.h2}
                  </h2>
                  <p className="text-[#F4F1EA]/70 text-sm sm:text-base leading-relaxed mb-8 font-light text-pretty">
                    {OBN_DATA.atuacao.paragrafo}
                  </p>
                  
                  {/* Local conversion break objection block */}
                  <a
                    href={OBN_DATA.empresa.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-3.5 px-5 bg-[#0E0F11] hover:bg-[#0E0F11]/80 border border-[#F4F1EA]/15 transition-all rounded text-xs font-mono text-[#F4F1EA] text-left block scale-100 active:scale-95 leading-relaxed"
                  >
                    <span className="font-bold underline block mb-1">Como atendemos outros estados?</span>
                    <span className="text-[11px] block text-[#F4F1EA]/60">{OBN_DATA.atuacao.ctaObjeção} &rarr;</span>
                  </a>
                </div>

                {/* Picture Side */}
                <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full overflow-hidden">
                  <img
                    src={sedeImg}
                    alt="Captação inovadora e criativa por nossa equipe"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 contrast-[1.15] brightness-[0.9] hover:scale-102 transition-all duration-700 ease-out pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1A1C1E] via-transparent to-transparent"></div>

                  {/* Floating badge */}
                  <div className="absolute bottom-6 right-6 p-4 bg-[#F4F1EA] text-[#0E0F11]/90 border border-[#0E0F11]/10 rounded shadow-2xl max-w-[210px] text-right">
                    <span className="text-[9px] font-mono tracking-widest font-extrabold block text-[#0E0F11]/60 uppercase">Equipe Compacta</span>
                    <span className="text-xs font-serif italic font-bold tracking-tight leading-sharp text-[#0E0F11] mt-1.5 block">NÓS VIAJAMOS COM TODA A ESTRUTURA SEM FRONTEIRAS</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 6. DIFERENCIAIS DE MARCA & MAQUINÁRIO */}
        <section className="py-24 bg-[#0E0F11] border-b border-[#F4F1EA]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#5E6064] block mb-3">
                Valores & Autonomia
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif italic font-medium text-white">
                {OBN_DATA.beneficios.h2}
              </h2>
              <div className="w-12 h-px bg-[#F4F1EA]/30 mx-auto mt-4"></div>
            </div>

            {/* Grid Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {OBN_DATA.beneficios.itens.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-[#1A1C1E] border border-[#F4F1EA]/10 p-8 rounded-lg hover:border-[#F4F1EA]/30 transition-all flex gap-5"
                >
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#F4F1EA] text-[#0E0F11] flex items-center justify-center font-mono font-bold text-xs">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif italic font-medium text-white mb-2">
                      {benefit.titulo}
                    </h3>
                    <p className="text-[#F4F1EA]/75 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {benefit.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Equipment spec panel */}
            <div className="mt-12 bg-[#1A1C1E]/50 border border-[#F4F1EA]/10 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-[#F4F1EA]/10 text-[#F4F1EA] border border-[#F4F1EA]/15 rounded flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif italic font-medium text-white">Equipamentos Proprietários Integrados</h4>
                  <p className="text-[11px] text-[#F4F1EA]/60 font-mono">Drones 4K, GoPro, Insta360, câmera aquática, dispositivos de iluminação e flash, além de um conjunto variado de lentes associadas a câmeras mirrorless para captações impecáveis.</p>
                </div>
              </div>
              <a
                href={OBN_DATA.empresa.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono font-black uppercase tracking-widest text-[#F4F1EA] hover:underline"
              >
                Solicitar Lista de Lentes &rarr;
              </a>
            </div>

          </div>
        </section>

        {/* 7. SOBRE / DNA DA MARCA & SUCESSO COMENTARIOS */}
        <section id="sobre" className="py-24 sm:py-32 bg-[#1A1C1E] relative border-b border-[#F4F1EA]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text side */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#5E6064] block mb-3">
                  Olhar Nativo & Experiência Prática
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif italic font-medium text-white mb-8">
                  {OBN_DATA.sobre.h2}
                </h2>
                
                {OBN_DATA.sobre.paragrafos.map((p, idx) => (
                  <p key={idx} className="text-[#F4F1EA]/80 text-sm sm:text-base font-light leading-relaxed mb-6 text-pretty">
                    {p}
                  </p>
                ))}

                <button
                  onClick={() => {
                    const target = document.getElementById("contato");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-4 px-6 py-3.5 bg-[#F4F1EA] text-[#0E0F11] hover:bg-white rounded font-mono text-xs uppercase tracking-widest font-extrabold shadow-md hover:scale-[1.02] transition-transform"
                >
                  {OBN_DATA.sobre.cta}
                </button>
              </div>

                {/* Founder block styled elegantly */}
                <div className="lg:col-span-5 relative">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[#F4F1EA]/15 shadow-2xl bg-black">
                    <img
                      src={aboutImg}
                      alt="A alma e a essência da nossa captação técnica e artística"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Overlying dynamic card with Academic & Professional background detail */}
                  <div className="absolute -bottom-6 -left-6 bg-[#0E0F11] text-[#F4F1EA] border border-[#F4F1EA]/15 rounded-lg p-6 shadow-2xl max-w-sm text-left">
                    <p className="text-[9.5px] font-mono font-black tracking-widest text-green-400 uppercase mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      DIREÇÃO CRIATIVA DE ALTO NÍVEL
                    </p>
                    <p className="font-serif italic font-medium text-[13px] text-white leading-relaxed">
                      Transformamos a visão da sua marca em narrativas visuais impactantes. Unimos técnica cinematográfica e sensibilidade estética para posicionar seu negócio com autoridade e sofisticação no mercado.
                    </p>
                  </div>
                </div>

            </div>
          </div>
        </section>

        {/* 8. CASES DE SUCESSO (PROVA SOCIAL) */}
        <section className="py-24 bg-[#0E0F11] border-b border-[#F4F1EA]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#5E6064] block mb-3">
                PROJETO DE MARKETING DE EXPERIÊNCIA
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white font-medium">
                {OBN_DATA.provaSocial.h2}
              </h2>
              <div className="w-12 h-px bg-[#F4F1EA]/30 mx-auto mt-4"></div>
            </div>

            {/* Cases list */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              {OBN_DATA.provaSocial.itens.map((term, idx) => (
                <div key={idx} className="bg-[#1A1C1E] border border-[#F4F1EA]/10 rounded-lg p-8 shadow-md flex flex-col justify-between hover:border-green-400/20 transition-all">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {term.tags.map((tg, i) => (
                        <span key={i} className="px-2 py-0.5 bg-[#0E0F11] border border-[#F4F1EA]/5 text-[9px] font-mono tracking-wider rounded text-[#F4F1EA]/70">
                          {tg}
                        </span>
                      ))}
                    </div>
                    
                    <span className="text-[10px] font-mono text-[#5E6064] block mb-1 uppercase tracking-wider font-extrabold">
                      {term.cliente}
                    </span>
                    <h3 className="text-lg font-serif italic text-white font-bold mb-4">
                      {term.projeto}
                    </h3>
                    <p className="text-[#F4F1EA]/80 text-xs sm:text-sm leading-relaxed font-light">
                      {term.quote}
                    </p>
                  </div>
                  
                  <div className="border-t border-[#F4F1EA]/5 pt-4 mt-6 flex items-center justify-between text-xs">
                    <span className="text-[9px] font-mono text-[#5E6064]">CASES ATIVOS</span>
                    <a
                      href={OBN_DATA.empresa.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] uppercase font-bold text-[#F4F1EA] flex items-center gap-1 hover:underline"
                    >
                      <span>Ver Mídia</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* O Que Dizem Nossos Parceiros */}
            <div className="mt-20 border-t border-[#F4F1EA]/10 pt-16">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-green-400 font-extrabold flex items-center justify-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  IMPACTO REAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif italic text-white font-medium">
                  Resultados que Geram Confiança
                </h3>
              </div>

              {/* Grid of Feedbacks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500 cursor-default">
                {OBN_DATA.googleMeuNegocio.feedbacks.map((f, i) => (
                  <div key={i} className="bg-[#1A1C1E] border border-[#F4F1EA]/10 rounded p-6 shadow-md hover:border-green-400/20 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3 text-[#F4F1EA]">
                        <span className="text-xs font-mono font-bold text-white uppercase">{f.autor}</span>
                        {f.estrelas > 0 && (
                          <div className="flex gap-0.5">
                            {[...Array(f.estrelas)].map((_, idx) => (
                              <Star key={idx} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-[#F4F1EA]/75 font-sans font-light leading-relaxed italic">
                        "{f.relato}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

              {/* Client Partners Expressive Support Box */}
              <div className="mt-12 bg-[#1A1C1E] border border-[#F4F1EA]/10 rounded-lg p-6 text-center max-w-4xl mx-auto">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#5E6064] block mb-4">Empresas e mídias homologadas e validadas:</span>
                <div className="flex flex-wrap justify-center gap-8 sm:gap-14 items-center opacity-60 text-xs font-serif italic text-white uppercase tracking-wider">
                  <span>Suzuki Campaign</span>
                  <span>@entulhodiy DIY</span>
                  <span>Sensia Recovery Care</span>
                  <span>Grano Alimentação</span>
                  <span>Cookies da Ilha</span>
                </div>
              </div>

          </div>
        </section>
        <section id="area-atuacao" className="py-24 bg-[#1A1C1E] text-[#F4F1EA] relative border-b border-[#F4F1EA]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Text block info and details */}
              <div className="lg:col-span-6 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0E0F11] border border-[#F4F1EA]/15 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#F4F1EA] mb-6 self-start">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Logística local Floripa & Sul do Brasil</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-serif italic text-white font-medium mb-6">
                  Atendimento Regional & Base
                </h2>
                
                {OBN_DATA.areaAtuacao.paragrafos.map((p, i) => (
                  <p key={i} className="text-[#F4F1EA]/80 text-sm sm:text-base leading-relaxed mb-4 font-light">
                    {p}
                  </p>
                ))}

                {/* Local Contact Info */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#F4F1EA]/5 pt-6 text-[11px] text-[#F4F1EA]/70 font-mono">
                  <div className="flex gap-2">
                    <Clock className="w-4 h-4 text-[#F4F1EA]/80 shrink-0" />
                    <div>
                      <span className="font-bold block text-white">Horário Operação:</span>
                      <span>{OBN_DATA.areaAtuacao.horario}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Phone className="w-4 h-4 text-[#F4F1EA]/80 shrink-0" />
                    <div>
                      <span className="font-bold block text-white">WhatsApp Direto:</span>
                      <span>{OBN_DATA.areaAtuacao.whatsapp}</span>
                    </div>
                  </div>
                  <div className="sm:col-span-2 flex gap-2">
                    <MapPin className="w-4 h-4 text-[#F4F1EA]/80 shrink-0" />
                    <div>
                      <span className="font-bold block text-white">Endereço base operacional:</span>
                      <span>{OBN_DATA.areaAtuacao.endereco}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Stylized illustrative map component */}
              <div className="lg:col-span-6 relative flex items-stretch">
                <div className="bg-[#0E0F11] border border-[#F4F1EA]/10 rounded-lg p-5 shadow-2xl w-full flex flex-col justify-between overflow-hidden">
                  
                  <div className="flex items-center justify-between border-b border-[#F4F1EA]/5 pb-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#5E6064]">Hub Floripa</span>
                    <span className="text-[9px] uppercase font-mono py-0.5 px-2 bg-green-900/30 text-green-400 border border-green-500/20 rounded">Rio Tavares Ativo</span>
                  </div>

                  <div className="flex-1 bg-[#1A1C1E]/30 border border-white/5 rounded relative overflow-hidden flex items-center justify-center py-12 px-4 my-4 min-h-[220px]">
                    <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                    
                    <div className="text-center relative z-10">
                      <div className="relative inline-flex items-center justify-center mb-3">
                        <span className="absolute w-12 h-12 rounded-full bg-[#F4F1EA]/10 animate-ping"></span>
                        <div className="w-10 h-10 rounded-full bg-[#F4F1EA] text-[#0E0F11] flex items-center justify-center font-bold text-xs shadow-xl">
                          SLM
                        </div>
                      </div>
                      
                      <h3 className="font-serif italic font-medium text-lg text-white mb-1">
                        Florianópolis - SC
                      </h3>
                      <p className="text-[10px] font-mono text-[#F4F1EA]/60 max-w-xs mx-auto leading-normal">
                        Atendimento presencial: Rio Tavares, Campeche, Novo Campeche, Jurerê & Centro.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] font-mono text-[#5E6064] block">Gravações em locações com suporte compacto autogovernado</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 10. INTERACTIVE CONCEPT BOOK & MERCH CATALOGUE (REPOSITIONED TO THE END AS PRODUCTS FOR SALE) */}
        <section id="concept-book" className="py-24 sm:py-32 bg-[#0E0F11] border-b border-[#F4F1EA]/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-green-400 block mb-3">
                Cultura S.I.M. · Produtos à Venda & Merch
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif italic font-medium text-white mb-4">
                {OBN_DATA.colecoes.titulo}
              </h2>
              <p className="text-[#F4F1EA]/70 text-sm sm:text-base font-light leading-relaxed whitespace-pre-line">
                {OBN_DATA.colecoes.subtitulo}
              </p>
              <div className="w-12 h-px bg-[#F4F1EA]/30 mx-auto mt-6"></div>
            </div>

            {/* SOUL IN MOTION CARD COPY */}
            <div className="max-w-2xl mx-auto mb-16 p-8 bg-[#1A1C1E] border border-[#F4F1EA]/10 rounded-xl text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4F1EA]/30 to-transparent"></div>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-green-400 block mb-4">
                Soul in Motion Card
              </span>
              <p className="text-[#F4F1EA]/80 font-serif italic text-lg leading-relaxed text-pretty">
                Roupas e equipamentos reais da cultura outdoor. Feito para quem respira esporte e leva a vida em movimento na água, na terra, com conceito.
              </p>
            </div>

            {/* Collections Grid showcasing products for sale with visual details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {OBN_DATA.colecoes.itens.map((item) => {
                const count = cart[item.id] || 0;
                return (
                  <div 
                    key={item.id} 
                    className="bg-[#1A1C1E] border border-[#F4F1EA]/10 rounded-lg overflow-hidden flex flex-col justify-between hover:border-green-400/25 transition-all group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#0E0F11]">
                      <img 
                        src={item.imageUrl} 
                        alt={item.nome} 
                        className={`w-full h-full ${item.imagePosition ? 'object-cover' : 'object-contain p-4'} brightness-95 group-hover:scale-[1.07] transition-transform duration-500 pointer-events-none`}
                        style={{
                          objectPosition: item.imagePosition || 'center',
                          transform: item.imageScale ? `scale(${item.imageScale})` : undefined
                        }}
                      />
                      
                      {/* Dark gradient mask */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E] via-transparent to-black/30 pointer-events-none"></div>

                      {/* Left top collection classification id */}
                      <span className="absolute top-4 left-4 bg-[#0E0F11] text-[#F4F1EA] border border-[#F4F1EA]/15 font-mono text-[9px] font-extrabold px-2.5 py-1 tracking-widest rounded shadow-lg z-10">
                        {item.colecaoId}
                      </span>

                      {/* Price Label */}
                      <span className="absolute top-4 right-4 bg-green-500 text-black font-mono text-xs font-black px-3 py-1.5 rounded shadow z-10">
                        R$ {item.preco}
                      </span>

                      {/* Bottom overlay with the quote phrase */}
                      {item.frase && (
                        <div className="absolute bottom-4 left-4 right-4 bg-[#0E0F11]/90 border border-[#F4F1EA]/10 p-3.5 rounded">
                          <p className="font-serif italic text-xs text-[#F4F1EA] leading-relaxed text-center">
                            "{item.frase}"
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Descriptive attributes */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-serif italic font-medium text-lg text-white mb-1">
                          {item.nome}
                        </h3>
                        <p className="text-xs text-[#F4F1EA]/60 font-sans leading-relaxed mb-4">
                          {item.descricao}
                        </p>

                        <div className="border-t border-[#F4F1EA]/5 pt-4 mt-2">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-[#5E6064] block mb-2">Exemplares Disponíveis:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.itens.map((piece, i) => (
                              <span key={i} className="px-2 py-0.5 bg-[#0E0F11] border border-[#F4F1EA]/5 text-[9px] font-mono tracking-wider text-[#F4F1EA]/85 rounded">
                                {piece}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quantity select action panel */}
                      <div className="border-t border-[#F4F1EA]/5 pt-4 mt-6">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[10px] font-mono text-[#5E6064] uppercase tracking-wider font-bold">Quantidade:</span>
                          <div className="flex items-center gap-1.5 bg-[#0E0F11] border border-[#F4F1EA]/5 rounded-full p-1">
                            <button 
                              onClick={() => updateCart(item.id, -1)}
                              className="w-7 h-7 rounded-full bg-[#1C1E20] hover:bg-red-950/40 text-[#F4F1EA]/70 hover:text-red-400 flex items-center justify-center transition-colors active:scale-95"
                              title="Remover"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-5 text-center text-xs font-mono font-bold text-white">{count}</span>
                            <button 
                              onClick={() => updateCart(item.id, 1)}
                              className="w-7 h-7 rounded-full bg-[#1C1E20] hover:bg-green-950/40 text-[#F4F1EA]/70 hover:text-green-400 flex items-center justify-center transition-colors active:scale-95"
                              title="Adicionar"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart & WhatsApp Checkout orders builder desk */}
            <div className="mt-16 bg-[#1A1C1E] border border-green-500/25 rounded-lg p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full filter blur-xl transform translate-x-12 -translate-y-12"></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBag className="w-5 h-5 text-green-400" />
                    <h4 className="font-serif italic font-medium text-lg text-white">
                      Mochila de Compras S.I.M.
                    </h4>
                  </div>
                  <p className="text-xs text-[#F4F1EA]/60 max-w-lg leading-relaxed font-sans font-light">
                    Peças originais concebidas e despachadas diretamente de Floripa. Incremente as quantidades acima para somar o pedido, e finalize sua ordem automática via WhatsApp!
                  </p>
                  
                  {/* Selected summary */}
                  <div className="mt-4">
                    {getCartTotal() === 0 ? (
                      <span className="text-[10px] font-mono text-[#5E6064] uppercase tracking-widest italic">Mochila Vazia. Adicione itens para montar o carrinho.</span>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {(Object.entries(cart) as [string, number][]).map(([id, qty]) => {
                          const item = OBN_DATA.colecoes.itens.find(p => p.id === id);
                          if (!item || qty === 0) return null;
                          return (
                            <span key={id} className="px-3 py-1 bg-green-950/30 border border-green-500/20 text-[10px] font-mono text-green-400 rounded">
                              {qty}x {item.nome}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full sm:w-auto flex flex-col items-stretch sm:items-end gap-3 self-center shrink-0">
                  <div className="text-left sm:text-right">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#5E6064] block">SOMA DO CARRINHO</span>
                    <span className="font-serif italic text-2xl font-black text-white block">
                      R$ {getCartTotal()}
                    </span>
                  </div>

                  <button
                    onClick={handleWhatsAppOrder}
                    disabled={getCartTotal() === 0}
                    className="px-6 py-4 bg-green-500 hover:bg-green-400 disabled:bg-neutral-800 text-[#0E0F11] disabled:text-[#5E6064] text-center rounded font-mono text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2 transition-all active:scale-95 disabled:pointer-events-none"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Confirmar pelo WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Merchandise footnote signature inspired by bottom right of Image 8 */}
            <div className="mt-12 bg-[#1A1C1E] border border-[#F4F1EA]/10 rounded-lg p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
              {/* Chevron logo left */}
              <div className="md:col-span-3 flex justify-center md:justify-start">
                <SoulInMotionLogo className="w-16 h-16 opacity-85" />
              </div>
              <div className="md:col-span-6 text-center md:text-left">
                <h4 className="font-serif italic font-medium text-lg text-[#F4F1EA] mb-2 leading-none">
                  Soul in Motion
                </h4>
                <p className="text-[#F4F1EA]/60 text-xs font-mono tracking-wide leading-relaxed">
                  Uma marca. Um estilo de vida. Um movimento.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-[10px] font-mono uppercase text-[#5E6064] tracking-widest">
                  <span>• Surf Collection</span>
                  <span>• Skate Flow</span>
                  <span>• Nature Caps</span>
                </div>
              </div>
              <div className="md:col-span-3 text-center md:text-right">
                <span className="text-xs font-mono tracking-widest text-[#5E6064] block mb-2">MARCA REGISTRADA</span>
                <span className="font-serif italic text-lg font-bold text-white leading-none">
                  OBN CREATIVE
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* 11. ACCORDION FAQ */}
        <section id="faq" className="py-24 bg-[#0E0F11] border-b border-[#F4F1EA]/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">

            <div className="text-center mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#5E6064] block mb-3">CONTRATO E DÚVIDAS</span>
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white font-medium">
                {OBN_DATA.faq.h2}
              </h2>
              <div className="w-12 h-px bg-[#F4F1EA]/30 mx-auto mt-4"></div>
            </div>

            {/* Accordion list */}
            <div className="space-y-4">
              {OBN_DATA.faq.itens.map((item, idx) => {
                const isOpen = faqOpenIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#F4F1EA]/10 rounded-lg overflow-hidden bg-[#1A1C1E]"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-6 flex justify-between items-center bg-[#1A1C1E] hover:bg-[#1A1C1E]/80 transition-colors gap-4"
                    >
                      <h3 className="text-sm sm:text-base font-serif italic font-bold text-white leading-snug">
                        {item.pergunta}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#F4F1EA]/50 shrink-0 transition-transform duration-300 ${
                          isOpen ? "transform rotate-180 text-white" : ""
                        }`}
                      />
                    </button>
                    
                    {isOpen && (
                      <div className="p-6 border-t border-[#F4F1EA]/5 text-xs sm:text-sm text-[#F4F1EA]/80 leading-relaxed bg-[#0E0F11] text-left">
                        <p>{item.resposta}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 11. CTA FINAL BLOCK - MATCHES IMAGE 7 CARD BACK PERFECTLY */}
        <section id="contato" className="py-24 sm:py-32 bg-[#0E0F11] text-[#F4F1EA] text-center relative overflow-hidden flex items-center justify-center min-h-[60vh] border-t border-[#F4F1EA]/5">
          
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img
              src={contactImg}
              alt="Ação e estilo de vida"
              className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center w-full">
            
            <SoulInMotionLogo className="w-12 h-12 mb-8 opacity-80" />
            
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-green-400 font-extrabold flex items-center justify-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              TEMOS EXPERIÊNCIA, TEMOS ESTRUTURA
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif italic text-white font-medium mb-6 leading-tight max-w-xl mx-auto">
              Vamos alinhar a <br className="hidden sm:block"/> comunicação da sua marca.
            </h2>

            <p className="text-sm font-sans font-light text-[#F4F1EA]/70 max-w-md mx-auto mb-10 leading-relaxed">
              Fale conosco diretamente. Marque uma conversa profissional para definirmos a sua atração estratégica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mb-12">
              <a
                href={OBN_DATA.empresa.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 bg-green-500 text-[#0E0F11] hover:bg-green-400 text-center py-3.5 px-6 rounded-sm font-mono text-xs uppercase tracking-widest font-extrabold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>INICIAR CONTATO</span>
              </a>

              <a
                href={OBN_DATA.empresa.redes_sociais.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 bg-transparent text-white border border-[#F4F1EA]/20 hover:border-[#F4F1EA]/60 hover:bg-[#F4F1EA]/5 text-center py-3.5 px-6 rounded-sm font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>INSTAGRAM</span>
              </a>
            </div>

            {/* Bottom operational signatures */}
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#5E6064] flex flex-wrap justify-center gap-6 pt-6 w-full opacity-60">
              <span className="flex items-center gap-1.5"><SoulInMotionLogo className="w-3 h-3"/> STUDIO</span>
              <span>EST. 2026</span>
              <span>FLORIANÓPOLIS, BR</span>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#0E0F11] py-8 border-t border-[#F4F1EA]/5 text-[#5E6064] text-center text-xs font-mono tracking-wider">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Soul in Motion. Todos os direitos reservados. Assinado por OBN Creative.</p>
          <div className="flex gap-4">
            <a href="#inicio" className="hover:text-white transition-colors">Voltar ao topo</a>
            <span>•</span>
            <span className="text-[#F4F1EA]/40">Atendimento presencial em Florianópolis</span>
          </div>
        </div>
      </footer>

      {/* 4. SLIDE-OUT COPYWRITING DRAWER FOR MARKETING COPY COPIES (CRO ACCESSIBILITY MANDATE) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
          
          {/* Backdrop Click Dismiss */}
          <div className="absolute inset-0" onClick={() => setDrawerOpen(false)} />

          {/* Drawer Element */}
          <div className="relative w-full max-w-xl bg-[#0E0F11] text-[#F4F1EA] border-l border-[#F4F1EA]/15 h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl animate-slideLeft z-10 text-left">
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#F4F1EA]/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-white" />
                  <h3 className="font-serif italic font-bold text-lg text-white">Central de Redação & SEO</h3>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1 text-[#F4F1EA]/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-xs text-[#F4F1EA]/70 mb-6 font-light leading-relaxed font-sans">
                Acesse abaixo os textos originais de alta conversão selecionados para cada seção do site. Clique nos botões para copiá-los de imediato para a sua área de transferência para publicações ou posts.
              </p>

              {/* Copy Sections */}
              <div className="space-y-6">
                
                {/* 1. Hero Block */}
                <div className="bg-[#1A1C1E] rounded p-4 border border-[#F4F1EA]/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#5E6064] font-extrabold uppercase">Copy principal: Hero / Slogan</span>
                    <button
                      onClick={() => copyToClipboard(`Título: ${OBN_DATA.hero.h1}\nSubtítulo: ${OBN_DATA.hero.subtitulo}`, "copy-hero")}
                      className="text-[10px] uppercase font-mono text-[#F4F1EA] hover:underline flex items-center gap-1"
                    >
                      {copiedStatus === "copy-hero" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <p className="text-xs font-serif italic text-white mb-1">"{OBN_DATA.hero.h1}"</p>
                  <p className="text-[11px] text-[#F4F1EA]/80 font-light font-sans">{OBN_DATA.hero.subtitulo}</p>
                </div>

                {/* 2. Merchandise Book */}
                <div className="bg-[#1A1C1E] rounded p-4 border border-[#F4F1EA]/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#5E6064] font-extrabold uppercase">Estampas & Conceitos das Coleções</span>
                    <button
                      onClick={() => {
                        const allPhrases = OBN_DATA.colecoes.itens.map(c => `${c.colecaoId}: ${c.frase}`).join("\n");
                        copyToClipboard(allPhrases, "copy-merch");
                      }}
                      className="text-[10px] uppercase font-mono text-[#F4F1EA] hover:underline flex items-center gap-1"
                    >
                      {copiedStatus === "copy-merch" ? "Copiado!" : "Copiar Todas"}
                    </button>
                  </div>
                  <div className="text-[11px] space-y-1.5 text-[#F4F1EA]/80 font-mono">
                    {OBN_DATA.colecoes.itens.map(c => (
                      <div key={c.id}>
                        <span className="text-white font-bold">{c.colecaoId}:</span> {c.frase}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Atuação Sem Limites */}
                <div className="bg-[#1A1C1E] rounded p-4 border border-[#F4F1EA]/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#5E6064] font-extrabold uppercase">Logística & Atendimento nacional</span>
                    <button
                      onClick={() => copyToClipboard(OBN_DATA.atuacao.paragrafo, "copy-atuacao")}
                      className="text-[10px] uppercase font-mono text-[#F4F1EA] hover:underline flex items-center gap-1"
                    >
                      {copiedStatus === "copy-atuacao" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <p className="text-[11px] text-[#F4F1EA]/80 font-sans font-light leading-relaxed">
                    {OBN_DATA.atuacao.paragrafo}
                  </p>
                </div>

                {/* 4. Chamada de ação contato */}
                <div className="bg-[#1A1C1E] rounded p-4 border border-[#F4F1EA]/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#5E6064] font-extrabold uppercase">Mensagem de Fechamento / Call-out</span>
                    <button
                      onClick={() => copyToClipboard(OBN_DATA.contato.chamada, "copy-contato")}
                      className="text-[10px] uppercase font-mono text-[#F4F1EA] hover:underline flex items-center gap-1"
                    >
                      {copiedStatus === "copy-contato" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <p className="text-xs font-serif italic text-white">
                    "{OBN_DATA.contato.chamada}"
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Actions of Drawer */}
            <div className="pt-6 border-t border-[#F4F1EA]/10 mt-8 text-center text-[10px] font-mono uppercase tracking-widest text-[#5E6064]">
              <span>Soul in Motion • OBN Creative</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
