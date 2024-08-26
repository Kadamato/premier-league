"use client";
import formatTime from "@/helper/formatTime";
import MatchCard from "../MatchCard";
import { useEffect, useState } from "react";

export default function Matches() {
  const [weekId, setWeekId] = useState<number>(0);
  const [matches, setMatches] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch("/api/matches/season");

        const data = await resp.json();
        const matches = data.matches;

        const gameWeekId = matches[0].gameweek.id;

        // const matchesRecent = matches.filter(
        //   (match: object) => match?.gameweek?.id === gameWeekId
        // );

        // const startTime = matchesRecent[0].kickoff.label;
        // const endTime = matchesRecent[matchesRecent.length - 1].kickoff.label;

        // setStartTime(startTime);
        // setEndTime(endTime);

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
        const matchesList = data.matches;

        //  get start time and end time of the game week
        const startTime = matchesList[0].kickoff.label.split(",")[0];
        const endTime =
          matchesList[matchesList.length - 1].kickoff.label.split(",")[0];

        setStartTime(formatTime(startTime));
        setEndTime(formatTime(endTime));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [weekId]);

  useEffect(() => {
    if (weekId === 0 && !startTime && !endTime) return;

    setIsLoading(true);

    (async () => {
      try {
        const resp = await fetch(
          `/api/matches/weekv2/${weekId}?startDate=${startTime}&endDate=${endTime}`
        );

        const data = await resp.json();
        const matches = data.matches;

        setMatches(matches);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    })();
  }, [startTime, endTime]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="my-2 px-2 sm:px-8 text-[18px] font-medium">August 24</div>
      <div className="sm:px-5">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
