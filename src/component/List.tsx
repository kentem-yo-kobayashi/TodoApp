const List = ({
  todos,
  doneFn,
}: {
  todos: string[];
  doneFn: (v: number) => void;
}) => {
  const todoItems = todos.map((todo, index) => {
    return (
      <div key={todo} className="container">
        <button onClick={() => doneFn(index)}>完了</button>
        <p>{todo}</p>
      </div>
    );
  });

  return (
    <>
      {todoItems}
    </>
  );
};

export default List;
