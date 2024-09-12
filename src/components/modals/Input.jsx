function Input({
  type = "text",
  width = "384px",
  borderColor = "#808A93",
  borderRadius = "6px",
  required = true,
  name,
  accept,
  id,
}) {
  return (
    <div>
      <input
        required={required}
        name={name}
        style={{
          border: `1px solid ${borderColor}`,
          borderRadius: borderRadius,
          outline: "none",
          padding: "10px 14px",
          width: width,
        }}
        type={type}
        accept={accept}
        id={id}
      />
    </div>
  );
}

export default Input;
