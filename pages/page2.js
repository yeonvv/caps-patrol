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
              point={29}
              cut={route.slice(9, route.length)}
              time={17}
              minute={12}
            />
            <Total total={114} />
          </div>
          <Person />
          <Devide />
          <div className="flex flex-col px-2 space-y-0.5 text-xs">
            <Patrol point={18} cut={route} time={10} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col px-2 pb-0 space-y-0.5 text-xs">
            <Patrol
              point={20}
              cut={route.slice(18, route.length)}
              time={10}
              minute={22}
            />
            <Patrol point={33} cut={route} time={15} />
          </div>
        </div>
      </div>
      <NextPage prevPage={"/"} currPage={2} nextPage={"/page3"} />
    </div>
  );
}
