import useCount from "./hooks/useCount";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="count-container">
        <div>
          <button className="decrement" onClick={decrement}>
            -
          </button>
          <span>{count}</span>
          <button className="increment" onClick={increment}>
            +
          </button>
        </div>
        <button className="add-To-Cart" onClick={() => onAdd(count)}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;
