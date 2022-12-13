import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTweetOutput } from "../../../reducer/outputTweet";
import { setWaitTime, sanity } from "../../../utils/helper";
import { setUserTypingTweet } from "../../../reducer/inputTweet";
import { useDebounce } from "../../../hooks/debounce";
import {
  isHashTagrequired,
  createLangHashTag,
  trimUrlAsTwitterSupport,
  trimTweet,
} from "../../../utils/validation";
import InputTweet from "../../ui/molecules/input/inputTweet";
import OutputTweet from "../../ui/molecules/output/outputTweet";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Divider from "../../ui/atoms/divider/divider";
import Chip from "../../ui/atoms/chip/chip";
import Avatar from "../../ui/atoms/avatar/avatar";
import PositionedSnackbar from "../../ui/molecules/snackBar/snackBar";
import "./tweet.scss";
import { maxInputLength } from "../../../config";

export default function Tweet() {
  const dispatch = useDispatch();
  const outputTweet = useSelector((state: any) => state.outputTweet);
  const inputTweet = useSelector((state: any) => state.inputTweet);
  const debouncedValue = useDebounce(inputTweet.value, 500);
  const [loading, setLoading] = React.useState(false);
  const [snackTxt, setSnackTxt] = React.useState("");

  useEffect(() => {
    dispatch(setUserTypingTweet(false));
  }, [debouncedValue]);

  const tweetify = () => {
    setSnackTxt("doing more !!");
    setLoading(true);
    setTimeout(() => {
      processTweet(sanity(inputTweet.value));
      setLoading(false);
    }, setWaitTime());
  };

  const processTweet = (inputTweet: string) => {
    const hashTag = isHashTagrequired(inputTweet) ? createLangHashTag(inputTweet) : ""; 
    const { tweet, trimmedUrlTweetLen } = trimUrlAsTwitterSupport(inputTweet + hashTag );
    dispatch(
      setTweetOutput({ value: trimTweet(tweet, trimmedUrlTweetLen) })
    );
  };

  return (
    <>
      <div className="tweet-box">
        <InputTweet textLength={maxInputLength} />
        <OutputTweet
          tweet={inputTweet.typing ? "User is typing..." : outputTweet.value}
          disable={inputTweet.length < 1 ? true : false}
          readOnly={true}
        />
        <Divider />
      </div>
      <div className="button-chip-base">
        <LoadingButton
          onClick={tweetify}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          disabled={inputTweet.value.length < 1 ? true : false}
        >
          Tweetify
        </LoadingButton>
        {inputTweet.typing ? (
          <Chip
            avatar={<Avatar>VP</Avatar>}
            label="User is typing"
            color="primary"
            variant="outlined"
            className="chip-customise"
          />
        ) : null}
      </div>
      <PositionedSnackbar
        text={snackTxt}
        open={loading}
        vertical="top"
        horizontal="center"
      />
    </>
  );
}
