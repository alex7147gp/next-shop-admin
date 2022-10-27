const people = [
  {
    title: 'Jane Cooper',
    category: {
      name: 'Regional Paradigm Technician',
      id: 'Optimization',
    },
    price: 'Admin',
    id: 'jane.cooper@example.com',
    images: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    ],
  },
];

import React, { useState } from 'react';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { CharT } from '@common/Chart';
import Pagination from '@components/pagination';

export default function Dashboard() {
  const [offset, setOffset] = useState(0);

  const PRODUCT_LIMIT = 5;
  const PRODUCT_OFFSET = offset;
  const PRODUCT_FULL = useFetch(endPoints.product.getProducts(0, 0));
  const products = useFetch(endPoints.product.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));
  const categoryName = products?.map((product) => product.category);
  const categoryCount = categoryName?.map((category) => category.name);
  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  const PRODUCT_FUUL = PRODUCT_FULL.length;

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <CharT className="mb-8 mt-2" chartData={data} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {(products.lenght == 0 ? people : products).map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.title}</div>
                            <div className="text-sm text-gray-500">{product.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.category.name}</div>
                        <div className="text-sm text-gray-500">{product.category.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination offset={offset} setOffset={setOffset} PRODUCT_FUUL={PRODUCT_FUUL} PRODUCT_LIMIT={PRODUCT_LIMIT} PRODUCT_OFFSET={PRODUCT_OFFSET} neighbours={2} />
      </div>
    </>
  );
}
