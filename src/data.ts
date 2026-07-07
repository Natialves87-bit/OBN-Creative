import sunsetSurfImg from "./assets/images/D5922464-2788-4DF4-8886-075A0338D005.JPG.jpeg";
import aboutImg from "./assets/images/2ABE8A74-FD56-4FC3-834E-AEF02DDF71D7.JPG.jpeg";
import contactImg from "./assets/images/IMG_8244.JPG.jpeg";
import sedeImg from "./assets/images/D57AFEEF-53B9-4111-870F-182705C2BE65.JPG.jpeg";
import prod1Img from "./assets/images/01 Surf Collection.png";
import prod2Img from "./assets/images/02 Skate Collection.png";
import prod3Img from "./assets/images/03 Nature Collection.png";
import prod4Img from "./assets/images/04 Surf Essence.png";
import prod5Img from "./assets/images/05 Coastal Vibes.png";
import prod9Img from "./assets/images/07 Caps.png";
import prod10Img from "./assets/images/08 Water Bottles.png";
import prod11Img from "./assets/images/09 Sticker Pack NOVO.png";

export interface Service {
  id: string;
  nome: string;
  descricao: string;
  slug: string;
  icon: string;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export interface Testimonial {
  cliente: string;
  projeto: string;
  quote: string;
  tags: string[];
}

export interface Benefit {
  titulo: string;
  descricao: string;
}

export interface Step {
  número: string;
  titulo: string;
  descricao: string;
}

export interface CollectionItem {
  id: string;
  colecaoId: string;
  nome: string;
  descricao: string;
  frase?: string;
  itens: string[];
  imageUrl: string;
  preco: number;
  imagePosition?: string;
  imageScale?: number;
}

export const OBN_DATA = {
  empresa: {
    nome: "Soul in Motion",
    assinatura: "OBN CREATIVE",
    segmento: "Agência criativa de conteúdo, direção de arte e comunicação para marcas de Outdoor Sports Lifestyle",
    cidade: "Florianópolis",
    estado: "SC",
    pais: "BR",
    telefone: "(11) 95648-1513",
    whatsapp: "5511956481513",
    whatsappLink: "https://wa.me/5511956481513?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20Soul%20in%20Motion%20e%20gostaria%20de%20conversar%20sobre%20nossos%20conte%C3%BAdos%20e%20audiovisual.",
    email: "hello@obncreative.com",
    endereco: "Área de atendimento presencial em Florianópolis e locações globais (Atendimento presencial no sul da ilha — Rio Tavares, Campeche e Novo Campeche)",
    horario: "Segunda a sexta, das 9h às 18h",
    bairros_atendidos: "Rio Tavares, Campeche, Lagoa da Conceição, Jurerê, Centro, Novo Campeche e projetos sob demanda por todo o Brasil",
    logo_path: "/assets/img/logo.png",
    redes_sociais: {
      instagram: "https://instagram.com/obn_creative",
      instagramUser: "@obn_creative"
    }
  },
  
  branding: {
    tom: "Sofisticado, aventureiro, imersivo e rítmico. Minimalista e centrado na essência outdoor.",
    paleta: {
      primaria: "#0E0F11", // Grafite profundo de cinema / noite
      secundaria: "#F4F1EA", // Areia clara / osso / off-white clássico
      cinza: "#5E6064", // Cinza chumbo / pedra das praias
      cinzaCard: "#1A1C1E", // Cinza médio para cards
      texto: "#F4F1EA"
    }
  },

  seo: {
    palavra_chave_principal: "agencia de conteudo florianopolis",
    palavras_secundarias: [
      "producao audiovisual florianopolis",
      "produtora de video floripa",
      "foto e video de esporte florianopolis",
      "outdoor sports lifestyle floripa",
      "imagens de drone campeche",
      "conteudo de marca surf skate",
      "direcao de arte outdoor",
      "cameras aquaticas floripa",
      "producao audiovisual rio tavares",
      "agencia criativa floripa"
    ]
  },

  hero: {
    h1_pre: "AGÊNCIA CRIATIVA · FLORIPA",
    h1: "Conteúdo que move a\nsua marca.",
    subtitulo: "Direção criativa, foto, drone, montagem profissional e comunicação. A gente cuida da sua presença digital do começo ao fim com a sofisticação que seu posicionamento exige.",
    ctaPrincipal: "Conectar no WhatsApp",
    ctaSecundario: "Ver Coleção de Produtos",
    textoApoio: "Estratégia, Audiovisual, Drone & Comunicação Digital com DNA Outdoor Sports."
  },

  credibilidade: {
    indicadores: [
      { valor: "Formação Sólida", desc: "Graduada em Comunicação, Publicidade e Marketing com Pós-graduação em grandes instituições" },
      { valor: "Edição Premium", desc: "Montagem profissional de ritmo ágil de alto impacto para mídias digitais" },
      { valor: "Audiovisual Outdoor", desc: "Equipamentos de alta definição para capturar a emoção e o movimento em qualquer terreno." },
      { valor: "Google 5.0 ★", desc: "Previsão de avaliação máxima no Google Meu Negócio pelo mercado" }
    ]
  },

  sobre: {
    h2: "A Alma do Movimento nos Negócios",
    paragrafos: [
      "A Soul in Motion (assinada pela OBN Creative) nasceu no sul da ilha, em Florianópolis, da união entre a paixão por esportes de ação e a inteligência estratégica de canais de comunicação. Simplificamos sua presença online centralizando a produção premium de ponta a ponta.",
      "Nosso DNA respira pura cultura Outdoor Sports Lifestyle. Traduzimos essa vivência visceral em vídeos comerciais de alto ritmo, fotografia digital de alta definição e montagem técnica extraordinária. A pós-produção é rigorosamente profissional, sob liderança de especialista formada em Comunicação, Publicidade e Marketing, com pós-graduação pelas principais instituições educacionais do país.",
      "Nossa vivência no concreto, na terra, no mar e na natureza traduz-se em produções dinâmicas de alto padrão. Combinamos o olhar afiado para os esportes de ação e lifestyle outdoor à fineza exigida pelas marcas premium mais seletas do mercado. Contamos com um acervo técnico de excelência: drones homologados e lentes de alto desempenho para excelência em qualquer terreno."
    ],
    cta: "Construir Minha Marca"
  },

  servicos: {
    h2: "Estratégia, Audiovisual\n& Produção de Sites",
    itens: [
      {
        id: "estrategia",
        nome: "Direção Estratégica & Arte",
        descricao: "O plano por trás de cada conteúdo de alto impacto. Linhas de comunicação exclusivas que elevam seu posicionamento em Outdoor Sports Lifestyle.",
        slug: "direcao-arte",
        icon: "TrendingUp"
      },
      {
        id: "producao",
        nome: "Audiovisual & Fotografia",
        descricao: "Produção técnica completa com equipamentos de última geração. Contempla desde a construção do roteiro, direção de cena atuante, até a captação final em alta definição, especializada em ação e vida outdoor.",
        slug: "producao-aquatica",
        icon: "Camera"
      },
      {
        id: "edicao",
        nome: "Montagem & Edição Profissional",
        descricao: "O acabamento pós-produção de nível comercial. Cortes rítmicos precisos, áudio imersivo de altíssima fidelidade e color grading cinematográfico.",
        slug: "edicao-profissional",
        icon: "Sliders"
      },
      {
        id: "comunicacao",
        nome: "Comunicação & Atratividade Digital",
        descricao: "Roteirização magnética e tom de voz intencional para mídias sociais. Engajamento orgânico qualificado para marcas com DNA outdoor e ativo.",
        slug: "comunicacao-digital",
        icon: "MessageSquare"
      },
      {
        id: "sites",
        nome: "Produção de Sites & Portfólios",
        descricao: "Desenvolvimento de portfólios autorais, landing pages e sites modernos de altíssima velocidade, integrados à estratégia de branding e atração da sua marca.",
        slug: "producao-sites",
        icon: "Globe"
      }
    ] as Service[],
    fechamento: "Desenvolvimento de portfólios de alta conversão, direção estratégica de marca e produção audiovisual completa de ponta a ponta. Com equipamentos de última geração e profundo entendimento da cultura outdoor, dirigimos e captamos conteúdos autênticos, transformando a essência da sua marca em campanhas e imagens cinematográficas de alto impacto no digital.",
    cta: "Chamar a Agência"
  },

  colecoes: {
    titulo: "Loja Virtual S.I.M. — Produtos & Vestuário",
    subtitulo: "Nossos produtos conceituais exclusivos inspirados no autêntico Outdoor Sports Lifestyle.\nVista e explore a alma do Soul in Motion com peças premium.",
    itens: [
      {
        id: "prod1",
        colecaoId: "VESTUÁRIO",
        nome: "Camiseta Surf Collection",
        descricao: "Algodão 100% premium, modelagem confortável.",
        imageUrl: prod1Img,
        itens: ["P", "M", "G", "GG"],
        preco: 120
      },
      {
        id: "prod2",
        colecaoId: "VESTUÁRIO",
        nome: "Camiseta Skate Collection",
        descricao: "Design autêntico de cultura street e skate.",
        imageUrl: prod2Img,
        itens: ["P", "M", "G", "GG"],
        preco: 120
      },
      {
        id: "prod3",
        colecaoId: "VESTUÁRIO",
        nome: "Camiseta Nature Collection",
        descricao: "Inspiração direta do Outdoor Lifestyle.",
        imageUrl: prod3Img,
        itens: ["P", "M", "G", "GG"],
        preco: 120
      },
      {
        id: "prod4",
        colecaoId: "VESTUÁRIO",
        nome: "Camiseta Surf Essence",
        descricao: "A essência do surf em traços minimalistas.",
        imageUrl: prod4Img,
        itens: ["P", "M", "G", "GG"],
        preco: 120
      },
      {
        id: "prod5",
        colecaoId: "VESTUÁRIO",
        nome: "Camiseta Coastal Vibes",
        descricao: "Conforto e estilo para os dias ensolarados.",
        imageUrl: prod5Img,
        itens: ["P", "M", "G", "GG"],
        preco: 120
      },
      {
        id: "prod9",
        colecaoId: "ACESSÓRIOS",
        nome: "Bonés S.I.M. Dad Hat",
        descricao: "Modelagem anatômica com fivela e bordado minimalista.",
        imageUrl: prod9Img,
        itens: ["Tamanho Único"],
        preco: 80
      },
      {
        id: "prod10",
        colecaoId: "ACESSÓRIOS",
        nome: "Garrafas Térmicas S.I.M.",
        descricao: "Pintura matte de alta aderência, mantém a temperatura na medida certa.",
        imageUrl: prod10Img,
        itens: ["600ml"],
        preco: 50
      },
      {
        id: "prod11",
        colecaoId: "ACESSÓRIOS",
        nome: "Sticker Pack S.I.M.",
        descricao: "Adesivos vinílicos de alta durabilidade e resistência UV.",
        imageUrl: prod11Img,
        itens: ["Cartela com adesivos variados"],
        preco: 25
      }
    ] as CollectionItem[]
  },

  atuacao: {
    h2: "Sede em Floripa.\nAtuação Sem Fronteiras.",
    paragrafo: "Nosso hub criativo de imagem está localizado no Rio Tavares, sul de Florianópolis, SC. Daqui, operamos uma estrutura técnica compacta, equipada com câmeras de alta definição, lentes de primeira linha e um drone homologado, pronto para realizar captações sob demanda por todo o mundo.",
    ctaObjeção: "Não está em Florianópolis? Veja como planejamos remotamente e viajamos com nossa estrutura para qualquer lugar do planeta."
  },

  beneficios: {
    h2: "Direção Avançada & Execução Estratégica",
    itens: [
      {
        titulo: "Planejamento e Publicidade Sólidos",
        descricao: "Comunicação visual liderada por especialista com sólida formação acadêmica. Estratégias de design, roteiro e posicionamento criadas com fundamentação mercadológica para garantir resultados consistentes."
      },
      {
        titulo: "DNA Próprio Outdoor Sports Lifestyle",
        descricao: "Skates de fluxo, concreto, montanhas e contato natural são nossas vivências cotidianas."
      },
      {
        titulo: "Ação Real & Esportiva",
        descricao: "Olhar treinado para a dinâmica do movimento. Imagens de esportes e logísticas de aventura capturadas com instinto e técnica."
      },
      {
        titulo: "Edição Altamente Profissional",
        descricao: "Pós-produção com ritmos musicais precisos, sincronia poética e color grading avançado que dão máxima atratividade ao seu negócio."
      }
    ] as Benefit[]
  },

  processo: {
    h2: "Nosso Fluxo de Trabalho",
    itens: [
      {
        número: "01",
        titulo: "Mapeamento Estético de Marca",
        descricao: "Análise profunda de publicidade e design para traçar o posicionamento estético exato focado no Outdoor Sports Lifestyle."
      },
      {
        número: "02",
        titulo: "Roteiro Publicitário & Locações",
        descricao: "Criação de scripts detalhados de alto engajamento, seleção de locações ao ar livre ideias e definição do figurino esportivo."
      },
      {
        número: "03",
        titulo: "Captação Ativa & Imersiva",
        descricao: "Captação dinâmica utilizando lentes rápidas de primeira linha e drone homologado para compor ângulos profissionais."
      },
      {
        número: "04",
        titulo: "Edição & Montagem Profissional",
        descricao: "Edição requintada, cortes ágeis na batida sonora, mixagem de áudio imersivo e ajuste de cores cromático excepcional."
      },
      {
        número: "05",
        titulo: "Entrega Estratégica",
        descricao: "Envio de arquivos em altíssima qualidade prontos para disparar os feedbacks, notas e views da sua empresa no mercado."
      }
    ] as Step[]
  },

  // Separated Grano and Sensia, and included @entulhodiy
  provaSocial: {
    h2: "Alguns de Nossos Movimentos",
    itens: [
      {
        cliente: "Atuação de Marca Premium",
        projeto: "Suzuki Motors & Jeep",
        quote: "Foco na experiência do usuário e estilo de vida ao ar livre, documentando aventuras e desafios com autenticidade. Geração de conteúdo completo (fotos, vídeos e Reels) para campanhas direcionadas de ambas as marcas. Atuação de 1 ano como embaixadora oficial da Suzuki; e mais de 10 anos de vivência autêntica com a Jeep, com vasta captação de acervo e, nos últimos anos, produção ativa de conteúdo para a marca.",
        tags: ["Suzuki", "Jeep", "Influência Outdoor"]
      },
      {
        cliente: "Woodcraft & Outdoor Lifestyle",
        projeto: "@entulhodiy",
        quote: "Trabalho social e acompanhamento completo de comunicação e marketing para o movimento de skate DIY sem fins lucrativos. Produção de fotos, vídeos, reels, suporte em eventos e gravação de um documentário exclusivo atestando a essência do projeto. Participação com fotos exclusivas do projeto na lendária revista internacional Confusion Magazine.",
        tags: ["Skate DIY", "Documentário", "Confusion Magazine"]
      },
      {
        cliente: "Suplementação & Saúde",
        projeto: "Sensia Care (CBD)",
        quote: "Trabalho de experiência do usuário focado nos esportes, criação de vídeos e fotos de alta performance visando conexão genuína com a vida outdoor. Parceira oficial consolidada e divulgada através do hub @atletacannabis.",
        tags: ["Suplementação CBD", "Recuperação Ativa", "@atletacannabis"]
      },
      {
        cliente: "Alimentação Saudável Premium",
        projeto: "Grano Artesanal",
        quote: "Trabalho prático de experiência visual e criação de fotos e vídeos, incorporando a granola com autenticidade à rotina e na essência do Outdoor Lifestyle.",
        tags: ["Granolas Floripa", "Direção de Arte", "Fotos de Produto"]
      },
      {
        cliente: "Gastronomia & Experiência",
        projeto: "Cookies da Ilha",
        quote: "Projeto audiovisual completo (fotos e Reels) captado com equipamentos de última geração. Ajudamos a marca na direção de cena, captação e produção de conteúdo 100% direcionado para a campanha sugerida junto aos fundadores.",
        tags: ["Campanha Digital", "Direção Criativa", "Reels & Fotografia"]
      }
    ] as Testimonial[]
  },

  googleMeuNegocio: {
    notaMedia: "5.0",
    totalAvaliacoes: 2,
    feedbacks: [
      {
        autor: "Ana Luiza Helfer",
        relato: "Excelente profissional As fotos ficaram lindas, com ótima qualidade, e o vídeo foi editado e entregue muito rapidamente. O resultado ficou perfeito já na primeira versão, sem necessidade de qualquer ajuste. Recomendo demais pela qualidade do trabalho, agilidade e profissionalismo.",
        estrelas: 5,
        data: "Há 3 dias"
      },
      {
        autor: "Gustavo Paiva",
        relato: "Excelente profissional! Fizemos um vídeo com a Naty e ela nos surpreendeu pela atenção aos detalhes, criatividade e visão estratégica na produção de conteúdos em vídeo e áudio. Muito dedicada, profissional e comprometida com a qualidade do trabalho. Recomendo com certeza",
        estrelas: 5,
        data: "Há 3 dias"
      },
      {
        autor: "—",
        relato: "Espaço reservado para sua avaliação.",
        estrelas: 0,
        data: ""
      }
    ]
  },

  areaAtuacao: {
    h2: "Agência de Conteúdo & Produção em Florianópolis",
    paragrafos: [
      "Operamos presencialmente em Florianópolis, oferecendo captação de marca personalizada nos distritos do sul da ilha (Rio Tavares, Campeche, Novo Campeche e Lagoa da Conceição) e norte da ilha sob planejamento.",
      "Com o conceito de movimentação integrada da OBN Creative, viajamos o Brasil e o exterior transportando toda a nossa infraestrutura de câmeras profissionais e drones compactos."
    ],
    endereco: "Hub Criativo Soul in Motion (Rio Tavares, Florianópolis - SC — Atendimentos presidenciais agendados)",
    horario: "Segunda a sexta, das 9h às 18h",
    whatsapp: "+55 (11) 95648-1513"
  },

  faq: {
    h2: "Perguntas de Movimento",
    itens: [
      {
        pergunta: "Quem é a profissional responsável pela agência?",
        resposta: "O seu projeto é liderado e executado por profissional formada em Comunicação, Publicidade e Marketing, com Pós-graduação acadêmica cursada em grandes e renomadas instituições de ensino do país. Isso garante fundamentação mercadológica real e inteligência estratégica antes e depois da gravação das mídias."
      },
      {
        pergunta: "Por que escolher o Soul in Motion em vez de profissionais avulsos?",
        resposta: "Ao contratar profissionais avulsos, você precisa coordenar o roteirista, o videomaker, o editor e o designer. O Soul in Motion centraliza de ponta a ponta com visão profissional de marketing, poupando seu tempo precioso."
      },
      {
        pergunta: "Como funciona a captação se minha empresa não fica em Florianópolis?",
        resposta: "Nossa agência possui passaportes e maletas para viagem imediata. Elaboramos o planejamento de forma remota e viajamos até você para as captações principais, executando toda a pós-produção profissional na nossa base."
      },
      {
        pergunta: "A OBN Creative e o Soul in Motion são a mesma coisa?",
        resposta: "Sim! Soul in Motion é o espírito da marca, nosso slogan, algo que traduz a emoção da nossa criação. A OBN Creative é apenas a nossa razão social, mas no fim das contas, tudo é a mesma coisa."
      },
      {
        pergunta: "Vocês fazem captação dinâmica de esportes?",
        resposta: "Sim! Abandonamos estabilizadores convencionais e focamos em imagens orgânicas e reais de aventura e movimento para transmitir o mais puro Outdoor Sports Lifestyle."
      }
    ] as FAQItem[]
  },

  contato: {
    h2: "Vamos mover o seu negócio?",
    chamada: "Fale conosco pelo WhatsApp ou direct no Instagram. Marque uma conversa profissional ou café na ilha para alinhar a imagem de atração estratégica da sua marca.",
    ctaPrincipal: "Iniciar no WhatsApp",
    ctaSecundario: "Ver @obn_creative",
    textoApoio: "Pós-graduação em Marketing e ampla vivência esportiva a serviço do seu posicionamento."
  }
};
