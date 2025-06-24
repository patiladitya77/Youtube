const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 rounded-lg bg-gray-100 my-2">
      <img
        className="w-12 h-12 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Comment;
