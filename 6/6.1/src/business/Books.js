import { Cart } from "./Cart";
export const Books = ({ className }) => {
    return (
        <div className={className}>
            <h1>Books</h1>
            <Cart />
        </div>
  );
}