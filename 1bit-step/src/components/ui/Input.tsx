interface InputProps {
  id: string;
  label: string;
  required?: boolean;
  type: "text" | "number";
  placeholder?: string;
  variant: "primary" | "secondary";
  isSelect: boolean;
  options?: { value: string; label: string }[];
}

export default function Input({
  id,
  label,
  required = false,
  type = "text",
  placeholder,
  variant = "primary",
  isSelect = false,
  options = [],
}: InputProps) {
  const s = {};

  return (
    <>
      <div className="">
        <label htmlFor={id}>{label}</label>
      </div>

      {isSelect ? (
        <select id={id} required={required}>
          {options.map(({ value, label }, idx) => (
            <option value={value} key={idx}>
              {label}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} required={required} placeholder={placeholder} />
      )}
    </>
  );
}
