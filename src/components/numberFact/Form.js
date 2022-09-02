import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import classes from "./Form.module.css";
import Qman from "../../Images/Q_man_2000.png";
import { ThemeContext } from "../../App";

const Form = () => {
  const [data, setData] = useState([]);

  const [birthToday, setBirthToday] = useState("");
  const [deathToday, setDeathToday] = useState("");
  const [eventToday, setEventToday] = useState("");
  const [selectedToday, setSelectedToday] = useState("");

  const darkTheme = useContext(ThemeContext);

  useEffect(() => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  let birth, death, event1, selected1;
  const onClickHandler = (event) => {
    event.preventDefault();
    birth = Math.floor(Math.random() * data.births.length);
    death = Math.floor(Math.random() * data.deaths.length);
    event1 = Math.floor(Math.random() * data.events.length);
    selected1 = Math.floor(Math.random() * data.selected.length);

    setBirthToday(
      data.births[birth].text.trim() === 0 ? (
        <p>No data for today</p>
      ) : (
        <div>
          <p>
            In {data.births[birth].year}, {data.births[birth].text}, was born.
          </p>
        </div>
      )
    );
    setDeathToday(
      data.deaths[death].text.trim() === 0 ? (
        <p>No data for today</p>
      ) : (
        <div>
          <p>
            In {data.deaths[death].year}, {data.deaths[death].text} has passed
            away.
          </p>
        </div>
      )
    );
    setEventToday(
      data.events[event1].text.trim() === 0 ? (
        <p>No data for today</p>
      ) : (
        <div>
          <p>
            On this day in {data.events[event1].year},{" "}
            {data.events[event1].text}
          </p>
        </div>
      )
    );
    setSelectedToday(
      data.selected[selected1].text.trim() === 0 ? (
        <p>No data for today</p>
      ) : (
        <div>
          <p>Notable historical event:</p>
          <p>{data.selected[selected1].text}</p>
        </div>
      )
    );
  };
  return (
    <div className={classes.generalContainer}>
      <img src={Qman} alt="question man" className={classes.imgQman} />
      <form onSubmit={onClickHandler}>
        <br />
        <div className={classes.titleContainer}>
          <span
            className={
              darkTheme
                ? `${classes.title} ${classes.titleDark}`
                : `${classes.title} ${classes.titleLight}`
            }
          >
            API project
          </span>
        </div>
        <div className={classes.questionsContainer}>
          <p
            className={
              darkTheme
                ? `${classes.formQuestion} ${classes.formQuestionDark}`
                : `${classes.formQuestion} ${classes.formQuestionLight}`
            }
          >
            {" "}
            Today
          </p>
          <p
            className={
              darkTheme
                ? `${classes.formQuestion2} ${classes.formQuestion2Dark}`
                : `${classes.formQuestion2} ${classes.formQuestion2Light}`
            }
          >
            in<span> history</span>
          </p>
        </div>
        <div className={classes.formContainer}>
          <Button
            disabled={data.length === 0 ? "disabled" : false}
            type="submit"
            class={
              darkTheme
                ? `${classes.factBtn} ${classes.factBtnDark}`
                : `${classes.factBtn} ${classes.factBtnLight}`
            }
          >
            Discover
          </Button>
        </div>
        <div
          className={
            darkTheme
              ? `${classes.resultTextContainer} ${classes.resultTextContainerDark}`
              : `${classes.resultTextContainer} ${classes.resultTextContainerLight}`
          }
        >
          <span>{birthToday}</span>

          <span>{deathToday}</span>
          <span>{eventToday}</span>
          <span>{selectedToday}</span>
        </div>
      </form>
    </div>
  );
};

export default Form;
