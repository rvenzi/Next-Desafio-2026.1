import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
     
      title: 'Dior Sauvage',
      image: 'https://img.lojasrenner.com.br/item/539110289/original/1.jpg',
      description: 'Perfume masculino com notas frescas de bergamota e toque amadeirado.',
      price: 599.90,
    },
    {
      
      title: 'Chanel Nº 5',
      image: 'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F4500843.webp&w=3840&q=40',
      description: 'Clássico perfume feminino com aroma floral aldeídico sofisticado.',
      price: 799.90,
    },
    {
      
      title: 'Invictus',
      image: 'https://img.lojasrenner.com.br/item/533767634/original/1.jpg',
      description: 'Fragrância masculina energética com notas marinhas e amadeiradas.',
      price: 529.90,
    },
    {
      
      title: 'La Vie Est Belle',
      image: 'https://img.lojasrenner.com.br/item/834650430/zoom/1.jpg',
      description: 'Perfume feminino doce e elegante com íris, jasmim e patchouli.',
      price: 649.90,
    },
    {
      
      title: '212 VIP',
      image: 'https://img.lojasrenner.com.br/item/527173901/original/1.jpg',
      description: 'Fragrância moderna com notas orientais e toque adocicado.',
      price: 499.90,
    },
    {
     
      title: 'Good Girl',
      image: 'https://img.lojasrenner.com.br/item/551652881/zoom/1.jpg',
      description: 'Perfume feminino marcante com notas de amêndoa, café e cacau.',
      price: 689.90,
    },
    {
      
      title: 'One Million',
      image: 'https://img.lojasrenner.com.br/item/546594103/large/1.jpg',
      description: 'Fragrância intensa com notas de couro, canela e âmbar.',
      price: 579.90,
    },
    {
      
      title: 'Euphoria',
      image: 'https://img.lojasrenner.com.br/item/519032076/original/10.jpg',
      description: 'Perfume feminino sensual com romã, orquídea e notas cremosas.',
      price: 459.90,
    },
    {
      title: 'Acqua di Gio',
      image: 'https://img.lojasrenner.com.br/item/928530017/large/1.jpg',
      description: 'Fragrância fresca inspirada no mar com notas cítricas e aquáticas.',
      price: 619.90,
    },
    {
      title: 'Bleu de Chanel',
      image: 'https://product-data.raiadrogasil.io/images/5039143.webp',
      description: 'Perfume masculino elegante com notas amadeiradas e cítricas.',
      price: 749.90,
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