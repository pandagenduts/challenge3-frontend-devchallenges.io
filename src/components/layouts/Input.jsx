const Input = (props) => {
  const { type, placeholder, readOnly, className, actionOnClick, actionOnChange, value, name } = props;

// name & id

  return (
    <input
      type={type ? type : 'text'}
      name={name}
      id={name}
      value={value}
      placeholder={placeholder ? placeholder : ''}
      readOnly={readOnly ? readOnly : false}
      className={`outline-none ${className}`}
      onClick={actionOnClick}
      onChange={actionOnChange}
    />
  );
};

export default Input;
