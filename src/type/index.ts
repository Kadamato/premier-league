export type AltIds = {
  opta: string;
};

export type Clock = {
  secs: number;
  label: string;
};

export type CompSeason = {
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
};

export type CompetitionPhase = {
  gameweekRange: number[];
  id: number;
  type: string;
};

export type Gameweek = {
  id: number;
  compSeason: CompSeason;
  gameweek: number;
  competitionPhase: CompetitionPhase;
};

export type Goal = {
  assistId?: number;
  clock: Clock;
  description: string;
  personId: number;
  phase: string;
  type: string;
};

export type Ground = {
  name: string;
  city: string;
  source: string;
  id: number;
};

export type Kickoff = {
  completeness: number;
  millis: number;
  label: string;
  gmtOffset: number;
};

export type MatchOfficial = {
  birth: object;
  id: number;
  matchOfficialId: number;
  name: {
    display: string;
    first: string;
    last: string;
  };
  role: string;
};

export type Team = {
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
};

export type Match = {
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
};
