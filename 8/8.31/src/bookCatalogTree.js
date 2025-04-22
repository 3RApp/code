export const bookCatalogTree = {
  id: 'root',
  value: 'Каталог книг',
  category: 'Все книги',
  hierarchy: '0',
  children: [
    // Уровень 1
    {
      id: 'scifi',
      value: 'Научная фантастика',
      category: 'Жанры литературы',
      hierarchy: '1',
      hierarchyOrder: '1-1',
      children: [
        // Уровень 2
        { id: 'dune', value: 'Дюна', category: 'Книги Фрэнка Герберта', hierarchy: '2', hierarchyOrder: '2-1' },
        { id: 'hyperion', value: 'Гиперион', category: 'Книги Дэна Симмонса', hierarchy: '2', hierarchyOrder: '2-2' },
        { id: 'martian', value: 'Марсианин', category: 'Книги Энди Вейра', hierarchy: '2', hierarchyOrder: '2-3' }
      ]
    },
    {
      id: 'fantasy',
      value: 'Фэнтези',
      category: 'Жанры литературы',
      hierarchy: '1',
      hierarchyOrder: '1-2',
      children: [
        // Уровень 2
        { id: 'got', value: 'Игра престолов', category: 'Книги Джорджа Мартина', hierarchy: '2',  hierarchyOrder: '2-1' },
        { id: 'lor', value: 'Властелин колец', category: 'Книги Дж.Р.Р Толкина', hierarchy: '2',  hierarchyOrder: '2-2' },
        { id: 'narnia', value: 'Хроники Нарнии', category: 'Книги К.С Льюиса', hierarchy: '2',  hierarchyOrder: '2-3' }
      ]
    },
    {
      id: 'classics',
      value: 'Классическая литература',
      category: 'Жанры литературы',
      hierarchy: '1',
      hierarchyOrder: '1-3',
      children: [
        // Уровень 2
        { id: 'warpeace', value: 'Война и мир', category: 'Русская классика', hierarchy: '2',  hierarchyOrder: '2-1' },
        { id: 'crimepunishment', value: 'Преступление и наказание', category: 'Русская классика', hierarchy: '2',  hierarchyOrder: '2-2' },
        { id: 'annakarina', value: 'Анна Каренина', category: 'Русская классика', hierarchy: '2',  hierarchyOrder: '2-3' },
        { id: 'onegin', value: 'Евгений Онегин', category: 'Русская классика', hierarchy: '2',  hierarchyOrder: '2-4' }
      ]
    },
    {
      id: 'detective',
      value: 'Детективы',
      category: 'Жанры литературы',
      hierarchy: '1',
      hierarchyOrder: '1-4',
      children: [
        // Уровень 2
        { id: 'eastexpress', value: 'Убийство в Восточном экспрессе', category: 'Агата Кристи', hierarchy: '2',  hierarchyOrder: '2-1' },
        { id: 'dragon', value: 'Девушка с татуировкой дракона', category: 'Стиг Ларссон', hierarchy: '2',  hierarchyOrder: '2-2' },
        { id: 'sherlock', value: 'Шерлок Холмс', category: 'Артур Конан Дойл', hierarchy: '2',  hierarchyOrder: '2-2' }
      ]
    }
  ]
};