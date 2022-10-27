import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Pagination({ setOffset, PRODUCT_FUUL, PRODUCT_LIMIT, neighbours }) {
  const [currents, setCurrents] = useState(1);
  const totalPage = Math.ceil(PRODUCT_FUUL / PRODUCT_LIMIT);
  const items = [];
  const end = Math.min(Math.max(neighbours * 2 + 2, neighbours + currents + 1), totalPage + 1);
  const start = Math.min(Math.max(end - (neighbours * 2 + 1), 1), Math.max(currents - neighbours, 1));
  console.log(totalPage + ' , ' + PRODUCT_FUUL);
  const previusPage = () => {
    if (currents > 1) {
      setCurrents(currents - 1);
      setOffset((currents - 2) * PRODUCT_LIMIT);
    }
  };

  const nextPage = () => {
    if (currents < totalPage) {
      setCurrents(currents + 1);
      setOffset(currents * PRODUCT_LIMIT);
    }
  };

  for (let i = start; i < end; i++) {
    items.push(
      <Link href="/dashboard" key={`Paginator-${i}`}>
        <button
          onClick={() => {
            setCurrents(i);
            setOffset((i - 1) * PRODUCT_LIMIT);
            console.log(i);
          }}
          aria-current="page"
          className={`${getClassActive(i)} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        >
          {i}
        </button>
      </Link>
    );
  }

  function getClassActive(i) {
    return i === currents ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50';
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{totalPage}</span> of <span className="font-medium">{PRODUCT_FUUL}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {currents >= 2 && (
              <Link href="/dashboard">
                <button
                  onClick={() => {
                    setCurrents(1);
                    setOffset(0);
                  }}
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  First
                </button>
              </Link>
            )}
            <Link href="/dashboard">
              <button
                onClick={() => {
                  previusPage();
                }}
                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
            {items}
            <Link href="dashboard">
              <button
                onClick={() => {
                  nextPage();
                }}
                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
            {currents <= 46 && (
              <Link href="/dashboard">
                <button
                  onClick={() => {
                    setCurrents(47);
                    setOffset(230);
                  }}
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Last
                </button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
