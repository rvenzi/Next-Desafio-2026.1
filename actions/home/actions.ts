"use server"

import prisma from "@/src/lib/db"

export default async function getMaisVendidos() {
    const produtos = await prisma.produtos.findMany({
        
        select: {
            id: true,
            title: true,
            image: true,
            price: true,
        },
        take: 6
    })
    return produtos;
}