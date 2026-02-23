import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
     
      title: 'Dior Sauvage',
      image: 'https://img.lojasrenner.com.br/item/539110289/original/1.jpg',
      description: 'Da Dior, é uma fragrância masculina que equilibra frescor e intensidade com muita naturalidade. A abertura cítrica de bergamota é iluminada por um toque picante de pimenta, evoluindo para um coração aromático limpo e um fundo amadeirado com ambroxan. O resultado é um perfume moderno, com ótima projeção e fixação, que transmite confiança e elegância sem esforço. Funciona muito bem tanto no dia a dia quanto à noite.',
      price: 599.99,
    },
    {
      
      title: 'Chanel Nº 5',
      image: 'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F4500843.webp&w=3840&q=40',
      description: 'Clássico absoluto da Chanel, é um floral aldeídico icônico que representa sofisticação atemporal. A fragrância abre com um brilho aldeídico que envolve notas de jasmim e rosa, apoiadas por uma base cremosa de baunilha e madeiras suaves. É refinado, feminino e marcante, com aura elegante que nunca sai de moda — perfeito para ocasiões especiais ou para quem ama tradição com luxo.',
      price: 799.99,
    },
    {
      
      title: 'Invictus',
      image: 'https://img.lojasrenner.com.br/item/533767634/original/1.jpg',
      description: 'Sucesso da Paco Rabanne, traz um contraste cativante entre frescor marinho e calor amadeirado. As notas aquáticas e cítricas dão energia logo na saída, enquanto âmbar e madeira no fundo garantem profundidade e masculinidade. É vibrante, esportivo e moderno, ideal para quem quer um aroma jovem, confiante e fácil de reconhecer.',
      price: 529.99,
    },
    {
      
      title: 'La Vie Est Belle',
      image: 'https://img.lojasrenner.com.br/item/834650430/zoom/1.jpg',
      description: 'Assinatura feminina da Lancôme, celebra a doçura elegante com um perfil gourmand sofisticado. A íris delicada se mistura ao praline e à baunilha, criando um aroma envolvente e luminoso. É doce na medida certa, com excelente fixação e presença acolhedora — transmite alegria, feminilidade e um charme romântico que marca.',
      price: 649.99,
    },
    {
      
      title: '212 VIP',
      image: 'https://img.lojasrenner.com.br/item/527173901/original/1.jpg',
      description: 'Da Carolina Herrera, é uma fragrância noturna, urbana e cheia de atitude. A combinação de rum e frutas tropicais traz um toque festivo e sensual, enquanto a baunilha adiciona calor e conforto. Moderno e marcante, combina com ambientes sociais, festas e momentos em que você quer destacar personalidade.',
      price: 499.99,
    },
    {
     
      title: 'Good Girl',
      image: 'https://img.lojasrenner.com.br/item/551652881/zoom/1.jpg',
      description: 'Da Carolina Herrera, mistura elegância e ousadia em um contraste sedutor. O jasmim luminoso abre a composição, seguido por um coração doce com cacau e final quente de fava tonka. Feminino, intenso e sofisticado, é um perfume que equilibra delicadeza e poder, ideal para noites especiais.',
      price: 689.99,
    },
    {
      
      title: 'One Million',
      image: 'https://img.lojasrenner.com.br/item/546594103/large/1.jpg',
      description: 'Ícone da Paco Rabanne, conhecido pelo perfil doce e especiado que chama atenção. A canela e as notas quentes se combinam com couro e âmbar, criando um aroma opulento e duradouro. É ousado, luxuoso e muito presente — perfeito para quem gosta de fragrâncias marcantes e envolventes.',
      price: 579.99,
    },
    {
      
      title: 'Euphoria',
      image: 'https://img.lojasrenner.com.br/item/519032076/original/10.jpg',
      description: 'Criação envolvente da Calvin Klein, com um perfil sensual e misterioso. A romã frutada abre o perfume, evoluindo para uma orquídea negra sofisticada sobre um fundo amadeirado quente. Elegante e sedutor, tem um ar noturno e sofisticado que transmite profundidade e charme.',
      price: 459.99,
    },
    {
      title: 'Acqua di Gio',
      image: 'https://img.lojasrenner.com.br/item/928530017/large/1.jpg',
      description: 'Clássico masculino da Giorgio Armani, inspirado na brisa do mar e na leveza da natureza. As notas cítricas e aquáticas criam uma sensação fresca e limpa, enquanto o fundo amadeirado adiciona elegância. Versátil e atemporal, é perfeito para uso diário, especialmente em climas quentes.',
      price: 619.99,
    },
    {
      title: 'Bleu de Chanel',
      image: 'https://product-data.raiadrogasil.io/images/5039143.webp',
      description: 'Fragrância moderna e refinada da Chanel, com perfil amadeirado aromático sofisticado. A abertura fresca com toranja e notas cítricas evolui para incenso e madeiras nobres, criando um aroma elegante e profundo. É versátil, masculino e extremamente equilibrado — combina com qualquer ocasião.',
      price: 749.99,
    },
  ];

  for (const product of products) {
    await prisma.produtos.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });