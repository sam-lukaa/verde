export const Button = ({ variant=null, children, props }) => {
  return (
    <div>
      <button
        className={`${
          variant === "primary"
            ? "bg-teal-600 hover:bg-teal-500"
            : variant === "danger"
            ? "bg-red-500 hover:bg-red-400 hover:transition-all hover:ease"
            : "bg-gray-300 hover:bg-gray-200"
        } ${variant === null ? 'text-black' : 'text-white'} p-[] lg:px-[1rem] lg:py-[.7rem] font-[500] rounded-[] lg:rounded-[8px]`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
