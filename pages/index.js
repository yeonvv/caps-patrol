import Devide from "@/components/devide";
import Patrol from "@/components/patrol";
import Person from "@/components/person";
import { useEffect, useState } from "react";

export default function Home() {
  let route = [
    { number: 0, point: "순찰시작" },
    { number: 1, point: "109동 노인정" },
    { number: 2, point: "109동" },
    { number: 3, point: "202B B1 1" },
    { number: 4, point: "202B B1 2" },
    { number: 5, point: "202B B2" },
    { number: 6, point: "202B B3" },
    { number: 7, point: "202A B3" },
    { number: 8, point: "202A B2" },
    { number: 9, point: "202A B1 1" },
    { number: 10, point: "202A B1 2" },
    { number: 11, point: "101동" },
    { number: 12, point: "101동 노인정" },
    { number: 13, point: "102동" },
    { number: 14, point: "103동" },
    { number: 15, point: "103동 샛길" },
    { number: 16, point: "105동" },
    { number: 17, point: "106동" },
    { number: 18, point: "203 B1" },
    { number: 19, point: "203 B2" },
    { number: 20, point: "203 B3" },
    { number: 21, point: "204B B1 1" },
    { number: 22, point: "108동" },
    { number: 23, point: "107동" },
    { number: 24, point: "204B B1 2" },
    { number: 25, point: "204B B2" },
    { number: 26, point: "204B B3" },
    { number: 27, point: "204A B3" },
    { number: 28, point: "204A B2" },
    { number: 29, point: "204A B1 1" },
    { number: 30, point: "204A B1 2" },
    { number: 31, point: "111동 필로티" },
    { number: 32, point: "111동" },
    { number: 33, point: "111동 정자" },
    { number: 34, point: "ATM" },
    { number: 35, point: "110B동" },
    { number: 36, point: "110A동" },
    { number: 37, point: "상황실 대기" },
    { number: 38, point: "101동 출동" },
    { number: 39, point: "102동 출동" },
    { number: 40, point: "103동 출동" },
    { number: 41, point: "105동 출동" },
    { number: 42, point: "106동 출동" },
    { number: 43, point: "107동 출동" },
    { number: 44, point: "108동 출동" },
    { number: 45, point: "109동 출동" },
    { number: 46, point: "110A동 출동" },
    { number: 47, point: "110B동 출동" },
    { number: 48, point: "111동 출동" },
  ];
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  return (
    <div className="tracking-widest">
      <div className="font-sans flex flex-col items-center">
        <div className="flex justify-center space-x-16 mb-3">
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
      <div className="flex border-b border-black mb-2">
        <div className="flex flex-col w-1/2">
          <Person />
          <Devide />
          <div className="flex flex-col p-2 space-y-0.5 text-xs">
            <Patrol point={38} cut={route} time={9} />
            <Patrol point={2} cut={route} time={14} />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col p-2 space-y-0.5 text-xs">
            <Patrol point={36} cut={route.slice(2, route.length)} time={14} />
            <Patrol point={8} cut={route} time={17} />
          </div>
          {/* <div className="w-2/3 pb-2 text-sm border-b border-black">
            * 순찰지점수 : &emsp;&emsp;&emsp;&emsp;114 개소
          </div> */}
        </div>
      </div>
      <div className="text-sm text-center">Page 1</div>
    </div>
  );
}
