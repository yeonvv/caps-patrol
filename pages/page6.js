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
              point={9}
              cut={route.slice(29, route.length)}
              time={20}
              minute={33}
            />
            <Patrol point={38} cut={route} time={22} />
            <Patrol point={6} cut={route} time={1} tomorrow />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col px-2 pb-0 space-y-0.5 text-xs">
            <Patrol
              point={32}
              cut={route.slice(6, route.length)}
              time={1}
              minute={9}
              tomorrow
            />
            <Patrol point={21} cut={route} time={4} tomorrow />
          </div>
        </div>
      </div>
      <NextPage prevPage={"/page5"} currPage={6} nextPage={"/page7"} />
    </div>
  );
}
