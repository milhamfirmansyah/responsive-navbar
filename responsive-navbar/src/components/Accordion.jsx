import React, { useState } from 'react';
import './accordion.css';

export const Accordion = () => {
  const faq = [
    {
      question: 'Question 1',
      answer: 'ini jawaban dari pertanyaan 1',
    },
    {
      question: 'Question 2',
      answer: 'ini jawaban dari pertanyaan 2',
    },
    {
      question: 'Question 3',
      answer: 'ini jawaban dari pertanyaan 3',
    },
  ];

  const [isOpen1, setIsOpen1] = useState(false);
  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);
  const handleClick3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div>
      <div className="accordion-container">
        <div className="question1" onClick={handleClick1}>
          <div>
            <h3>{faq[0].question}</h3>
          </div>
          <div className={isOpen1 ? 'icon1-open' : 'icon1'}>
            <i class="bi bi-chevron-down"></i>
          </div>
        </div>
        {isOpen1 && (
          <div className="answer-1"> 
            <p>{faq[0].answer}</p>
          </div>
        )}

        <div className="question2" onClick={handleClick2}>
          <div>
            <h3>{faq[1].question}</h3>
          </div>
          <div className={isOpen2 ? 'icon2-open' : 'icon2'}>
            <i class="bi bi-chevron-down"></i>
          </div>
        </div>
        {isOpen2 && (
          <div className="answer-2">
            <p>{faq[1].answer}</p>
          </div>
        )}

        <div className="question3" onClick={handleClick3}>
          <div>
            <h3>{faq[2].question}</h3>
          </div>
          <div className={isOpen3 ? 'icon3-open' : 'icon3'}>
            <i class="bi bi-chevron-down"></i>
          </div>
        </div>
        {isOpen3 && (
          <div className="answer-3">
            <p>{faq[2].answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};
