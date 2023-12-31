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
              point={5}
              cut={route.slice(33, route.length)}
              time={15}
              minute={36}
            />
            <Patrol point={38} cut={route} time={18} />
            <Total total={114} />
          </div>
          <Person />
          <Devide />
          <div className="flex flex-col px-2 space-y-0.5 text-xs">
            <Patrol point={4} cut={route} time={13} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col px-2 pb-0 space-y-0.5 text-xs">
            <Patrol
              point={34}
              cut={route.slice(4, route.length)}
              time={13}
              minute={7}
            />
            <Patrol point={19} cut={route} time={16} />
          </div>
        </div>
      </div>
      <NextPage prevPage={"/page2"} currPage={3} nextPage={"/page4"} />
    </div>
  );
}
