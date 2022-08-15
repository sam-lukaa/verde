import { Button } from "../components";

export const Post = () => {
  return (
    <section className="bg-white my-[] lg:my-[2rem] py-[] lg:py-[2.5rem]">
      {/* card */}
      <article className="flex flex-col gap-[] lg:gap-[2rem] w-[75%] m-auto">
        {/* card title */}
        <header className="font-[600] bg-gray-300 p-[] lg:py-[1rem] lg:px-[4rem] text-[] lg:text-[1.4rem] rounded-[6px] shadow-md">
          Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube diyafb
          fiya fib Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube
          diyafb fiya fib
        </header>

        {/* card content */}
        <article className="bg-gray-300 p-[] lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 rounded-[6px] shadow-md flex flex-col gap-[] lg:gap-[.8rem]"  >
          <p></p>
        </article>

        {/* buttons */}
        <div className="flex gap-[] lg:gap-[1.5rem] justify-end">
          <Button variant="danger">Delete</Button>
          <Button variant="primary">Create</Button>
        </div>
      </article>
    </section>
  );
};