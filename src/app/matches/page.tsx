"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { useInView } from "react-intersection-observer";

import MatchCard from "@/component/MatchCard";
import LineLoading from "@/component/ui/LineLoading";
import { configRequest } from "@/config/api/premierLeague/config";

import type { Match } from "@/type";
import formatVietNamTimeV2 from "@/helper/formatVietNamTimeV2";

const fetcher = async (url: string) => {
  try {
    const resp = await fetch(url, configRequest);

    if (resp.status !== 200) {
      throw new Error("Cannot found any matches");
    }
    const data = await resp.json();
    return data.matches ?? [];
  } catch (error) {
    console.error(error);
  }
};

const getKey = (pageIndex: number, prevData: []) => {
  if (prevData && !prevData.length) return null;
  return `/api/matches/seasonv2?page=${pageIndex}`;
};

export default function MatchesPage() {
  const [timeLabel, setTimeLabel] = useState<string[]>([]);
  const [gameWeeks, setGameWeeks] = useState<number[]>([]);

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
    if (!matches || matches.includes(undefined)) return;
    // const times: string[] = [];
    const weeks: number[] = [];

    for (const page of matches) {
      for (const match of page) {
        // const time = formatVietNamTimeV2(match.kickoff.label);
        const week = match.gameweek.gameweek;

        // if (!times.includes(time)) times.push(time);
        if (!weeks.includes(week)) weeks.push(week);
      }
    }

    // setTimeLabel(times);
    setGameWeeks(weeks);
  }, [matches]);

  useEffect(() => {
    if (inView && !isLoading && !isValidating) setSize(size + 1);
  }, [inView, size, setSize]);

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
      {!matches?.includes(undefined) ? (
        gameWeeks.map((week) => {
          return matches?.map((page: []) =>
            page
              .filter((match: Match) => match.gameweek.gameweek === week)
              .map((match: Match, i: number) => (
                <div key={i}>
                  {i === 0 && (
                    <div className="text-[20px] lg:text-[20px] font-medium px-2 lg:px-4 py-2 text-transparent gradient-text">
                      Matchweek {week}
                    </div>
                  )}
                  <MatchCard key={match?.id} match={match} />
                </div>
              ))
          );
        })
      ) : (
        <div>Cannot found any matches</div>
      )}

      {!matches?.includes(undefined) && (
        <div ref={ref} className="flex items-center justify-center mt-5">
          <LineLoading />
        </div>
      )}
    </div>
  );
}
