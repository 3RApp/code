import "./css/Description.css";

export const Description = ({text, children}) => (<section className="description">
    <p className="description-text">
    {text}
    </p>
    <p className="description-children">
    {children}
    </p>
</section>);