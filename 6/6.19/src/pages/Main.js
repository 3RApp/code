import {useState} from "react";
import { Form } from "react-router-dom";
import "./Main.css";

//  Main.js
export const Main = () => {
    
    const [name, setName] = useState('');

    return (<main>
        <Form method="post" action="result" state={{ name }}>
            <fieldset>
                <legend>Проверяем работу свойства state:</legend>
                    <label htmlFor="name">
                        Ваше имя:
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                    </label>                    
                    <input type="submit" value="Заказать" />
            </fieldset>
        </Form>
    </main>);
};