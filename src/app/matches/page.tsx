"use client";

import { useState, useEffect } from "react";

import useSWR from "swr";

import MatchCard from "@/component/MatchCard";
import LineLoading from "@/component/ui/LineLoading";
import { configRequest } from "@/config/api/premierLeague/config";

import type { Match } from "@/type";
import formatVietNamTimeV2 from "@/helper/formatVietNamTimeV2";
import formatTime from "@/helper/formatTime";
import useSWRInfinite from "swr/infinite";
import { useInView } from "react-intersection-observer";

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

const getKey = (pageIndex: number, prevData: []) => {
  if (prevData && !prevData.length) return null;
  return `/api/matches/seasonv2?page=${pageIndex}`;
};

export default function MatchesPage() {
  const [timeLabel, setTimeLabel] = useState<any[]>([]);
  const [gameWeek, setGameWeek] = useState<number[]>([]);

  const { ref, inView } = useInView();

  const {
    data: matches,
    error,
    isLoading,
    isValidating,
    size,
    setSize,
    mutate,
  } = useSWRInfinite(getKey, fetcher);

  useEffect(() => {
    if (!matches) return;
    let times = [] as string[];
    let weeks = [] as number[];

    for (const page of matches) {
      for (const match of page) {
        const time = match.kickoff.label;
        const week = match.gameweek.gameweek;

        if (times.find((t) => t.includes(formatVietNamTimeV2(time)))) continue;
        times.push(formatVietNamTimeV2(time));
        // if (weeks.includes(week)) {
        //   weeks.push(week);
        // }
      }
    }

    console.log(times);

    setTimeLabel(times);
    setGameWeek(weeks);
  }, [matches]);

  useEffect(() => {
    if (!inView) return;
    setSize(size + 1);
  }, [inView]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-5">
        <LineLoading />
      </div>
    );

  if (error) return <div>{error}</div>;

  console.log(matches);

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
            {time}
          </div>

          {matches?.map((page: []) =>
            (page ?? [])
              .filter(
                (match: Match) =>
                  formatVietNamTimeV2(match.kickoff.label) === time
              )
              .map((match: Match) => (
                <MatchCard key={match?.id} match={match} />
              ))
          )}
        </div>
      ))}

      {matches && (
        <div ref={ref} className="flex items-center justify-center mt-5">
          <LineLoading />
        </div>
      )}
    </div>
  );
}
