import { fetchFilteredProdutos } from "@/actions/search/actions";
import SearchPage from "@/components/search-page";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  }
}
) {

  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

  const {produtos, count, totalPages} = await fetchFilteredProdutos(query, currentPage)

  return (
    <div>
      <SearchPage produtos={produtos} count={count} totalPages={totalPages} />
    </div>
  );
}