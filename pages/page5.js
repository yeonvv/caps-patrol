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
              point={33}
              cut={route.slice(5, route.length)}
              time={2}
              tomorrow
            />
            <Patrol point={20} cut={route} time={5} tomorrow />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col px-2 pb-0 space-y-0.5 text-xs">
            <Patrol
              point={18}
              cut={route.slice(20, route.length)}
              time={5}
              minute={23}
              tomorrow
            />
            <Total total={152} />
          </div>
          <Person />
          <Devide />
          <div className="flex flex-col px-2 pb-0 space-y-0.5 text-xs">
            <Patrol point={29} cut={route} time={20} />
          </div>
        </div>
      </div>
      <NextPage prevPage={"/page4"} currPage={5} nextPage={"/page6"} />
    </div>
  );
}
