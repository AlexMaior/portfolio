import React, { useState } from "react";
import Button from "./Button";
import classes from "./Form.module.css";
import Qman from "../../Images/Q_man_2000.png";

const Form = (props) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    if (isNaN(input)) {
      alert("Please enter a number");
    } else {
      const url = `http://numbersapi.com/${input}/trivia?notfound=floor&fragment`;
      fetch(url)
        .then((response) => response.text())
        .then((data) => setResult(data));
    }
    setInput("");
  };
  return (
    <div className={classes.generalContainer}>
      <img src={Qman} alt="questin man" className={classes.imgQman} />
      <form onSubmit={onClickHandler}>
        <br />
        <div className={classes.questionsContainer}>
          <p className={classes.formQuestion}>Would you like to learn</p>
          <p className={classes.formQuestion2}>
            an interesting <span>fact</span> about a number?
          </p>
        </div>
        <div className={classes.formContainer}>
          <input
            placeholder="enter a number"
            onChange={inputChangeHandler}
            value={input}
            required
          ></input>
          <Button type="submit" class={classes.factBtn}>
            LEARN
          </Button>
        </div>
        <div className={classes.resultTextContainer}>
          {result ? (
            <p className={classes.footerAnswer}>"{result}"</p>
          ) : (
            <span></span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
