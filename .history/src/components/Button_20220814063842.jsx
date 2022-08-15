export const Button = ({ variant = null, children, props }) => {
  return (
    <div>
      <button
        className={`${
          variant === "primary"
            ? "bg-teal-600 hover:bg-teal-500"
            : variant === "danger"
            ? "bg-red-500 hover:bg-red-400"
            : "bg-gray-300 hover:bg-gray-200"
        } ${
          variant === null ? "text-black" : "text-white"
        } py-[.4rem] px-[.8rem] lg:px-[1.3rem] lg:py-[.4rem] font-[500] rounded-[6px] lg:rounded-[6px] hover:transition-all hover:ease-in ease-out duration-[.3s]`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
