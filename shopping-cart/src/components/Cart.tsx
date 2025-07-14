import type { CartItem, Action } from "../App.tsx";

export default function Cart({
  dispatch,
  cartItem,
}: {
  dispatch: React.Dispatch<Action>;
  cartItem: CartItem[];
}) {
  const totalItem = cartItem.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItem.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  return (
    <div className="w-1/4 h-screen">
      <header className="border-b border-black pb-4 pt-2 h-1/12">
        <h2 className="text-center text-3xl text-black font-medium">
          Your cart{" "}
        </h2>
      </header>
      <div className="h-9/12">
        {cartItem.length ? (
          cartItem.map(({ id, name, price, quantity }, idx) => (
            <div className="" key={idx}>
              <h3>{name} </h3>
              <p>{price}$ </p>
              <p> Quantity {quantity}</p>

              <div className="flex gap-2 pt-1">
                <button
                  className="px-3 py-1 bg-green-200 text-green-400 text-sm/5 font-bold rounded"
                  onClick={() => dispatch({ type: "INCREMENT", id })}
                >
                  Add
                </button>
                <button
                  className=" px-3 py-1 bg-yellow-100 text-yellow-400 text-sm/5 font-bold rounded"
                  onClick={() => dispatch({ type: "DECREMENT", id })}
                >
                  Decrement
                </button>
                <button
                  className="px-3 py-1 bg-red-200 text-red-400 text-sm/5 font-bold rounded"
                  onClick={() => dispatch({ type: "REMOVE_ITEM", id })}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-full w-full justify-center items-center">
            <h3 className="text-center text-2xl text-gray-400 tracking-tight font-semibold uppercase">
              Your cart is empty
            </h3>
          </div>
        )}
      </div>
      <footer className="border-t border-black pb-4 pt-2 h-2/12">
        <h2 className="text-center text-3xl text-black font-medium">
          Checkout
        </h2>
        <p> Total items: {totalItem} </p>
        <p> Total price: {totalPrice.toFixed(2)} </p>
      </footer>
    </div>
  );
}
