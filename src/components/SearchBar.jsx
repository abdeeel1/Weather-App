const SearchBar = ({ city, setCity, onSearch }) => {

  const HandleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div
      className="container p-4 shadow-lg"
      style={{
        maxWidth: "430px",
        background: "white",
        borderRadius: "18px",
      }}
    >
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter city name..."
        value={city}
        onChange={HandleChange}
        style={{
          borderRadius: "12px",
          padding: "14px",
        }}
      />

      <button
        onClick={onSearch}
        className="btn btn-primary w-100 btn-lg mt-3"
        style={{
          borderRadius: "12px",
          padding: "10px",
          fontSize: "1.1rem",
          fontWeight: "600",
        }}
      >
        Search 🔍
      </button>
    </div>
  );
};

export default SearchBar;
