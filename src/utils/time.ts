/* Функция для определения когда вышла новость вчера или сегодня,
 * в противном случае будет устанавливаться точная дата */

export const newFormatDateToday = (dateInput: Date) => {
  /* Сегодняшняя дата */
  const today = new Date();
  /* Установка вчерашней даты */
  const yesterday: any = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  /* Убедимся, что время не влияет на сравнение, сбросив часы, минуты, секунды и миллисекунды */
  today.setHours(0, 0, 0, 0);
  yesterday.setHours(0, 0, 0, 0);

  const inputDate = new Date(dateInput);
  let dateForOldBrowser = null;
  if (inputDate.toString() === 'Invalid Date') {
    dateForOldBrowser = new Date(dateInput.toString().replace(' ', 'T'));
    dateForOldBrowser.setHours(0, 0, 0, 0); // Игнорируем время для сравнения дат
  }
  inputDate.setHours(0, 0, 0, 0); // Игнорируем время для сравнения дат

  if (dateForOldBrowser && dateForOldBrowser.toString() === today.toString()) {
    return 'Сегодня';
  }
  if (dateForOldBrowser && dateForOldBrowser.toString() === yesterday.toString()) {
    return 'Вчера';
  }
  if (inputDate.toString() === today.toString()) {
    return 'Сегодня';
  }
  if (inputDate.toString() === yesterday.toString()) {
    return 'Вчера';
  }
  return null;
};

/* Функция для установки удобного отображения часов и минут на выпусках */
export const setHoursAndMinutes = (dateInput: Date) => {
  let date = new Date(dateInput);
  if (date.toString() === 'Invalid Date') {
    date = new Date(dateInput.toString().replace(' ', 'T'));
  }
  let hours: number | string = date.getHours();
  let minutes: number | string = date.getMinutes();

  if (hours <= 9) {
    hours = `0${hours}`;
  }

  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
};

export const toFormatDate = (date: Date): string | null => {
  if (!date) {
    return null;
  }

  const newDate = new Date(date.toString().replace(' ', 'T'));
  const today = newFormatDateToday(date);
  const time = setHoursAndMinutes(date);

  if (today) {
    return `${today} ${time}`;
  }

  // if (newDate.toString() === 'Invalid Date') {
  //   const parseDate = date.toString().split('-');
  //   const dateDay = parseDate[2][0] === '0' ? parseDate[2][1] : parseDate[2][0] + parseDate[2][1];
  //   return `${dateDay} ${months[parseDate[1]]} ${parseDate[0]}`;
  // }

  const options: Intl.DateTimeFormatOptions = {
    formatMatcher: 'best fit',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  return new Intl.DateTimeFormat('ru', options)?.format(newDate);
};
