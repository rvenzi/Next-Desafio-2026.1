import { getIdentities } from "@/src/lib/api/get-mvv";

export default async function getMvv() {
  try {
    const data = await getIdentities();

    if (!data || data.length === 0) {
      return <p>Nenhum item encontrado.</p>;
    }

    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    console.error(`Erro fetching identities`, error);
    return <p>Erro ao carregar dados.</p>;
  }
}