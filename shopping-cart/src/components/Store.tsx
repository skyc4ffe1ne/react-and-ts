const products = [
  {
    id: 0,
    name: "Book",
    price: 10.39,
  },
  {
    id: 1,
    name: "Food",
    price: 21.23,
  },
  {
    id: 2,
    name: "Kitchen",
    price: 400.99,
  },
  {
    id: 3,
    name: "Pencil",
    price: 1.2,
  },
  {
    id: 4,
    name: "Skateboard",
    price: 13.33,
  },
  {
    id: 5,
    name: "Coffee",
    price: 0.8,
  },
];
export default function Store({ dispatch }) {
  return (
    <div className="grid grid-cols-2 w-3/4">
      {products.map(({ id, name, price }, idx) => (
        <div className="border border-black py-2 px-4" key={idx}>
          <h2 className="text-4xl tracking-tight"> {name} </h2>
          <p className="text-xl text-black pt-4"> {price}$ </p>
          <button
            className="bg-black text-white px-3 py-1 font-medium text-sm/5 rounded mt-2 cursor-pointer"
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                item: { id, name, price, quantity: 1 },
              })
            }
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
