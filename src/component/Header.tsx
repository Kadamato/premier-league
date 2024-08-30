import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="font-lexend  ">
      <div className="h-[45px] flex items-center px-2 sm:px-8 font-medium fixed bg-white  top-0 left-0  w-full  ">
        <Link href="/" className="hover:border-b-2 border-[#ED2939]">
          {/* <Image src="/images/logo.png" alt="logo" width={30} height={30} /> */}
          Home
        </Link>
        <Link
          href="/matches"
          className="ml-4 mr-4 text-[15px] hover:border-b-2 border-[#ED2939] "
        >
          Matches
        </Link>
        <Link
          href="/tables"
          className="mr-4 text-[15px]  hover:border-b-2 border-[#ED2939] "
        >
          Tables
        </Link>
        <Link
          href="/stats"
          className="mr-4 text-[15px]  hover:border-b-2 border-[#ED2939] "
        >
          Stats
        </Link>
      </div>
      <div className="h-[45px] w-full"></div>
    </div>
  );
}
