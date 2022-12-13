import { maxTweetLength, textSanityPattern } from "../config";

export const setWaitTime = (min: number = 500, max: number = 2500) => Math.floor(Math.random() * (max - min)) + min;

export const sanity = (text: string): string => text.trim().replace(textSanityPattern, "\n");

export const truncate = (text: string, startPos: number = 0, endPos: number = maxTweetLength): string => text.substring(startPos, endPos);

export const isValidLength = (text: string, length?: number): boolean => {
    if (length) return text.length <= length;
    return text.length <= maxTweetLength;
}