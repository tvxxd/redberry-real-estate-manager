function Input({
  type = "text",
  width = "24rem",
  borderColor = "#808A93",
  borderRadius = "6px",
  required = true,
  name,
  accept,
  id,
  disabled = false,
  minChar,
  value,
  onChange,
  maxLength,
}) {
  return (
    <div>
      <input
        maxLength={maxLength}
        onChange={onChange}
        value={value}
        required={required}
        disabled={disabled}
        minLength={minChar}
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
