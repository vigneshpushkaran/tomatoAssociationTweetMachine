import { franc } from "franc";
import { hashTags, maxTweetLength, maxUrlLength, urlPattern } from "../config";
import { isValidLength, truncate } from "./helper";

interface IExtractUrl {
    url: string;
    startPos: number;
}

interface ITrimTweetUrl {
    tweet: string;
    trimmedUrlTweetLen: number;
}
export const supportedLang: string[] = Object.keys(hashTags);
export const supportedHashTagRegex = new RegExp(Object.values(hashTags).map((value) => value.hashTag.replace(/^\s/, "")).join("|"), "mgi");

export const createLangHashTag = (tweet: string): string => {
    const lang = franc(tweet, { only: supportedLang });
    const tag = lang !== "und" ? hashTags[lang].hashTag : hashTags.eng.hashTag;
    return " " + tag;
}

export const isHashTagrequired = (tweet: string): boolean => !supportedHashTagRegex.test(tweet);

export const extractHashTag = (tweet: string): string[] | null => tweet.match(supportedHashTagRegex);

export const isUrlValid = (url: string): boolean => urlPattern.test(url);

export const extractUrls = (tweet: string): IExtractUrl[] | null => {
    const urls = [...tweet.matchAll(urlPattern)]
        .map((matchedUrl) => {
            return { url: matchedUrl[0], startPos: matchedUrl?.index || 0 }
        });
    return urls.length > 0 ? urls : null;
}

export const trimUrlAsTwitterSupport = (tweet: string): ITrimTweetUrl => {
    const extractedUrls = extractUrls(tweet);
    let trimmedUrlTweetLen = maxTweetLength;
    if (extractedUrls) {
        extractedUrls.forEach(({ url, startPos }) => {
            const urlRange = startPos + maxUrlLength;
            if (urlRange < maxTweetLength) {
                const urlcharCount = maxUrlLength - url.length;
                trimmedUrlTweetLen = maxTweetLength - urlcharCount;
            } else {
                let shortenUrl = trimUrl(url);
                const startOfUrl = tweet.slice(0, startPos);
                const endOfUrl = tweet.slice(startPos + url.length);
                console.log({startOfUrl,endOfUrl})
                tweet = `${startOfUrl}${shortenUrl}${endOfUrl}`;
                console.log(tweet);
            }
        });
    }
    return { tweet, trimmedUrlTweetLen };
}

const trimUrl = (url: string): string => {
    if(url.match(urlPattern)) return trimUrl(url.slice(0, -1));
    return url;
}

export const trimTweet = (tweet: string, allowedMaxLen: number): string => {
    if (isValidLength(tweet)) return tweet;
    let trimtweet;
    const excessTweetStartPos = tweet.length - (tweet.length - allowedMaxLen);
    const excessTweet = truncate(tweet, excessTweetStartPos, tweet.length);
    const hashTag = extractHashTag(excessTweet);
    if (hashTag) {
        const truncatTweet = truncate(tweet, 0, excessTweetStartPos - hashTag[0].length);
        trimtweet = truncatTweet + " " + hashTag[0];
    } else {
        trimtweet = truncate(tweet, 0, allowedMaxLen);
    }
    return trimtweet;
}
