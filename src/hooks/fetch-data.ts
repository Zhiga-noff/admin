'use client';

import { useState } from 'react';
import { getInfiniteNewsServices } from '@/utils/get-infinite-news.services';

export const useFetchData = (urlApi: string) => {
  /* Объект содержащий в себе новые выпуски, номер страницы для загрузки
   * и прошлую загруженную информацию для проверки на дублирование */
  const [dataFetch, setDataFetch] = useState({
    items: [],
    currentPage: 1,
    lastFetchedItemID: '',
  });
  /* деструктурировал для удобного использования переменных */
  const { items, currentPage } = dataFetch;

  /* Индикатор для загрузки следущийх постов, используется за пределами хука */
  const [hasMore, setHasMore] = useState(true);
  /* Ошибка при загрузке постов */
  const [fetchError, setFetchError] = useState(false);

  /* Функция подгрузки новых постов */
  const nextPage = async () => {
    /* Переменная для отслеживания повторных загрузок */
    let duplicateFetchCount = 0;

    /* Функция подгрузки новых постов */
    const { data: newItems, error } = await getInfiniteNewsServices(urlApi, currentPage, 10);

    const lastNewItemID = newItems[0]?.id;

    if (!newItems[0]?.id) {
      setHasMore(false);
    } else {
      // @ts-ignore
      setDataFetch((prev) => {
        /* Если url предыдущей загрузки совпадает с нынешней в таком случае
         * код возрващает предыдущий результат не дающий дублировать информацию */
        if (!newItems || prev.lastFetchedItemID === lastNewItemID) {
          duplicateFetchCount = duplicateFetchCount + 1;
          return {
            ...prev,
          };
        }
        /* Обнуляю переменную по отслеживанию загрузок
         * обновляю массив с информацией*/
        duplicateFetchCount = 0;
        return {
          ...prev,
          // @ts-ignore
          items: [...prev.items, ...newItems],
          currentPage: prev.currentPage + 1,
          lastFetchedItemUrl: lastNewItemID,
        };
      });
    }

    /* Если дублей много запрещаю загрузку */
    if (duplicateFetchCount >= 2) {
      setHasMore(false);
    }

    /* Если массив пуст возвращаю ошибку*/
    if (items.length === 0 || !items) {
      setFetchError(true);
    }
    setFetchError(!!error);
  };

  return { items, nextPage, hasMore, fetchError };
};
