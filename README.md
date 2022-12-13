# Tomato tweet machine
## Getting Started

Please visit [APPROACH.md](APPROACH.md), for design approach.
#### Note

As `Auth0` has been added to the project for security, the app in the code sandbox is not bootstrapping; we are working on alternate choices and deployment; please setup locally for review at the present; I apologise for the inconvenience.

### Installation
#### Local:

Install npm package
From root directory -> run `npm install`
#### Run
`npm start-local` Runs the app in the development mode.\

Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

#### Login Credentials

Use below credential to access app, as its secure with Auth0 integration
```
user: testhotmail.com password: test@123
```
## Deployment

[Demo](https://ey-digital-detox-demo.herokuapp.com/)

`Deployment in progress`

## Scenario & requirements

Today's client is the South London Tomato Association, a marketing and lobbying group. We have been asked to take a look at their legacy system and help them implement some changes.

The core feature is a web-based UI that helps users stay on-message when crafting tweets about tomatoes. Users type in a text box, and when they hit the "tweetify" button, some processing happens and a jazzed-up tweet appears in a second text box. The user then typically copies the text into Twitter and gets _amazing_ engagement numbers.

> **Note:** A "tweet", in this context, is a string composed of up to **140 characters**. (See also requirement 7 below)

The highest priority changes they've requested are:

1. It should not be possible to type in the output text box.
2. It should be possible to see an entire tweet in both text boxes without having to manually resize it.
3. The "tweetify" button should be removed. Instead, the output text should update as the user is typing.
4. There should be a randomised delay between input and output, so the system would appear to be "doing more" (client's words). The delay time should vary between 500 ms and 2500 ms.
5. When the user's input text is already on-message (no hashtag is added), its length should still be truncated to fit in a tweet. Make sure not to cut off the hashtag!
6. The Association is trying to expand its international reach; The tweetifier should accept `#Tomate` (French), `#Pomodoro` (Italian), `#Tomaat` (Dutch) and `#Pomidor` (Polish) as additional valid hashtags - and not add `#Tomato` after them.
7. 280-character, multilingual, and URL-containing tweets should be supported as they are on Twitter.com. (NOTE: The maximum length of a tweet changed in 2017, but the PO only got the budget to adapt their system recently.)
8. In addition to the aforementioned international hashtags being accepted, the client would also like us to detect the _language_ of a tweet and add the most appropriate available hashtag.

# Implementation

Your goal is to _describe your approach_ for implementing all of the above requirements, and then to implement each one in order. Unit tests are not required in this exercise, as long as you somehow demonstrate that the code meets all requirements.
