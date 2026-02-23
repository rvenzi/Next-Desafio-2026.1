"use server";

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchProdutos() {
  const produtos = await prisma.produtos.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      description: true,
      image: true, 
    },
    orderBy: {
      id: "asc",
    },
  });

  const count = await prisma.produtos.count();
  return { produtos, count };
}

export async function fetchProdutosById(id: number | undefined) {
  const produtos = await prisma.produtos.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      price: true,
      description: true,
      image: true,
    }
  })

  return produtos;

}

export async function updateProduto(id:number | undefined, formData: FormData) {
  const title = formData.get("name") as string;
  const price = Number(formData.get("preco"));
  const description = formData.get("descricao") as string;

  const imageFile = formData.get("image") as File;
  
  let imagePath = "";

  if (imageFile && imageFile.size > 0) {
   
    imagePath = `/${imageFile.name}`; 
  } else {
    
    imagePath = "/placeholder.png"; 
  }

  await prisma.produtos.update({
    where: { id },
    data: {
      title,
      price,
      description,
      image: imagePath, 
    },
  });

  redirect("/gerenciamento/tabela-gerenciamento")

}

export async function deleteProduto(id: number | undefined) {
  if (!id) return; 
  await prisma.produtos.delete({
    where: { id },
  });
  revalidatePath("/gerenciamento/tabela-gerenciamento")
}

export async function createProduto(formData: FormData) {

  const title = formData.get("name") as string;
  const price = Number(formData.get("preco"));
  const description = formData.get("descricao") as string;
  
  const imageFile = formData.get("image") as File;
  
  let imagePath = "";

  if (imageFile && imageFile.size > 0) {
   
    imagePath = `/uploads/${imageFile.name}`; 
  } else {
    
    imagePath = "/uploads/placeholder.png"; 
  }

  await prisma.produtos.create({
    data: {
      title: title || "Sem título",
      price: price || 0,
      description: description || "",
      image: imagePath, 
    },
  });

  redirect("/gerenciamento/tabela-gerenciamento");
}