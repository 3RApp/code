export function loader({ request, params }) {

    return fetch("/books", {
      signal: request.signal,
      method: "post",
      body: JSON.stringify({
        params: params,
      }),
    });
  }