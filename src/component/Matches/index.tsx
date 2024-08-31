"use client";

import { useEffect, useState } from "react";

import useSWR from "swr";

import formatTime from "@/helper/formatTime";
import MatchCard from "../MatchCard";
import LineLoading from "../ui/LineLoading";
import { configRequest } from "@/config/api/premierLeague/config";

import type { Match } from "@/type";

import "../../app/globals.css";

const fetcher = async (url: string) => {
  try {
    const resp = await fetch(url, configRequest);

    const data = await resp.json();
    const matches = data.matches;

    return matches;
  } catch (error) {
    console.error(error);
  }
};

export default function Matches() {
  const [weekId, setWeekId] = useState<number>(0);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [gameWeek, setGameWeek] = useState<number>(0);

  const {
    data: matches,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR(
    startTime && endTime
      ? `/api/matches/weekv2/${weekId}?startDate=${startTime}&endDate=${endTime}`
      : null,
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount >= 3) return;
        setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 3000);
      },
    }
  );

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch("/api/matches/season");

        const data = await resp.json();
        const matches = data.matches;

        const gameWeekId = matches[0].gameweek.id;

        setWeekId(gameWeekId);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (weekId === 0) return;
    (async () => {
      try {
        const resp = await fetch(`/api/matches/week/${weekId}`);

        const data = await resp.json();
        const matches = data.matches;

        const startTime = matches[0].kickoff.label.split(",")[0];
        const endTime = matches[matches.length - 1].kickoff.label.split(",")[0];
        const gameWeek = matches[0].gameweek.gameweek;

        setGameWeek(gameWeek);
        setStartTime(formatTime(startTime));
        setEndTime(formatTime(endTime));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [weekId]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-5">
        <LineLoading />
      </div>
    );

  if (error) return <div> Cannot found any matches</div>;

  return (
    <div className="sm:px-5 mb-5">
      {gameWeek !== 0 && (
        <div className="text-[20px] lg:text-[20px] font-medium px-2 lg:px-4  py-2  gradient-text  text-transparent bg-clip-text">
          Vòng đấu {gameWeek}
        </div>
      )}

      {matches?.length > 0 &&
        matches.map((match: Match) => (
          <MatchCard key={match?.id} match={match} />
        ))}
    </div>
  );
}
