import DashboardPage from "@/components/dashboard/dashboard-page";
import DashboardTitle from "@/components/dashboard/dashboard-title";

export default function Page() {
    return (
        <div className="flex flex-col gap-10 sm:pl-80 p-5">
            <DashboardTitle title="Dashboard" description="Gerenciamento de produtos e categorias" />
            <DashboardPage />
        </div>
    )
}