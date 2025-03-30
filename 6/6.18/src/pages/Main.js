import { Form, useActionData, useLoaderData } from "react-router-dom";
import "./Main.css";

export const Main = () => {
    const {products, orders} = useLoaderData();
    const action = useActionData();

    if (action) {
        console.log('action', action);
    }

    return (<main>
        <Form method="post">
            <fieldset>
                <legend>Заказать товар:</legend>
                    <label htmlFor="name">
                        Ваше имя:
                        <input type="text" name="name" />
                    </label>
                    <label htmlFor="amount">
                        Количество:
                        <input type="number" name="amount" />
                    </label>
                    <label htmlFor="product">
                        Выбрать товар:
                        <select name="productId">
                            {
                                products.map(product => <option 
                                    key={product.id} 
                                    disabled={!product.in_stock} 
                                    value={product.id}>
                                        {`${product.title} (${product.media_type}) - ${product.price} руб.`}
                                    </option>)
                            }
                        </select>
                    </label>
                    <label htmlFor="comment">
                        Комментарий к заказу:
                    </label>
                    <textarea name="comment"></textarea>
                    <input type="submit" value="Заказать" />
            </fieldset>
        </Form>
        {
            orders.length > 0 && <Form method="delete">
                <fieldset>
                    <legend>Удалить заказ</legend>
                    <label htmlFor="orderId">
                        Выбрать заказ: 
                        <select name="orderId">
                            {
                                orders.map(order => {

                                    const {id, productId, name, amount} = order;

                                    const product = products.find(product => product.id === Number(productId));

                                    if (!product) {
                                        return <></>;
                                    }

                                    return <option key={id} value={id}>
                                        {`Заказал: ${name} (${product.title}) - ${amount} шт.`}
                                    </option>
                                })
                            }
                        </select>
                    </label>
                    <input type="submit" value="Удалить заказ" />
                </fieldset>
            </Form>
        }
        {
            orders.length > 0 && <Form method="patch">
                <fieldset>
                    <legend>Изменить информацию о заказе:</legend>
                    <label htmlFor="orderId">
                        1. Выберите изменяемый заказ:
                        <select name="orderId">
                            {
                                orders.map(order => {

                                    const {id, productId, name, amount} = order;

                                    const product = products.find(product => product.id === Number(productId));

                                    if (!product) {
                                        return <></>;
                                    }

                                    return <option key={id} value={id}>
                                        {`Заказал: ${name} (${product.title}) - ${amount} шт.`}
                                    </option>
                                })
                            }
                        </select>
                    </label>
                    <label>2. Внесите необходимые изменения:</label>
                    <label htmlFor="name">
                        Ваше имя:
                        <input type="text" name="name" />
                    </label>
                    <label htmlFor="amount">
                        Количество:
                        <input type="number" name="amount" />
                    </label>
                    <label htmlFor="comment">
                        Комментарий к заказу:
                    </label>
                    <textarea name="comment"></textarea>
                    <input type="submit" value="Изменить описание" />
                </fieldset>
            </Form>
        }
    </main>);
};