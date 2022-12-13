export interface IhashTags {
  [propertyName: string]: IHashTag
}

export interface IHashTag {
  lang: string,
  hashTag: string
}

export const hashTags: IhashTags = {
  "fra": {
    "lang": "French",
    "hashTag": "#Tomate"
  },
  "ita": {
    "lang": "Italian",
    "hashTag": "#Pomodoro"
  },
  "nld": {
    "lang": "Dutch",
    "hashTag": "#Tomaat"
  },
  "pol": {
    "lang": "Polish",
    "hashTag": "#Pomidor"
  },
  "eng": {
    "lang": "English",
    "hashTag": "#Tomato"
  }
}

export const maxTweetLength = parseInt(process.env.ALLOWED_MAX_TWEET_LENGTH || '140');
export const maxInputLength = parseInt(process.env.ALLOWED_MAX_INPUT_LENGTH || '1000');
export const maxUrlLength = parseInt(process.env.ALLOWED_MAX_URL_LENGTH || '23');
export const urlPattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9:%._\+~#=]{2,100}\.[a-z]{2,6}[-a-zA-Z0-9:%_\+.~#?&\/\/=]*/gmi;
export const textSanityPattern =/(\n{2,})/gmi;