import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { maxTweetLength } from "../../../../config";
import "./textArea.scss";
interface textAreaProps {
  label: string;
  placeholder: string;
  text: string;
  textLength?: number;
  callback?: any;
  disable?: boolean;
  readOnly?: boolean;
}
export default function TextArea({
  label,
  placeholder,
  text,
  callback,
  disable = false,
  readOnly= false,
  textLength = maxTweetLength 

}: textAreaProps) {
  return (
    <TextareaAutosize
      aria-label={label}
      placeholder={placeholder}
      minRows={3}
      style={{ width: "100%" }}
      value={text}
      onChange={(event) => callback(event.target.value)}
      disabled={disable}
      readOnly={readOnly}
      maxLength={textLength}
      className="text-area-customise"
    />
  );
}
