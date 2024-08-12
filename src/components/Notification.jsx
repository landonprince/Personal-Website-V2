const Notification = ({ className }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center w-[20rem] bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        className="w-[20rem]"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=landonprince&layout=compact&bg_color=00000000&title_color=ffffff&text_color=cac6dd&hide_border=true"
        alt="Placeholder image"
      />
    </div>
  );
};

export default Notification;
