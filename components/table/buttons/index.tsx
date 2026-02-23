'use client';

import { deleteProduto } from "@/actions/gerenciamento/tabela-gerenciamento/actions";
import Link from "next/link";

export function EditButton({ id }: { id: number | undefined }) {
  return (
    <Link href={`/gerenciamento/tabela-gerenciamento/edit/${id}`}>
      <button className="font-medium text-indigo-600 hover:underline">
        Editar
      </button>
    </Link>
  );
}

export function DeleteButton({ id }: { id: number | undefined }) {
  return (
    <button onClick={() => deleteProduto(id)} className="font-medium text-red-600 hover:underline">
      Deletar
    </button>
  );
}

