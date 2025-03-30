import { ComponentsFromDifferentSubtreesSecond } from "../business";

export const ComponentsFromDifferentSubtreesSecondPage = () => {
    return (
        <div>
            <h1>Из разных поддеревьев 2</h1>
            <section className='container'>
                <p>
                    <h3>Мини инструкция</h3>
                    Измените текст и затем перейдите на страницу "Из разных поддеревьев 1", там будет тот текст, который вы ввели здесь.
                    Затем измените на той странице и перейдите на эту и вы увидите, что здесь будет текст, который вы ввели на странице "Из разных поддеревьев 1".
                </p>
                <ComponentsFromDifferentSubtreesSecond />
            </section>
        </div>
    );
}