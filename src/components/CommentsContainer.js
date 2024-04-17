import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Ravi Kumar",
      text: "Excellent video! Very informative.",
      replies: [
        {
            name: "Priya Sharma",
            text: "I agree, it's quite insightful.",
            replies: [
                {
                    name: "Ravi Kumar",
                    text: "Thanks, Priya! Glad you found it helpful.",
                    replies: [],
                },
                {
                    name: "Priya Sharma",
                    text: "Yes, Ravi! Looking forward to more content like this.",
                    replies: [],
                }
            ],
        }
      ],
    },
    {
      name: "Amit Patel",
      text: "This video provided a fresh perspective on the topic.",
      replies: [],
    },
    {
      name: "Anjali Desai",
      text: "I learned a lot from watching this. Thanks!",
      replies: [],
    },
    {
      name: "Suresh Singh",
      text: "Well researched and presented video. Kudos!",
      replies: [
        {
            name: "Riya Verma",
            text: "Absolutely! It's one of the best videos I've seen on this topic.",
            replies: [],
        }
      ],
    },
    {
      name: "Pooja Gupta",
      text: "I loved how clear and concise the explanations were.",
      replies: [],
    },
    {
      name: "Vikram Sharma",
      text: "This video was a game-changer for me. Thank you!",
      replies: [],
    },
];


  const Comment = ({ data }) => {
    const { name, replies, text } = data;
    return (
      <div className="mt-2">
        <div className="flex items-center gap-2 mt-1">
         <FontAwesomeIcon icon = {faCircleUser}/>
            <p className="font-semibold">{name}</p>
        </div>
            <p>{text}</p>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return (
      <div>
        {comments.map((comment, index) => {
          return (
            <div key={index} className="rounded-md  p-2">
              <Comment data={comment} />
              <div className="pl-2 rounded-md shadow-md mt-1 border">
              <CommentsList comments={comment.replies} />
              </div>
            </div>
          );
        })}
      </div> 
    );
  };

  return (
    <div className="w-[760px] bg-white mt-5 rounded-md p-2">
      <h1 className="font-bold text-3xl"> Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
