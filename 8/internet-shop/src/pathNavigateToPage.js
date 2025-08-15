export const pathNavigateToPage = {
    search: (name, search) => `/search?${name}=${search}`,
    orderForm: '/order-form',
    subcategory: (categoryId, newSubcategoryId) => `/catalog/${categoryId}/${newSubcategoryId}`,
    confirmation: '/confirmation',
};