export const TodoFilters = ({ filter, setFilter }) => {
  return (
    <div>
      <select
        className="border border-gray-500 rounded-md px-4 py-1 cursor-pointer"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>

        <option value="pending">Pending</option>
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};
