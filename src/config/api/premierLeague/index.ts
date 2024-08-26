import {
  configRequest,
  requestMatchesOfTheWeek,
  requestPlayerInfo,
  requestMatches,
  requestScoreMatchesOfTheWeek,
} from "./config";

export const getMatches = async () => {
  try {
    const response = await fetch(requestMatches(), configRequest);

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};

export const getMatchesOfTheWeek = async (weekId: string) => {
  try {
    const response = await fetch(
      requestMatchesOfTheWeek(weekId),
      configRequest
    );

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};

export const getPlayerInfo = async (playerId: string) => {
  try {
    const response = await fetch(requestPlayerInfo(playerId), configRequest);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};

export const getScoreMatchesOfTheWeek = async (
  gameweekId: string,
  startDate: string,
  endDate: string
) => {
  try {
    const response = await fetch(
      requestScoreMatchesOfTheWeek(gameweekId, startDate, endDate),
      configRequest
    );

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
