import Matches from "../component/Matches";

export default function Home() {
  return (
    <div>
      <div className="">
        <img src="./images/banner.svg" alt="" className="lg:rounded-r-lg" />
      </div>
      <Matches />
    </div>
  );
}
