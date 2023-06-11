import Devide from "@/components/devide";
import NextPage from "@/components/next-page";
import Patrol from "@/components/patrol";
import Person from "@/components/person";
import Route from "@/components/route";

export default function Home() {
  const { route } = Route();
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center space-x-16">
          <span className="text-2xl">순찰자별&ensp;보고서</span>
          <div className="flex">
            <div className="flex flex-col items-center border-2 border-black ">
              <div className="px-5 text-base border-b-2 border-black">
                조&emsp;장
              </div>
              <div className="h-20 w-full" />
            </div>
            <div className="flex flex-col items-center border-2 border-black border-l-0">
              <div className="px-5 text-base border-b-2 border-black">
                팀&emsp;장
              </div>
              <div className="h-20 w-full" />
            </div>
            <div className="flex flex-col items-center border-2 border-black border-l-0">
              <div className="px-3 text-base border-b-2 border-black">
                관리소장
              </div>
              <div className="h-20 w-full" />
            </div>
          </div>
        </div>
        <div className="flex w-full space-x-20 p-2 border-b border-black tracking-wider">
          <span className="text-base">
            작성일 : {`${year}-${month}-${day}`}
          </span>
          <span className="text-base">
            출력기간 : {`${year}-${month}-${day}`} 09:00 ~{" "}
            {`${year}-${month}-${day}`} 09:00
          </span>
        </div>
      </div>
      <div className="flex border-b border-black pb-2">
        <div className="flex flex-col w-1/2">
          <Person />
          <Devide />
          <div className="flex flex-col px-2 space-y-0.5 text-xs">
            <Patrol point={38} cut={route} time={9} />
            <Patrol point={3} cut={route} time={14} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col px-2 pb-0 space-y-0.5 text-xs">
            <Patrol
              point={35}
              cut={route.slice(3, route.length)}
              time={14}
              minute={6}
            />
            <Patrol point={9} cut={route} time={17} />
          </div>
        </div>
      </div>
      <NextPage prevPage={"/"} currPage={1} nextPage={"/page2"} />
    </div>
  );
}
