const Button = (props) => {
  const { showMenuHandler, children, className } = props;

  return (
    <button
      onClick={showMenuHandler}
      className={`flex gap-[11px] bg-[#EA6565] text-white py-[15px] px-6 rounded-2xl cursor-pointer ${className}`}
    >
      <span className="material-symbols-outlined">search</span>
      {children}
    </button>
  );
};

export default Button;
