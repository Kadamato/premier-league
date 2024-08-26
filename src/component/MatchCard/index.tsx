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
  const { teams, clock } = match;

  const firstTeam = teams[0];
  const secondTeam = teams[1];
  const goals = match.goals;

  const score1 = firstTeam.score;
  const score2 = secondTeam.score;

  const teamName1 = firstTeam.team.club.shortName;
  const teamName2 = secondTeam.team.club.shortName;

  const teamShortName1 = firstTeam.team.club.abbr;
  const teamShortName2 = secondTeam.team.club.abbr;

  return (
    <div className="group flex flex-col bg-zinc-100 lg:bg-white  rounded-xl mb-3 mx-1 sm:flex-row items-center  p-3 text-[16px] justify-between transition-all sm:rounded-lg cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#e95d3c] hover:to-[#e01f2d] ">
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="hidden lg:flex mr-3 w-[70px] overflow-hidden text-ellipsis whitespace-nowrap">
            {teamName1}
          </div>

          <div className="mr-3 lg:hidden flex ">{teamShortName1}</div>

          <img src="./images/image1.svg" alt="" />
        </div>
        <div
          className={`${score1 || score2 ? "hidden" : ""} px-5 text-[14px]  `}
        >
          16:30
        </div>

        <div className="px-5 text-[14px] ">
          {score1} - {score2}
        </div>

        <div className="flex items-center">
          <img src="./images/image.svg" alt="" className="mr-3" />
          <div className="hidden lg:flex mr-3 w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {teamName2}
          </div>
          <div className="mr-3 lg:hidden flex ">{teamShortName2}</div>
        </div>
      </div>

      <div className="text-[15px] mt-2 sm:mt-0">
        American Express Stadium, Falmer
      </div>
      <div className="group-hover:translate-x-[10px] transition-all mr-5">
        <img src="./icons/arrow-right.svg" alt="" />
      </div>
    </div>
  );
}
