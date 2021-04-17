import React from "react";
import { Link } from "react-router-dom";

const Poll = ({
  id,
  title,
  date,
  author,
  timesCompleted,
  tags,
  alreadyCompleted,
  questions,
}) => {
  return (
    <article className="poll-wrapper">
      <h1 className="poll-title">{title}</h1>
      <div className="poll-meta underline">
        <p>created: {date}</p>
        <p style={{ textAlign: "right" }}>author: {author}</p>
      </div>
      {questions.slice(0, 3).map((question) => {
        return (
          <section className="question-wrapper" key={question.qid}>
            <h2 className="question">
              {`Q${question.qid}) `}
              {question.question}
            </h2>
            {/* {question.answers.map((answer) => {
              return (
                <p className="question-answer" key={answer.aid}>
                  {answer.answer}
                </p>
              );
            })} */}
            {questions.length > 3 ? <h2>and more...</h2> : null}
          </section>
        );
      })}
      <Link to={`/poll/${id}`} className="poll-link">
        <button className="poll-button">
          {alreadyCompleted ? "See results" : "Complete now"}
        </button>
      </Link>
      <div className="poll-meta">
        <p>Poll completed: {timesCompleted} times</p>
        <div className="tags">
          {tags.map((tag, index) => {
            return tag ? <p key={index}>#{tag}</p> : null;
          })}
        </div>
      </div>
    </article>
  );
};

export default Poll;
