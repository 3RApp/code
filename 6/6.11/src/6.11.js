export async function loader({ request }) {

    const url = new URL(request.url);
    const searchName = url.searchParams.get("search");

    return searchName;
}