import { clubLogos } from "@/config/clubLogos";
import formatVietNamTime from "@/helper/formatVietNamTime";

interface AltIds {
  opta: string;
}

interface Clock {
  secs: number;
  label: string;
}

interface CompSeason {
  competition: {
    abbreviation: string;
    altIds: AltIds;
    description: string;
    id: number;
    level: string;
    source: string;
  };
  id: number;
  label: string;
}

interface CompetitionPhase {
  gameweekRange: number[];
  id: number;
  type: string;
}

interface Gameweek {
  id: number;
  compSeason: CompSeason;
  gameweek: number;
  competitionPhase: CompetitionPhase;
}

interface Goal {
  assistId?: number;
  clock: Clock;
  description: string;
  personId: number;
  phase: string;
  type: string;
}

interface Ground {
  name: string;
  city: string;
  source: string;
  id: number;
}

interface Kickoff {
  completeness: number;
  millis: number;
  label: string;
  gmtOffset: number;
}

interface MatchOfficial {
  birth: object;
  id: number;
  matchOfficialId: number;
  name: {
    display: string;
    first: string;
    last: string;
  };
  role: string;
}

interface Team {
  score: number;
  team: {
    altIds: AltIds;
    club: {
      abbr: string;
      id: number;
      name: string;
      shortName: string;
    };
    id: number;
    name: string;
    shortName: string;
    teamType: string;
  };
}

interface Match {
  altIds: AltIds;
  attendance: number;
  behindClosedDoors: boolean;
  clock: Clock;
  extraTime: boolean;
  fixtureType: string;
  gameweek: Gameweek;
  goals: Goal[];
  ground: Ground;
  id: number;
  kickoff: Kickoff;
  matchOfficials: MatchOfficial[];
  neutralGround: boolean;
  outcome: string;
  penaltyShootouts: object[];
  phase: string;
  provisionalKickoff: Kickoff;
  replay: boolean;
  shootout: boolean;
  status: string;
  teams: Team[];
}

export default function MatchCard({ match }: { match: Match }) {
  const { teams, ground } = match;

  const firstTeam = teams[0];
  const secondTeam = teams[1];
  const goals = match.goals;

  const score1 = firstTeam.score;
  const score2 = secondTeam.score;

  const firstTeamName = firstTeam.team.club.shortName;
  const secondTeamName = secondTeam.team.club.shortName;

  const firstTeamShortName = firstTeam.team.club.abbr;
  const secondTeamShortName = secondTeam.team.club.abbr;

  const firstTeamShortNameLowerCase = String(
    firstTeam.team.club.abbr.toLowerCase()
  );
  const secondTeamShortNameLowerCase = secondTeam.team.club.abbr.toLowerCase();

  const time = match.kickoff.label.split(",")[1];
  const bstTime = time.trim().split(" ")[0];
  const timeZone = formatVietNamTime(bstTime);

  const stadiumName = ground.name;

  const firstClubLogo = clubLogos[firstTeamShortNameLowerCase];
  const secondClubLogo = clubLogos[secondTeamShortNameLowerCase];

  return (
    <div className="group flex flex-col bg-zinc-100 lg:bg-white  rounded-xl mb-3 mx-1 sm:flex-row items-center  p-3 text-[16px] justify-between transition-all sm:rounded-lg cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#e95d3c] hover:to-[#e01f2d] ">
      <div className="flex items-center w-full md:w-2/4 justify-center">
        {/* first team */}
        <div className="flex items-center w-[200px] justify-end">
          <div className="font-medium flex md:text-[16px] md:text-[14px] text-[13px] overflow-hidden text-ellipsis whitespace-nowrap ">
            {firstTeamName}
          </div>

          <img
            src={firstClubLogo}
            alt={firstTeamShortNameLowerCase}
            className="w-[32px] h-[32px] object-cover ml-[6px] md:ml-3"
          />
        </div>
        <div
          className={`${
            !score1 && !score2 ? "flex" : "hidden"
          } px-3 md:px-5 text-[14px]  `}
        >
          {timeZone}
        </div>

        <div
          className={` ${
            score1 && score2 ? "flex" : "hidden"
          } px-5 text-[14px] bg-gradient-to-r from-[#f9b16e] to-[#f68080] mx-1 rounded-lg py-1 `}
        >
          {score1} - {score2}
        </div>
        {/* second team */}
        <div className="flex items-center w-[200px] justify-start">
          <img
            src={secondClubLogo}
            alt={secondTeamShortNameLowerCase}
            className="w-[32px] h-[32px] mr-[6px] md:mr-3 object-cover"
          />
          <div className="font-medium flex md:text-[16px] md:text-[14px] text-[13px] overflow-hidden text-ellipsis whitespace-nowrap">
            {secondTeamName}
          </div>
        </div>
      </div>

      <div className="text-[14px] md:text-[15px] mt-2 sm:mt-0 text-left lg:w-1/4">
        {stadiumName}
      </div>
      <div className="group-hover:translate-x-[10px] transition-all mr-5 ">
        <img
          src="./icons/arrow-right.svg"
          alt=""
          className="md:w-[26px] md:h-[26px] w-[20px] h-[20px]"
        />
      </div>
    </div>
  );
}
