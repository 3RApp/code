import { createBrowserRouter } from "react-router-dom";
import {Layout} from './layout';
import {
    ParentChildPage, 
    ChildParentPage,
    AncestorDescendantPage,
    DescendantAncestorPage,
    ComponentsFromDifferentSubtreesFirstPage,
    ComponentsFromDifferentSubtreesSecondPage,
} from './pages';

export const routes = createBrowserRouter([
    { 
        path: "/", 
        element: <Layout />,
        children: [{
            index: true,
            element: <ParentChildPage />,
        }, {
            path: 'child-parent',
            element: <ChildParentPage />,
        }, {
            path: "ancestor-descendant",
            element: <AncestorDescendantPage />,
        }, {
            path: "descendant-ancestor",
            element: <DescendantAncestorPage />,
        }, {
            path: "from-different-subtrees-one",
            element: <ComponentsFromDifferentSubtreesFirstPage />,
        }, {
            path: "from-different-subtrees-two",
            element: <ComponentsFromDifferentSubtreesSecondPage />,
        }]
    },
]);