import { clickOptions } from "@testing-library/user-event/dist/click";
import {
  AllHTMLAttributes,
  ButtonHTMLAttributes,
  HtmlHTMLAttributes,
  MouseEventHandler,
  ReactElement,
  ReactHTMLElement,
} from "react";
import { JsxAttribute } from "typescript";
import "./Button.css";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
