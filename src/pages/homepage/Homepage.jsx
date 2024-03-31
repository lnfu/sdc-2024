import CreateBook from "./CreateBook";
import Hero from "../../assets/hero.jpeg"

const Homepage = () => {
  return (
    <>
    <div className="flex justify">
        <img src={Hero} alt="" />
        <div>
            <h1 className="text-4xl">錢包在哭。</h1>
        </div>
    </div>
    <CreateBook />
    </>
  );
};

export default Homepage;