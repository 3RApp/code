import {LoginForm} from "./LoginForm";

export const MainPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}