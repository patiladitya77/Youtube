import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  // searchcache={
  //     "iphone":["iphone 11","iphone 12"]
  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions[searchCache[searchQuery]];
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => handleMenu()}
          className="h-14 mt-2 cursor-pointer"
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
        <div>
          <input
            className="px-5 w-1/2 p-2 mb-2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[31rem] rounded-lg shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li className="hover:bg-gray-50">{s}</li>
              ))}
            </ul>
          </div>
        )}
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
