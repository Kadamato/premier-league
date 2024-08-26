export const configRequest = {
  method: "GET",
  headers: {
    Connection: "keep-alive",
    "Accept-Encoding": "gzip, deflate, br",
    Accept: "*/*",
    account: "premierleague",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Host: "footballapi.pulselive.com",
    Origin: "https://www.premierleague.com",
    Referer: "https://www.premierleague.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent":
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0",
    "Access-Control-Allow-Origin": "rq_request_initiator_origin()",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
    // "X-Originating-IP": "127.0.0.1",
    // "X-Forwarded-For": "127.0.0.1",
    // "X-Remote-IP": "127.0.0.1",
    // "X-Remote-Addr": "127.0.0.1",
    // "X-Client-IP": "127.0.0.1",
    // "X-Host": "127.0.0.1",
    // "X-Forwared-Host": "127.0.0.1",
  },
};

//  matches not played yet
export const requestMatches = () =>
  "https://footballapi.pulselive.com/football/fixtures?comps=1&teams=1,2,127,130,131,4,6,7,34,8,26,10,11,12,23,15,20,21,25,38&compSeasons=719&page=0&pageSize=20&sort=asc&statuses=U,L&altIds=true&fast=false";

// update score : get all matches in week  of the premier league and scores of the matches
export const requestScoreMatchesOfTheWeek = (
  gameweekId: string,
  startDate: string,
  endDate: string
) =>
  `https://footballapi.pulselive.com/football/fixtures?statuses=U,L,C,A&pageSize=10&startDate=${startDate}&endDate=${endDate}&page=0&gameweeks=${gameweekId}&altIds=true&fast=false`;

// get player info
export const requestPlayerInfo = (playerId: string) =>
  `https://footballapi.pulselive.com/football/stats/player/${playerId}?comps=1`;

// https://footballapi.pulselive.com/football/fixtures?statuses=U,L,C,A&pageSize=10&startDate=2024-08-24&endDate=2024-08-25&page=0&gameweeks=18391&altIds=true&fast=false

export const requestMatchesOfTheWeek = (gameweekId: string) =>
  `https://footballapi.pulselive.com/football/fixtures?statuses=U,L,C,A&pageSize=10}&page=0&gameweeks=${gameweekId}&altIds=true&fast=false`;
