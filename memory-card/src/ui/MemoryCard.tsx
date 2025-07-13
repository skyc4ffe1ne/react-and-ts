import { useEffect, useReducer } from "react";

const initialState = {
  pickedCard: [],

  cards: [
    {
      id: "red",
      find: false,
    },
    {
      id: "blue",
      find: false,
    },
    {
      id: "cyan",
      find: false,
    },
    {
      id: "green",
      find: false,
    },
    {
      id: "orange",
      find: false,
    },
    {
      id: "purple",
      find: false,
    },

    {
      id: "red",
      find: false,
    },
    {
      id: "blue",
      find: false,
    },
    {
      id: "cyan",
      find: false,
    },
    {
      id: "green",
      find: false,
    },
    {
      id: "orange",
      find: false,
    },
    {
      id: "purple",
      find: false,
    },
  ],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "PICKING":
      return {
        ...state,
        pickedCard: [...state.pickedCard, action.payload],
      };
    case "CHECK":
      return state.pickedCard[0] === state.pickedCard[1]
        ? {
          ...state,
          cards: state.cards.map((card) =>
            card.id === state.pickedCard[0] ? { ...card, find: true } : card,
          ),
          pickedCard: [],
        }
        : state;
    default:
      throw new Error("Action unknow");
  }
}

export default function MemoryCard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function() {
      if (state.pickedCard.length === 2) {
        dispatch({ type: "CHECK" });
      }
    },
    [state.pickedCard],
  );

  return (
    <div className="grid border border-red-400 w-full h-auto grid-cols-[_repeat(6,_minmax(0,96px))] gap-4">
      {state.cards.map((card, idx) =>
        card.find ? (
          ""
        ) : (
          <div
            className="size-24 rounded-xl"
            style={{ background: card.id }}
            key={idx}
            data-id={card.id}
            onClick={(e) => {
              dispatch({
                type: "PICKING",
                payload: e.target.getAttribute("data-id"),
              });
            }}
          ></div>
        ),
      )}
    </div>
  );
}
