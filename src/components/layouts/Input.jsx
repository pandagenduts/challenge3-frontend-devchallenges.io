const Input = (props) => {
  const { type, placeholder, value, readOnly, className, actionOnClick, name } = props;

// name & id

  return (
    <input
      type={type ? type : 'text'}
      name={name}
      id={name}
      value={value ? value : ''}
      placeholder={placeholder ? placeholder : ''}
      readOnly={readOnly ? readOnly : false}
      className={className}
      onClick={actionOnClick}
      
    />
  );
};

export default Input;
