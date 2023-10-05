const Input = (props) => {
  const { type, placeholder, value, readOnly, className, actionOnClick } = props;

  return (
    <input
      type={type ? type : 'text'}
      value={value ? value : ''}
      placeholder={placeholder ? placeholder : ''}
      readOnly={readOnly ? readOnly : false}
      className={className}
      onClick={actionOnClick}
    />
  );
};

export default Input;
