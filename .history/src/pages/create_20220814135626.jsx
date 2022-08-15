import { Button } from "../components";

export const Create = () => {
  return (
    <section className="bg-white my-[] lg:my-[2rem] p-[1rem] lg:py-[2.5rem]">
      {/* card */}
      <article className="flex flex-col gap-[.8rem] lg:gap-[2rem] lg:w-[75%] m-auto">
        {/* card title */}
        <textarea
          className="font-[600] bg-gray-300 p-[.4rem] lg:py-[1rem] lg:px-[4rem] text-[] lg:text-[1.4rem] rounded-[6px] shadow-md placeholder:italic"
          placeholder="Post header"
        ></textarea>

        {/* card content */}
        <textarea
          className="bg-gray-300 p-[.4rem] lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 rounded-[6px] shadow-md placeholder:italic"
          placeholder="Enter your post here"
        ></textarea>

        {/* buttons */}
        <div className="flex gap-[.4rem] lg:gap-[1.5rem] justify-end">
          <Button variant="danger">Delete</Button>
          <Button variant="primary">Create</Button>
        </div>
      </article>
    </section>
  );
};
