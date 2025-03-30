import { Cart } from "./Cart";
export const Order = ({ className }) => {
    return (
        <div className={className}>
            <h1>Order</h1>
            <Cart />
        </div>
  );
}