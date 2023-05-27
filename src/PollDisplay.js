import React, { useState, useEffect } from "react";
import Poll from "react-polls";
import { getPolls } from "../helper/coreapicalls";

const MainPoll = () => {
  const [polls, setPoll] = useState([]);
  const [error, seterror] = useState(false);
  // Setting answers to state to reload the component with each vote
  const [pollAnswers, setPollAnswers] = useState([]);

  useEffect(() => {
    loadPoll();
  }, []);

  const loadPoll = () => {
    getPolls().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setPoll(data);
        console.log(data);
      }
    });
  };

  // Handling user vote
  // Increments the votes count of answer when the user votes

  return (
    <div className="">
      <div className="container">
        <h1 className="blog_heading">Poll's of the Day</h1>
        <div className="row">
          {polls.reverse().map((poll, index) => (
            <div className="col-lg-4 col-12" key={index}>
              <Poll question={poll.question} answers={poll.options} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPoll;