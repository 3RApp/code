export const fromFormDatatoJSON = (formDataBody) => {
    const body = {};
    for (const [field, value] of formDataBody) {
        body[field] = value;
    }

    return JSON.stringify(body);
}