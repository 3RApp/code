export function arePropsEquals(oldProps, newProps){
    //... 
    console.log("oldProps", oldProps);
    console.log("newProps", newProps);
    return oldProps.alwaysChangeInParent === newProps.alwaysChangeInParent;
}