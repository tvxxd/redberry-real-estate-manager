function Shape() {
  return (
    <button style={{ border: "none", cursor: "pointer", background: "none" }}>
      <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
      >
        <path
          d="M1.91247 0.337847C1.68466 0.110041 1.31532 0.110041 1.08751 0.337847C0.859705 0.565652 0.859705 0.934999 1.08751 1.1628L4.58751 4.6628C4.81532 4.89061 5.18466 4.89061 5.41247 4.6628L8.91247 1.1628C9.14028 0.934999 9.14028 0.565652 8.91247 0.337847C8.68466 0.110041 8.31532 0.110041 8.08751 0.337847L4.99999 3.42537L1.91247 0.337847Z"
          fill="#021526"
        />
      </svg>
    </button>
  );
}

export default Shape;
