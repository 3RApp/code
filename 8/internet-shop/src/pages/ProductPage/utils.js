import { extractTitle } from "../utils";

export const createBreadcrumbsList = (data = {
    categoryId: "",
    categoryData: [],
    subcategoryId: "",
    subcategoryData: []
}) => {

    const { categoryId, categoryData, subcategoryId, subcategoryData } = data;

    return [
        {
            title: "Главная", to: "/"
        },
        {
            title: extractTitle(categoryData, categoryId), to: `/catalog/${categoryId}`
        },
        {
            title: extractTitle(subcategoryData, subcategoryId), to: `/catalog/${categoryId}/${subcategoryId}`
        }
    ];
};