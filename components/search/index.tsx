'use client';
import { Search as SearchIcon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {

    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = (query: string) => {
        if (!query) {
            return
    }

    const params = new URLSearchParams()
    params.set('query', query)
    router.push(`/search/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-12 mt-10 mb-20">
            <div className="w-full flex justify-center">
                <div className="w-10/20 h-12 border border-black flex items-center px-4 gap-3">
                    <SearchIcon className="text-black" />
                        <input 
                        type="text" 
                        placeholder="Buscar produtos..." 
                        className="w-full h-full outline-none"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </form>
    )
}