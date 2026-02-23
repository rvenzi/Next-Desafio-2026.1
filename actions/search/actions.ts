import prisma from "@/src/lib/db";

const itemsPerPage = 6;

export async function fetchFilteredProdutos(query: string, currentPage: number) {
    const offSet = (currentPage - 1) * itemsPerPage

  const produtos = await prisma.produtos.findMany({
    where: {
      OR: [{ title: { contains: query, mode: 'insensitive' } }],
    },
    orderBy: {
      title: 'asc',
    },
    take: itemsPerPage,
    skip: offSet
  });

  const count = await prisma.produtos.count({
    where: {
      OR: [{ title: { contains: query, mode: 'insensitive' } }],
    },
  });

  const totalPages = Math.ceil(count / itemsPerPage)

  return { produtos, count, totalPages };
}