import { processTweet } from "./marketingLogic";

function update() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  output.value = processTweet(input.value);
}

document.getElementById("tweetify").addEventListener("click", update);
