import React, { useState } from 'react';

const questions = [
  {
    question: "Какой ваш любимый цвет?",
    options: ["Красный", "Зелёный", "Синий", "Жёлтый"],
  },
  {
    question: "Какой ваш любимый фрукт?",
    options: ["Яблоко", "Банан", "Апельсин", "Виноград"],
  },
  {
    question: "Какой ваш любимый вид спорта?",
    options: ["Футбол", "Баскетбол", "Теннис", "Плавание"],
  },
];

const MultiStepSurvey = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (answers[currentStep] === null) {
      alert("Пожалуйста, выберите ответ, чтобы продолжить.");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (answers[currentStep] === null) {
      alert("Пожалуйста, выберите ответ, чтобы отправить опрос.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: 500, margin: "20px auto", fontFamily: "Arial, sans-serif", backgroundColor: "#fff", color: "#000", padding: 20, borderRadius: 8, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h2>Спасибо за участие!</h2>
        <h3>Ваши ответы:</h3>
        <ul>
          {questions.map((q, i) => (
            <li key={i} style={{ marginBottom: 12 }}>
              <strong>{q.question}</strong><br />
              Ответ: {answers[i]}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 500, margin: "20px auto", fontFamily: "Arial, sans-serif", backgroundColor: "#fff", color: "#000", padding: 20, borderRadius: 8, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h2>Опросник</h2>
      <p><strong>Вопрос {currentStep + 1} из {questions.length}</strong></p>
      <p>{questions[currentStep].question}</p>
      <form>
        {questions[currentStep].options.map((option, idx) => (
          <label key={idx} style={{ display: "block", marginBottom: 8, cursor: "pointer" }}>
            <input
              type="radio"
              name={`question-${currentStep}`}
              value={option}
              checked={answers[currentStep] === option}
              onChange={() => handleOptionChange(option)}
              style={{ marginRight: 8 }}
            />
            {option}
          </label>
        ))}
      </form>

      <div style={{ marginTop: 20 }}>
        {currentStep > 0 && (
          <button onClick={prevStep} style={{ marginRight: 10, padding: "6px 12px" }}>
            Назад
          </button>
        )}
        {currentStep < questions.length - 1 && (
          <button onClick={nextStep} style={{ padding: "6px 12px" }}>
            Далее
          </button>
        )}
        {currentStep === questions.length - 1 && (
          <button onClick={handleSubmit} style={{ padding: "6px 12px" }}>
            Отправить
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepSurvey;
