const Button = (props) => {
  const { showMenuHandler, children } = props;

  return (
    <button onClick={showMenuHandler} className="flex gap-[11px]">
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
