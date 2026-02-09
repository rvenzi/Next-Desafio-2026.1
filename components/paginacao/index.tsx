"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="flex items-center gap-2">

      <button
        onClick={previousPage}
        className="rounded-md py-2 hover:bg-gray-100"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`rounded-md border px-4 py-2 transition
              ${
                currentPage === page
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100"
              }
            `}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={nextPage}
        className="rounded-md py-2 hover:bg-gray-100"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
