# Approach

An overview of the steps I took and the cognitive processes I used to implement each condition for this challenge is provided below.

Considered the following items in the process,
1. Adapt new features/requirements in coming times with ease
    In UI components by leveraging atomic design pattern to have readability, eliminates redundancy and implements SOC, Also improve user's experience by utilising the materialUI lib for styling.
2. Configurable options validation, sanity and features
    Achieve loosely coupled component to Ui and business logic(marketing)
3. Application state management and Security pratice
    Redux configuration to manage state, adding auth0 to secure app
4. Bundling tool
    Parcel byndler used to leverage zero configuration to developer to focs on business logic and components

1. It should not be possible to type in the output text box.

Added `disabled` attribute to `textarea` component to prevent users from typing in the component by default, but we can override the attribute with optional props to component as it is used by both input and output tweet box.
`src/components/ui/atoms/textArea/textArea.tsx`

2. It should be possible to see an entire tweet in both text boxes without having to manually resize it.

The text area component is responsively built to handle the entire width(100%) and height(100%) of the parent component makes text area grows/shrink as text in the box. Also disabled screen resize to hide from view to improve user experience.

3. The "tweetify" button should be removed. Instead, the output text should update as the user is typing.

OnChange(input) Event in Input Tweet Box changes text and flag (typing) in the state(store). Based on the flag from state, we render button and text(user is typing) conditionally in Output Tweet Box and Chip Components, And leveraged Debounce hooks to switch flag after user stop typing.
##### reference
`src/hooks/debounce.tsx`

4. There should be a randomised delay between input and output, so the system would appear to be "doing more" (client's words). The delay time should vary between 500 ms and 2500 ms.

when user click `Tweetitfy` button, we set random delay as required as default to simulate the apps as "doing more" with snack bar popup component and hides in few seconds, additionally added disabled feature for button in the processing time of tweet with loader icon attached with it.

5. When the user's input text is already on-message (no hashtag is added), its length should still be truncated to fit in a tweet. Make sure not to cut off the hashtag!

We perform sanity checks for whitespace and additional newlines together in the input text, On validating hashtag -  it adds permissible hashtag if not present in the tweet, and we leveraged lang detection library to identify the tweet language and add relevant supported hashtag.  And trimmed tweet based on the length determined from the prior method(trimUrlAsTwitterSupport) which consider length of tweet length allowed(configure from env)

##### Methods reference
`src/utils/helper.ts => sanity`
`src/utils/validation.ts => trimUrlAsTwitterSupport,trimTweet`



6. The Association is trying to expand its international reach; The tweetifier should accept `#Tomate` (French), `#Pomodoro` (Italian), `#Tomaat` (Dutch) and `#Pomidor` (Polish) as additional valid hashtags - and not add `#Tomato` after them.

Additional hashtags, supported by specifying hashtags needed to support and utilising franc lib to include the relevant language hashtag in the tweet.


7. 280-character, multilingual, and URL-containing tweets should be supported as they are on Twitter.com. (NOTE: The maximum length of a tweet changed in 2017, but the PO only got the budget to adapt their system recently.)

We supported 280 char tweet and multilingual with configuration option
from the env,  as stated in requirement 6 & 7.
The url as to be validated as 23 char version, because twitter converts url as same(shorten url), we achieved by utilising the regex validation, we check the urls in the tweet if supports twitter conversion, then we increase total tweet char or trim url still it's not recognised by twitter. At end, we reinsert url in the same position in the tweet.
#### reference

twitter url 23 char - [reference](https://help.twitter.com/en/using-twitter/how-to-tweet-a-link#:~:text=Step%201-,Type%20or%20paste%20the%20URL,Tweet%20box%20on%20twitter.com.&text=A%20URL%20of%20any%20length,character%20count%20will%20reflect%20this.&text=Click%20the%20Tweet%20button%20to%20post%20your%20Tweet%20and%20link.)

`method reference => rc/utils/validation.ts => trimUrlAsTwitterSupport, trimUrl`

8. In addition to the aforementioned international hashtags being accepted, the client would also like us to detect the _language_ of a tweet and add the most appropriate available hashtag.

Extensive review, we decided that the third-party library "franc" was the top pick for our needs.
We have already added the relevant hashtag by identifying the lang as part of requirement 5.

## Work inprogress
- unit test 
- heroku/(netlify correct) deployment (Optional)

## Improvements needed further

- Tweet replica preview
- Preview toggle option
- Post tweet to Twitter from the app
- copy the output tweet by clicking the copy icon(clipboard)
- A fallback URL in case of an error


