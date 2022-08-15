export const Button = ({ variant=null, children, props }) => {
  return (
    <div>
      <button
        className={`${
          variant === "primary"
            ? "bg-teal-600 hover:bg-teal-"
            : variant === "danger"
            ? "bg-red-300"
            : "bg-gray-300"
        } ${variant === null ? 'text-black' : 'text-white'} p-[] lg:px-[1rem] lg:py-[.7rem] font-[500] rounded-[] lg:rounded-[8px]`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
