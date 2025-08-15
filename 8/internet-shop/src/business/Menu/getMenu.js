export const getMenu = (categories, categoryId, subcategories, subcategoryId) => {
    return categories.reduce((menu, category) => {
        const { uid } = category;

        const current = uid === categoryId;

        if (current && subcategories) {
            return [
                ...menu, 
                {...category, current }, 
                ...subcategories.map(subcategory => ({...subcategory, current: subcategory.uid === subcategoryId, isSubcategory: true }))
            ];
        }

        return [...menu, {...category, current }];
    }, []);
};