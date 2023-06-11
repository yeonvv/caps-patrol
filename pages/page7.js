import Devide from "@/components/devide";
import NextPage from "@/components/next-page";
import Patrol from "@/components/patrol";
import Person from "@/components/person";
import Route from "@/components/route";
import Total from "@/components/total";

export default function Page2() {
  const { route } = Route();
  return (
    <div>
      <div className="flex border-b border-black pb-2">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col px-2 space-y-0.5 text-xs">
            <Patrol
              point={17}
              cut={route.slice(25, route.length)}
              time={4}
              minute={25}
              tomorrow
            />
            <Total total={152} />
          </div>
          <Person />
          <Devide />
          <div className="flex flex-col px-2 space-y-0.5 text-xs">
            <Patrol point={30} cut={route} time={21} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col px-2 pb-0 space-y-0.5 text-xs">
            <Patrol
              point={8}
              cut={route.slice(30, route.length)}
              time={21}
              minute={34}
            />
            <Patrol point={38} cut={route} time={0} tomorrow />
            <Patrol point={7} cut={route} time={3} tomorrow />
          </div>
        </div>
      </div>
      <NextPage prevPage={"/page6"} currPage={7} nextPage={"/page8"} />
    </div>
  );
}
