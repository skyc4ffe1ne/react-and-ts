import "./App.css";
import Store from "./components/Store.tsx";
import Cart from "./components/Cart.tsx";
import { useReducer } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type Action =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "INCREMENT"; id: number }
  | { type: "DECREMENT"; id: number }
  | { type: "REMOVE_ITEM"; id: number };

function cartReducer(state: CartItem[], action: Action) {
  switch (action.type) {
    case "ADD_ITEM":
      const checkProduct = state.filter(
        (product) => product.id === action.item.id,
      );
      if (checkProduct.length) {
        return state.map((el) =>
          el.id === action.item.id ? { ...el, quantity: el.quantity + 1 } : el,
        );
      } else {
        return [...state, action.item];
      }

    case "INCREMENT":
      return state.map((el) =>
        el.id === action.id ? { ...el, quantity: el.quantity + 1 } : el,
      );

    case "DECREMENT":
      return state
        .map((el) =>
          el.id === action.id ? { ...el, quantity: el.quantity - 1 } : el,
        )
        .filter((el) => el.quantity > 0);

    case "REMOVE_ITEM":
      return state.filter((el) => el.id !== action.id);

    default:
      throw new Error("Action Unknow!");
  }
}

function App() {
  const [cartItem, dispatch] = useReducer(cartReducer, []);
  return (
    <main className="flex">
      <Store dispatch={dispatch} />
      <Cart dispatch={dispatch} cartItem={cartItem} />
    </main>
  );
}

export default App;
