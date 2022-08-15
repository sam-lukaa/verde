import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";

function App() {
  return (
    <>
      <Button variant="primary">New Post</Button>

      {/* card */}
      <section className="my-[3rem] flex flex-col gap-[] lg:gap-[.3rem] w-[70%] m-auto">
        {/* card top */}
        <header className="text-center font-[600] bg-gray-300 p-[] lg:py-[1rem] lg:px-[3rem]">
          Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube diyafb
          fiya fib Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube diyafb
          fiya fib
        </header>
      </section>
    </>
  );
}

export default App;
