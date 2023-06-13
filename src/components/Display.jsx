

export default function Display ({ options }) {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <ul>
        {options.map((option, index) => (
          <li key={index} className="mb-2 py-2 px-4 bg-white rounded cursor-pointer hover:bg-gray-300">
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
