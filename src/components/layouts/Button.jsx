const Button = (props) => {
  const { showMenuHandler, children, className } = props;

  return (
    <button onClick={showMenuHandler} className={`flex gap-[11px] ${className}`}>
      <span
        className="material-symbols-outlined cursor-pointer"
      >
        search
      </span>
      {children}
    </button>
  );
};

export default Button;
