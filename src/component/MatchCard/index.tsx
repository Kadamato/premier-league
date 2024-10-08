import { clubLogos } from "@/config/clubLogos";
import formatVietNamTime from "@/helper/formatVietNamTime";
import formatVietNamTimeV2 from "@/helper/formatVietNamTimeV2";
import formatVietNamTimeV3 from "@/helper/formatVietNamTimeV3";
import type { Match } from "@/type";

export default function MatchCard({ match }: { match: Match }) {
  const { teams, ground } = match;

  const firstTeam = teams[0];
  const secondTeam = teams[1];

  const score1 = firstTeam.score ?? null;
  const score2 = secondTeam.score ?? null;

  const firstTeamName = firstTeam.team.club.shortName;
  const secondTeamName = secondTeam.team.club.shortName;

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

  const clock = formatVietNamTimeV3(match.clock?.label || "") ?? null;

  const status = match.status; // L: playing  , U: recent play, C: end game

  console.log(match);

  return (
    <div className=" group flex flex-col bg-zinc-100 lg:bg-white  rounded-xl mb-3 mx-2 sm:flex-row  items-center  py-4 md:py-3 px-3 text-[16px] justify-between transition-all md:rounded-lg cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#e95d3c] hover:to-[#e01f2d] ">
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
            status == "U" ? "flex" : "hidden"
          } px-3 md:px-5 text-[14px]  `}
        >
          {timeZone}
        </div>

        <div
          className={` ${
            status === "C" ? "md:flex  hidden" : "hidden"
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

        {status == "U" ? (
          <div className="flex items-center justify-between sm:w-1/3 w-[40%]">
            <div className="text-[#ffffff] pr-4  "></div>
            <div className="flex flex-col items-center text-[13px] pr-3">
              <div>{timeZone}</div>
              <div className="text-[13px] text-left ">
                {formatVietNamTimeV2(match.kickoff.label)}
              </div>
            </div>

            <div className="group-hover:translate-x-[10px] transition-all pr-2 md:hidden flex">
              <img
                src="./icons/arrow-right.svg"
                alt=""
                className="w-[16px] h-[16px]"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between sm:w-1/3 w-[40%]">
            <div className="text-[14px] pr-4 font-semibold ">
              <div>{score1}</div>
              <div className="mt-3">{score2}</div>
            </div>

            <div className="text-[13px] text-left pr-2 flex flex-col items-center">
              {status == "L" ? (
                <div className="text-[#008000] font-medium">
                  Trực tiếp {clock}{" "}
                </div>
              ) : (
                ""
              )}

              {status == "C" ? <div>KT</div> : ""}

              <div>{formatVietNamTimeV2(match.kickoff.label.trim())}</div>
            </div>

            <div className="group-hover:translate-x-[10px] transition-all pr-2 md:hidden flex">
              <img
                src="./icons/arrow-right.svg"
                alt=""
                className="w-[16px] h-[16px]"
              />
            </div>
          </div>
        )}
      </div>

      <div className="text-[14px]  mt-2 sm:mt-0 text-left hidden md:flex">
        <div className="flex flex-col items-center">
          <div className="mr-2">{status === "C" && "KT,"}</div>
          {status == "L" ? (
            <div className="text-[#008000] font-medium">Trực tiếp {clock} </div>
          ) : (
            ""
          )}
          <div>{formatVietNamTimeV2(match.kickoff.label)}</div>
        </div>
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
