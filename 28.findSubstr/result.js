/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/ -- задача

 /* по-моему, есть метод который ищет substring в строке... find что ли, надо загуглить методы строк */

 // indexOf

 // это читерство или супер-просто?

 // джипити сказал читерство и лучше попробовать написать самому наивный алгоритм, а затем kmp или rabin-karp (если я правильно помню, это связанно с хешем). Пока это тебе запушу, но позже решу другими способами
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};