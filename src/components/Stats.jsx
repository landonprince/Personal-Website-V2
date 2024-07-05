import { vandy } from "../assets";

const Stats = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center w-[20rem] bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img class="w-[20rem] p-5" src={vandy} alt="Vandy" />
    </div>
  );
};

export default Stats;
