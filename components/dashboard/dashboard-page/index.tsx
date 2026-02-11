import DashboardCard from "../dashboard-card";

export default function DashboardPage() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 w-full">
                <DashboardCard title="Pagina inicial" href="/" description="Volte para a página inicial de nosso site." />
                <DashboardCard title="Tabela de gerenciamento" href="/gerenciamento/tabela-gerenciamento" description="Gerencie os produtos." />
                <DashboardCard title="Sair" href="/" description="Sair da sua conta." />
            </div>
        </div>
    )
}