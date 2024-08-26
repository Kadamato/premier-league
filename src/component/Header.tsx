import Link from "next/link";

export default function Header() {
  return (
    <div className="font-lexend">
      <div className="h-[45px] flex items-center px-2 sm:px-8 font-medium ">
        <Link href="/matches" className="pr-4 text-[15px]">
          Matches
        </Link>
        <Link href="/achievement" className="pr-4 text-[15px] ">
          Achievement
        </Link>
      </div>
    </div>
  );
}
