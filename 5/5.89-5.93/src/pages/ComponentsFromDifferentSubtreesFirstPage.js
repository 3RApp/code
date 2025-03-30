import { ComponentsFromDifferentSubtreesFirst } from "../business";

export const ComponentsFromDifferentSubtreesFirstPage = () => {
    return (
        <div>
            <h1>Из разных поддеревьев 1</h1>
            <section className='container'>
                <p>
                    <h3>Мини инструкция</h3>
                    Измените текст и затем перейдите на страницу "Из разных поддеревьев 2", там будет тот текст, который вы ввели здесь.
                    Затем измените на той странице и перейдите на эту и вы увидите, что здесь будет текст, который вы ввели на странице "Из разных поддеревьев 2".
                </p>
                <ComponentsFromDifferentSubtreesFirst />
            </section>
        </div>
    );
}