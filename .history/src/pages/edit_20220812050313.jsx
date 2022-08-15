import { Button } from "../components";

export const Edit = () => {
  return (
    <section className="bg-white my-[] lg:my-[2rem] py-[] lg:py-[2.5rem]">
      {/* card */}
      <article className="flex flex-col gap-[] lg:gap-[2rem] w-[75%] m-auto">
        {/* new post */}
        <div className='flex justify-end'>
        <Button variant='primary'>New Post</Button>
        </div>

        {/* card title */}
        <textarea className="font-[600] bg-gray-300 p-[] lg:py-[1rem] lg:px-[4rem] text-[] lg:text-[1.4rem] rounded-[6px] shadow-md placeholder:italic" placeholder='Post title'>
          Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube diyafb
          fiya fib Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube
          diyafb fiya fib
        </textarea>

        {/* card content */}
        <textarea className="bg-gray-300 p-[] lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 rounded-[6px] shadow-md placeholder:italic" placeholder='Enter your post here'>
        </textarea>

        {/* buttons */}
        <div className="flex gap-[] lg:gap-[1.5rem] justify-end">
          <Button variant="danger">Delete</Button>
          <Button variant="primary">Edit</Button>
        </div>
      </article>
    </section>
  );
};
