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
    "X-Originating-IP": "127.0.0.1",
    "X-Forwarded-For": "127.0.0.1",
    "X-Remote-IP": "127.0.0.1",
    "X-Remote-Addr": "127.0.0.1",
    "X-Client-IP": "127.0.0.1",
    "X-Host": "127.0.0.1",
    "X-Forwared-Host": "127.0.0.1",
    //
    authority: "footballapi.pulselive.com",
    accept: "*/*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "if-none-match": 'W/"05868184b81a462433594b466e28b1db57"',
    origin: "https://www.premierleague.com",
    referer: "https://www.premierleague.com/",
    "sec-ch-ua":
      '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  },
};

//  matches not played yet
export const requestMatches = (page: number, size: number) =>
  `https://footballapi.pulselive.com/football/fixtures?comps=1&teams=1,2,127,130,131,4,6,7,34,8,26,10,11,12,23,15,20,21,25,38&compSeasons=719&page=${page}&pageSize=${size}&sort=asc&statuses=U,L&altIds=true&fast=false`;

export const requestMatchesOfTheWeek = (gameweekId: string) =>
  `https://footballapi.pulselive.com/football/fixtures?statuses=U,L,C,A&pageSize=10&page=0&gameweeks=${gameweekId}&altIds=true&fast=false`;

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

export const requestAllMatches = (page: number, size: number) =>
  `https://footballapi.pulselive.com/football/fixtures?comps=1&compSeasons=719&teams=1,2,127,130,131,4,6,7,34,8,26,10,11,12,23,15,20,21,25,38&page=${page}&pageSize=${size}&sort=asc&statuses=A,C, U, L&altIds=true&fast=false`;

// get Achievement

export const requestAchievement = () =>
  `https://footballapi.pulselive.com/football/standings?compSeasons=719&altIds=true&detail=2&FOOTBALL_COMPETITION=1&live=true`;
