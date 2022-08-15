import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";

function App() {
  return (
    <>
      <Button variant='primary'>New Post</Button>
      
      {/* card */}
      <section className='my-[3rem] flex flex-col gap-[] lg:gap-[.3rem] w-full'>
        {/* card top */}
        <header className="text-center font-[600]"></header>
      </section>
    </>
  );
}

export default App;
