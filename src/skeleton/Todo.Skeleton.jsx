export const TodoSkeleton = () => {
  const todos = new Array(30).fill(0);
  return (
    <div className="my-10 grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {todos.map((todo, ind) => {
        return (
          <div
            className="px-4 py-2 rounded-xl  h-20 bg-gray-300 animate-pulse"
            key={ind}
          ></div>
        );
      })}
    </div>
  );
};
