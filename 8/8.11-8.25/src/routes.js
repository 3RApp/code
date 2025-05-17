import { createBrowserRouter } from 'react-router-dom';
import { Authentication } from './layout';
import { ShedulePage } from './pages';
import { SheduleItemDetails } from './business';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Authentication />,
        children: [{
            path:'shedule',
            element: <ShedulePage />,
            children: [{
                index: true,
                element: <div>Forma</div>,
            }, {
                path: ':sheduleId',
                element: <SheduleItemDetails />
            }]
        }, {
            path: 'candidate',
            element: <div>CandidatePage</div>,
            children: [{
                path: ':candidateCVId',
                element: <div>CandidateDetails</div>
            }]
        }]
    }
]);
