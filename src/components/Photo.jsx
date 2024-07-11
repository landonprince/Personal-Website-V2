import { photo } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center w-[20rem] bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img className="w-[20rem] rounded-3xl p-4 drop-shadow-2xl" src={photo} />
    </div>
  );
};

export default Notification;
