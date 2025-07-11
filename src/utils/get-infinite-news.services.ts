import { api } from '@/utils/api.services';

export const getInfiniteNewsServices = async (url: string, page = 1, size = 10) => {
  try {
    const newUrl = url.replace('?page=1', '');
    const { data } = await api.get(newUrl, {
      params: {
        page,
        size,
      },
    });
    return { data, error: null };
  } catch (error) {
    // throw new Error(`Ошибка при запросе к ${url}: ${error.message}`, {cause: error})
    return { data: null, error };
  }
};
