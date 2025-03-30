export async function loader({ request, params }) {
    // Заранее известно, что такого пути не существует, так как запрос к книгам начинается с '/books'
    const res = await fetch(`/api/books/${params.bookId}`);
    if (res.status === 404) {
      throw new Response("Not Found", { status: 404 });
    }
    return res.json();
}