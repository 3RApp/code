export function loader({ request, params }) {
    const data = [{
        author: "Айзек Азимов",
        title: "Академия. Основание",
        bookId: "3f9a1c5b824d6e7acdfb9e2772a8de04",
        year: 1951,
        price: 900,
        description: "В течение двенадцати тысяч лет Галактическая Империя правила безраздельно. Теперь она умирает. Но только Гэри Сэлдон, создатель революционной науки \«психоистория\», может заглянуть в будущее – в темный век невежества, варварства и войн, который продлится тридцать тысяч лет"
    }];
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json; utf-8",
      },
    });
  }