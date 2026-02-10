type DashboardTitleProps = {
    title: string
    description: string
}

export default function DashboardTitle({ title, description }: DashboardTitleProps) {
    return (
        <div>
            <h1 className="text-2xl font-bold text-black">{title}</h1>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    )
}