// Этот простой конечный компонент является дочерним компонентом для бизнес-компонент ParentChild. 
// Он расположен src\business\ChildParentVariant1.js

export const B = ({ onChange, text }) => {

    return <input type='text' value={text} onChange={onChange} />;
};