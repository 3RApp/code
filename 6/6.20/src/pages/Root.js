import { Fragment } from "react";
import { Header } from "../components";

export const Root = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <h1>Эта страница не содержит никакого лэйаута</h1>
                <section>
                    <p>
                        Но выбрав любой другой раздел в верху, в панели навигации, вы сможете просмотреть страницы содержащие разные виды лэйаутов. 
                    </p>
                </section>
            </main>
        </Fragment>
    );
}