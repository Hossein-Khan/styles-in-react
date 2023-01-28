import React, {
  ChangeEventHandler,
  EventHandler,
  FormEventHandler,
  useState,
} from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

interface CourseInputProps {
  onAddGoal: (value: string) => void;
}

const CourseInput = (props: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const goalInputChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>
        <input
          style={{ borderColor: isValid ? "black" : "red" }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
