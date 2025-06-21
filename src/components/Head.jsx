const Head = () => {
  return (
    <div className="grid grid-flow-col shadow-md">
      <div className="flex col-span-1">
        <img
          className="h-14 mt-2"
          alt="hamburger"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <img
          className="h-20"
          alt="youtube-logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo-2017.png"
        />
      </div>
      <div className="col-span-10 p-2 mt-2">
        <input
          className="w-1/2 p-2 mb-2 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1 m-2 px-10">
        <img
          className="h-10 m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
