import { useLocation } from "react-router-dom";

//  Result.js
export const Result = () => {
    const {state} = useLocation();
    const {name} = state;

    return (<main>
        {name}
    </main>);
}