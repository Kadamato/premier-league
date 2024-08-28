"use client";

import { useState, useEffect } from "react";

import useSWR from "swr";

import MatchCard from "@/component/MatchCard";
import LineLoading from "@/component/ui/LineLoading";
import { configRequest } from "@/config/api/premierLeague/config";

import type { Match } from "@/type";
import formatVietNamTimeV2 from "@/helper/formatVietNamTimeV2";
import formatTime from "@/helper/formatTime";

const fetcher = async (url: string) => {
  try {
    const resp = await fetch(url, configRequest);

    if (resp.status !== 200) {
      throw new Error("Cannot found any matches");
    }
    const data = await resp.json();
    const matches = data.matches;

    return matches;
  } catch (error) {
    console.error(error);
  }
};

export default function MatchesPage() {
  const [timeLabel, setTimeLabel] = useState<any[]>([]);
  const [gameWeek, setGameWeek] = useState<number[]>([]);

  const {
    data: matches,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR(`/api/matches/seasonv2`, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount >= 3) return;
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 3000);
    },
  });

  useEffect(() => {
    if (!matches) return;
    let times = [] as string[];
    let weeks = [] as number[];

    for (const match of matches) {
      const time = match.kickoff.label;
      const week = match.gameweek.gameweek;

      if (times.find((t) => t.includes(time.split(",")[0]))) continue;
      times.push(time);
      // if (weeks.includes(week)) {
      //   weeks.push(week);
      // }
    }

    setTimeLabel(times);
    setGameWeek(weeks);
  }, [matches]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-5">
        <LineLoading />
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <div className="sm:px-5 mb-5">
      {/* {gameWeek !== 0 && (
        <div className="text-[20px] lg:text-[20px] font-medium px-2 lg:px-4  py-2 text-transparent gradient-text ">
          Matchweek {gameWeek}
        </div>
      )} */}

      {timeLabel.map((time, index) => (
        <div key={index}>
          {/* <div className="text-[20px] lg:text-[20px] font-medium px-2 lg:px-4  py-2 text-transparent gradient-text ">
            Matchweek {gameWeek[index]}
          </div> */}
          <div className="my-2 px-2 sm:px-4 text-[16px] font-medium">
            {formatVietNamTimeV2(time)}
          </div>
          {matches
            .filter(
              (match: Match) =>
                match.kickoff.label.split(",")[0] === time.split(",")[0]
            )
            .map((match: Match) => (
              <MatchCard key={match?.id} match={match} />
            ))}
        </div>
      ))}

      {matches && (
        <div className="flex items-center justify-center mt-5">
          <LineLoading />
        </div>
      )}
    </div>
  );
}
