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
          <div className="flex flex-col p-2 space-y-0.5 text-xs">
            <Patrol
              point={30}
              cut={route.slice(8, route.length)}
              time={17}
              minute={12}
            />
            <Total />
          </div>
          <Person />
          <div className="flex flex-col p-2 space-y-0.5 text-xs">
            <Patrol point={17} cut={route} time={10} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col p-2 pb-0 space-y-0.5 text-xs">
            <Patrol
              point={21}
              cut={route.slice(17, route.length)}
              time={10}
              minute={20}
            />
            <Patrol point={31} cut={route} time={15} />
          </div>
        </div>
      </div>
      <NextPage currPage={2} nextPage={"/page3"} />
    </div>
  );
}
