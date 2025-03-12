function RatingInput({ onChange, name }) {
  return (
    <select className="rounded border" name={name} onChange={onChange}>
      <option value="">All</option>
      <option value="">0 - 49</option>
      <option value="">50 - 69</option>
      <option value="">70 - 100</option>
    </select>
  );
}

export default RatingInput;
