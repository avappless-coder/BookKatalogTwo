export type MockCatalogItem = {
  title: string;
  author: string;
  year: string;
  genres: string[];
  rating: string;
  votes: string;
  status: string;
};

export type MockActivity = {
  user: string;
  action: string;
  title: string;
  detail: string;
  time: string;
};

export type MockData = {
  stats: { label: string; value: string }[];
  catalog: MockCatalogItem[];
  activities: MockActivity[];
  achievements: { title: string; subtitle: string }[];
  tags: string[];
  profile: {
    handle: string;
    bio: string;
    stats: { label: string; value: string }[];
    lists: string[];
    readingNow: { title: string; progress: string }[];
  };
  clubs: string[];
};

export const mockData: MockData = {
  stats: [
    { label: "Произведений в базе", value: "0" },
    { label: "Активных читателей", value: "0" },
    { label: "Средняя оценка", value: "0" },
    { label: "Новых рецензий/день", value: "0" },
  ],
  catalog: [
    {
      title: "Море, что помнит имена",
      author: "Акира Хаяси",
      year: "0",
      genres: ["Фэнтези", "Драма"],
      rating: "0",
      votes: "0",
      status: "Выходит",
    },
    {
      title: "Северные архивы",
      author: "Ольга Кеннер",
      year: "0",
      genres: ["Научная фантастика", "Триллер"],
      rating: "0",
      votes: "0",
      status: "Завершено",
    },
    {
      title: "Небесная библиотека",
      author: "Джун Пак",
      year: "0",
      genres: ["Манхва", "Романтика"],
      rating: "0",
      votes: "0",
      status: "Выходит",
    },
    {
      title: "Клуб \"Тихий лист\"",
      author: "Лукас Мори",
      year: "0",
      genres: ["Комикс", "Мистика"],
      rating: "0",
      votes: "0",
      status: "Завершено",
    },
    {
      title: "Стеклянные горы",
      author: "Мари Нобл",
      year: "0",
      genres: ["Ранобэ", "Приключения"],
      rating: "0",
      votes: "0",
      status: "Завершено",
    },
    {
      title: "Параллельный дом",
      author: "Тэцу Игараси",
      year: "0",
      genres: ["Манга", "Сэйнэн"],
      rating: "0",
      votes: "0",
      status: "Выходит",
    },
  ],
  activities: [
    {
      user: "mizu_yo",
      action: "оставила отзыв",
      title: "Небесная библиотека",
      detail: "“Редкая история, где романтика не мешает миру.”",
      time: "0 минут назад",
    },
    {
      user: "kira.reads",
      action: "завершил",
      title: "Северные архивы",
      detail: "Прогресс: 0% · Оценка 0/10",
      time: "0 минут назад",
    },
    {
      user: "shaolin.pages",
      action: "добавил в план",
      title: "Море, что помнит имена",
      detail: "Список: “Лето 0”",
      time: "0 минут назад",
    },
  ],
  achievements: [
    { title: "0 книг", subtitle: "прочитано за год" },
    { title: "0 дней подряд", subtitle: "без пропусков" },
    { title: "0 жанров", subtitle: "коллекция" },
  ],
  tags: [
    "Cozy mystery",
    "Киберпанк",
    "Историческая драма",
    "Романтика",
    "Экшен",
    "Психология",
  ],
  profile: {
    handle: "@nora.reads",
    bio: "Люблю атмосферные фэнтези и редкие манхвы.",
    stats: [
      ["Прочитано", "0"],
      ["Планирую", "0"],
      ["Средняя оценка", "0"],
      ["Любимый жанр", "—"],
    ].map(([label, value]) => ({ label, value })),
    lists: ["Любимое", "На лето", "Тёмные сказки", "Короткие истории"],
    readingNow: [
      { title: "Параллельный дом", progress: "0%" },
      { title: "Небесная библиотека", progress: "0%" },
      { title: "Стеклянные горы", progress: "0%" },
    ],
  },
  clubs: ["Скандинавский нуар", "Манхва недели", "Уютные фэнтези"],
};
