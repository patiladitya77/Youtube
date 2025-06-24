import Comment from "./Comment";

const commentsData = [
  {
    name: "Akshay",
    text: "lorem ipson dro",
    replies: [
      {
        name: "Akshay",
        text: "lorem ipson dro",
        replies: [
          {
            name: "Akshay",
            text: "lorem ipson dro",
            replies: [{}],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay",
    text: "lorem ipson dro",
    replies: [
      {
        name: "Akshay",
        text: "lorem ipson dro",
        replies: [
          {
            name: "Akshay",
            text: "lorem ipson dro",
            replies: [
              {
                name: "Akshay",
                text: "lorem ipson dro",
                replies: [{}],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay",
    text: "lorem ipson dro",
    replies: [{}],
  },
  {
    name: "Akshay",
    text: "lorem ipson dro",
    replies: [{}],
  },
];

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) return null;
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentList comments={comment?.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
