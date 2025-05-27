import { StackDivider, VStack } from "@chakra-ui/react";

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
    <VStack divider={<StackDivider />}
    borderColor="black.100"
    borderRadius="3px"
    borderWidth="1px">
      {todoItems}
    </VStack>
  );
};

export default List;
