export const Button = ({variant, children}) => {
  return (
    <div>           
      <button className={`${variant === 'primary' ? 'bg-blue-600' : variant=== 'danger' ? 'bg-red-300'} text-white p-[] lg:px-[1rem] lg:py-[.7rem] font-[500] rounded-[] lg:rounded-[8px]`}>{children}</button>
    </div>
  )
}