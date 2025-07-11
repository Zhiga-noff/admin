'use client';

import { usePathname } from 'next/navigation';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';
import { GET_TRANSCRIBATION } from '@/constant/api';
import { useFetchData } from '@/hooks/fetch-data';
import RowOfListComponent from '@/components/list/row-of-list/RowOfListComponent';
import { ListTypes } from '@/types/list.types';
import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react';

export default function ListComponent() {
  const { items: data, nextPage: loadMore, hasMore, fetchError } = useFetchData(GET_TRANSCRIBATION);
  const [loading, setLoading] = useState(false);
  const path = usePathname();
  const flag = path === '/';

  // useState(() => {
  //   if (data.length !== 0) {
  //     setLoading(false);
  //   }
  // }, [hasMore]);

  //
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Recent Orders</h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        {/* @ts-ignore */}
        <InfiniteScroll
          threshold={450} // Расстояние до конца последнего элемента на котором начнется загрузка след компонентов
          pageStart={1} // страница с которой происходит загрузка
          hasMore={hasMore} // Флаг разрешающий загрузку
          loadMore={loadMore} // Функция загрузки новых компанентов
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          <Table>
            {/* Table Header */}
            <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
              <TableRow>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Название
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  ⠀
                </TableCell>
                {flag && (
                  <TableCell
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Операция
                  </TableCell>
                )}
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Статус
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Дата добавления и обновления
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Скачать
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {data.map((file: ListTypes) => {
                return <RowOfListComponent file={file as ListTypes} flag={flag} key={file?.id as number} />;
              })}
            </TableBody>
          </Table>
        </InfiniteScroll>
      </div>
    </div>
  );
}
