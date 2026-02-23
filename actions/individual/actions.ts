"use server"

import prisma from "@/src/lib/db"

export async function fetchProdutoById(id:number) {
    const produtos = await prisma.produtos.findUnique({
        where: {id},
            select: {
            id: true,
            title: true,
            image: true,
            price: true,
            description: true,
        }
    })
    return produtos
}