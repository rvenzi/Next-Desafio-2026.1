import DashboardTitle from "@/components/dashboard/dashboard-title";
import MenageTable from "@/components/table/menage";

export default function Page() {
    return (
        <div className="flex flex-col gap-10">
            <div className="sm:ml-87 mt-10">
                <DashboardTitle title="Tabela de Gerenciamento" description="Gerenciamento de produtos e categorias" />
            </div>
            <div className="flex flex-col items-center">
                <MenageTable />
            </div>
        </div>
    )
}