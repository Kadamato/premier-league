import { clubLogos } from "@/config/clubLogos";
import formatVietNamTime from "@/helper/formatVietNamTime";
import type { Match } from "@/type";

export default function MatchCard({ match }: { match: Match }) {
  const { teams, ground } = match;

  const firstTeam = teams[0];
  const secondTeam = teams[1];
  const goals = match.goals;

  const score1 = firstTeam.score ?? null;
  const score2 = secondTeam.score ?? null;

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

  console.log(score1);

  return (
    <div className="group flex flex-col bg-zinc-100 lg:bg-white  rounded-xl mb-3 mx-1 sm:flex-row  items-center  py-4 md:py-3 px-3 text-[16px] justify-between transition-all md:rounded-lg cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#e95d3c] hover:to-[#e01f2d] ">
      <div className="hidden md:flex items-center w-full  md:w-2/4 justify-center">
        {/* first team */}
        <div className="flex items-center  w-[200px] justify-end">
          <div className="flex items-center ">
            <div className="font-medium flex lg:text-[15px] md:text-[14px] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap ">
              {firstTeamName}
            </div>

            <img
              src={firstClubLogo}
              alt={firstTeamShortNameLowerCase}
              className="w-[32px] h-[32px] object-cover ml-[6px] md:ml-3"
            />
          </div>
          <div className={`${score1 || score2 ? "flex" : "hidden"}  md:hidden`}>
            {score1}
          </div>
        </div>
        <div
          className={`${
            score1 == null && score2 == null ? "flex" : "hidden"
          } px-3 md:px-5 text-[14px]  `}
        >
          {timeZone}
        </div>

        <div
          className={` ${
            score1 != null && score2 != null ? "md:flex  hidden" : "hidden"
          } text-white px-2 text-[14px] bg-[#483C32] mx-1 rounded-lg py-[4px] font-bold  `}
        >
          {score1} - {score2}
        </div>
        {/* second team */}
        <div className=" flex items-center w-[200px] justify-start">
          <img
            src={secondClubLogo}
            alt={secondTeamShortNameLowerCase}
            className="w-[32px] h-[32px] mr-[6px] md:mr-3 object-cover"
          />
          <div className="font-medium flex  lg:text-[15px] md:text-[14px] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
            {secondTeamName}
          </div>
        </div>
      </div>

      {/* mobile  */}
      <div className="flex w-full items-center justify-between md:hidden">
        <div>
          <div className=" flex items-center  justify-start w-full">
            <img
              src={firstClubLogo}
              alt={firstTeamShortNameLowerCase}
              className="w-[32px] h-[32px] mr-[6px] md:mr-3 object-cover"
            />
            <div className="font-medium flex  lg:text-[15px] md:text-[14px] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
              {firstTeamName}
            </div>
          </div>

          <div className=" flex items-center  justify-start w-full mt-3">
            <img
              src={secondClubLogo}
              alt={secondTeamShortNameLowerCase}
              className="w-[32px] h-[32px] mr-[6px] md:mr-3 object-cover"
            />
            <div className="font-medium flex  lg:text-[15px] md:text-[14px] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
              {secondTeamName}
            </div>
          </div>
        </div>

        {score1 == null && score2 == null ? (
          <div className="flex items-center">
            <div className="text-[14px] mr-3">{timeZone}</div>
            <div className="group-hover:translate-x-[10px] transition-all mr-5 md:hidden flex">
              <img
                src="./icons/arrow-right.svg"
                alt=""
                className="w-[16px] h-[16px]"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="text-[14px] pr-3 font-bold mr-3">
              <div>{score1}</div>
              <div className="mt-3">{score2}</div>
            </div>

            <div className="group-hover:translate-x-[10px] transition-all mr-5 md:hidden flex">
              <img
                src="./icons/arrow-right.svg"
                alt=""
                className="w-[16px] h-[16px]"
              />
            </div>
          </div>
        )}
      </div>

      <div className="text-[14px] md:text-[15px] mt-2 sm:mt-0 text-left lg:w-1/4 hidden md:flex">
        {stadiumName}
      </div>
      <div className="group-hover:translate-x-[10px] transition-all mr-5 hidden md:flex">
        <img
          src="./icons/arrow-right.svg"
          alt=""
          className="md:w-[26px] md:h-[26px] w-[20px] h-[20px]"
        />
      </div>
    </div>
  );
}
