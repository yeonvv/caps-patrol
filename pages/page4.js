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
              point={19}
              cut={route.slice(19, route.length)}
              time={16}
              minute={23}
            />
            <Total total={76} />
          </div>
          <Person />
          <Devide />
          <div className="flex flex-col px-2 space-y-0.5 text-xs">
            <Patrol point={28} cut={route} time={19} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col px-2 pb-0 space-y-0.5 text-xs">
            <Patrol
              point={10}
              cut={route.slice(28, route.length)}
              time={19}
              minute={31}
            />
            <Patrol point={38} cut={route} time={23} />
            <Patrol point={5} cut={route} time={2} tomorrow />
          </div>
        </div>
      </div>
      <NextPage prevPage={"/page3"} currPage={4} nextPage={"/page5"} />
    </div>
  );
}
