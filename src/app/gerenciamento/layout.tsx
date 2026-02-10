import Sidebar from "@/components/sidebar";

export default function GerenciamentoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}