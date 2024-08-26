"use client";
import formatTime from "@/helper/formatTime";
import MatchCard from "../MatchCard";
import { useEffect, useState } from "react";
import formatTimeByMonthAndDay from "@/helper/formatTimeByMonthAndDay";
import LineLoading from "../ui/LineLoading";

export default function Matches() {
  const [weekId, setWeekId] = useState<number>(0);
  const [matches, setMatches] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [timeLabel, setTimeLabel] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        let times = [] as string[];
        const resp = await fetch("/api/matches/season");

        const data = await resp.json();
        const matches = data.matches;

        const gameWeekId = matches[0].gameweek.id;

        const startTime = matches[0].kickoff.label.split(",")[0];
        const endTime = matches[matches.length - 1].kickoff.label.split(",")[0];

        for (const match of matches) {
          const time = match.kickoff.label.split(",")[0];
          if (times.includes(String(time.trim()))) continue;
          times.push(time);
        }

        setTimeLabel(times);
        setStartTime(formatTime(startTime));
        setEndTime(formatTime(endTime));

        setWeekId(gameWeekId);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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
  }, [weekId, startTime, endTime]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="sm:px-5 mb-5">
      {timeLabel.map((time, index) => (
        <div key={index}>
          <div className="my-2 px-2 sm:px-4 text-[16px] font-medium">
            {time}
          </div>
          {matches
            .filter((match) => match.kickoff.label.split(",")[0] === time)
            .map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
        </div>
      ))}
    </div>
  );
}
