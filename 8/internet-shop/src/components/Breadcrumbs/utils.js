export const enhanceBreadcrumbsList = (list) => 
    list.reduce((crumbs, crumb, index) => list.length -1 === index ? [...crumbs, crumb] : [...crumbs, crumb, { title: '›', to: null }], []);