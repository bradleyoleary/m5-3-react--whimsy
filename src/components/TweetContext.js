import React from "react";
import moment from "moment";
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  const handleToggleLike = () => {
    const incOrDec = isLiked ? -1 : 1;
    setIsLiked(!isLiked);
    setNumOfLikes(numOfLikes + incOrDec);
  };

  const handleToggleRetweet = () => {
    //has it been retweeted? if not, inc
    const incOrDec = isRetweeted ? -1 : 1;
    setIsRetweeted(!isRetweeted);
    setNumOfRetweets(numOfRetweets + incOrDec);
  };

  const date = moment().format("h:mm a - MMM Do, YYYY");

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date: date,
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
