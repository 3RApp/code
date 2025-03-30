import {createBrowserRouter} from "react-router-dom";
import {LayoutWithMenu, LayoutTechnical} from "./layout";
import {ErrorBoundary, Mathematics, Root} from "./pages";
import {
  Discipline,
  DisciplineIndex,
  DisciplineAttributes,
  DisciplineAttributesIndex,
  DescriptionLayout,
  OtherPageUseSameLayout,
} from "./business";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorBoundary />,
    },
    {
        path: "mathematics",
        element: <Mathematics />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <DisciplineIndex />,
            },
            {
                path: ":discipline",
                element: <Discipline />,

                children: [
                    {
                        index: true,
                        element: <DisciplineAttributesIndex />,
                    },
                    {
                        path: ":attribute",
                        element: <DisciplineAttributes />,
                        loader: async ({ params }) => {

                            return fetch(`/disciplines?name=${params.discipline}&attr=${params.attribute}`);
                        },
                        errorElement: <ErrorBoundary />,
                    }
                ]
            }
        ]
    },
    {
        path: "technical",
        element: <LayoutTechnical />,
        errorElement: <ErrorBoundary />,
    },
    {
        element: <LayoutWithMenu />,
        children: [
            {
                path: "descriptionlayout",
                element: <DescriptionLayout />,
            },
            {
                path: "otherpageusesamelayout",
                element: <OtherPageUseSameLayout />
            }
        ]
    }
]);