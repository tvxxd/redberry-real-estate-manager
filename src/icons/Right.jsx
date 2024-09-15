function Right(props) {
  const { className, style, onClick } = props;

  return (
    <svg
      className={className}
      style={{ ...style, cursor: "pointer" }}
      onClick={onClick}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1161 5.36612C14.6043 4.87796 15.3957 4.87796 15.8839 5.36612L24.6339 14.1161C25.122 14.6043 25.122 15.3957 24.6339 15.8839L15.8839 24.6339C15.3957 25.122 14.6043 25.122 14.1161 24.6339C13.628 24.1457 13.628 23.3543 14.1161 22.8661L20.7322 16.25H6.25C5.55964 16.25 5 15.6904 5 15C5 14.3096 5.55964 13.75 6.25 13.75H20.7322L14.1161 7.13388C13.628 6.64573 13.628 5.85427 14.1161 5.36612Z"
        fill="#021526"
      />
    </svg>
  );
}

export default Right;
