import * as React from "react";
import TextArea from "../../atoms/textArea/textArea";
import Typography from "../../atoms/typography/typography";
import "./outputTweet.scss";

interface OutputTweetProps {
  disable?: boolean;
  tweet: string;
  readOnly?: boolean;
}
export default function OutputTweet({
  disable,
  tweet,
  readOnly,
}: OutputTweetProps) {
  return (
    <div className="output-tweet">
      <Typography variant={"button"}>Tweetified text</Typography>
      <TextArea
        label={"Tweetified text"}
        placeholder={"Tweet to come!"}
        text={tweet}
        disable={disable}
        readOnly={readOnly}
      ></TextArea>
    </div>
  );
}
