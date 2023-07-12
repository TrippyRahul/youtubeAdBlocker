"use client";

import React, { useState } from "react";
import styles from "./accordian.module.scss";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "What are third-party trackers in this best ad blocker chrome?",
    ans: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nesciunt sapiente inventore doloremque quos voluptatum unde, animi consectetur culpa dolores?",
  },
  {
    id: 2,
    ques: "How can i prevent malware in chrome youtube ad blocker?",
    ans: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nesciunt sapiente inventore doloremque quos voluptatum unde, animi consectetur culpa dolores?",
  },
  {
    id: 3,
    ques: "What type of ads can adblocker for youtube block?",
    ans: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nesciunt sapiente inventore doloremque quos voluptatum unde, animi consectetur culpa dolores?",
  },
  {
    id: 4,
    ques: "Is youtube blocks ads on chrome free?",
    ans: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nesciunt sapiente inventore doloremque quos voluptatum unde, animi consectetur culpa dolores?",
  },
  {
    id: 5,
    ques: "How to block ads on Youtube?",
    ans: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nesciunt sapiente inventore doloremque quos voluptatum unde, animi consectetur culpa dolores?",
  },
  {
    id: 6,
    ques: "Is adblock plus chrome extension safe to use?",
    ans: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nesciunt sapiente inventore doloremque quos voluptatum unde, animi consectetur culpa dolores?",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.frequently}>
      <Image src="/accor-bg.svg" 
        width={1817.37} height={1045.26} 
        style={{position:'absolute', top:"-20%", left:"-10%"}}
      
      />
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles.img}>
                  <img src="./add.svg" alt="add-logo" />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>

        <button>GET TRUE ADBLOCKER NOW</button>
      </div>
    </div>
  );
};

export default Accordian;
