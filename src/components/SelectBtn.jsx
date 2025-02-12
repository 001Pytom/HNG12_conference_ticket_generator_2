function SelectBtn({ text, className, onClick, type }) {
  return (
    <button
      className={`border border-primary rounded-lg w-full md:max-w-[214px] py-3 px-6 font-jeju   ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default SelectBtn;
