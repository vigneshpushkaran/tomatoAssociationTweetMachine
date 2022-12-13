import * as React from "react";
import TextArea from "../../atoms/textArea/textArea";
import Typography from "../../atoms/typography/typography";
import { useSelector, useDispatch } from "react-redux";
import { setTweetInput } from "../../../../reducer/inputTweet";
import "./inputTweet.scss";

interface InputTweetProps {
  textLength: number;
}

export default function InputTweet({ textLength }: InputTweetProps) {
  const tweet = useSelector((state: any) => state.inputTweet.value);
  const dispatch = useDispatch();

  return (
    <div className="input-tweet">
      <Typography variant={"button"}>Text to Tweetify</Typography>
      <TextArea
        label="To tweetify"
        placeholder="Start tweeting!!"
        text={tweet}
        callback={(value: string) => {
          dispatch(setTweetInput(value));
        }}
        textLength={textLength}
      ></TextArea>
    </div>
  );
}
