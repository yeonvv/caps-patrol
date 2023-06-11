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
              point={31}
              cut={route.slice(7, route.length)}
              time={3}
              minute={11}
              tomorrow
            />
            <Patrol point={22} cut={route} time={6} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col px-2 pb-0 space-y-0.5 text-xs">
            <Patrol
              point={16}
              cut={route.slice(22, route.length)}
              time={6}
              minute={26}
              tomorrow
            />
            <Total total={152} />
          </div>
        </div>
      </div>
      <NextPage prevPage={"/page7"} currPage={8} nextPage={"/page8"} />
    </div>
  );
}
