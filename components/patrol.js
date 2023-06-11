import { useEffect, useState } from "react";

export default function Patrol({ point, cut, time, minute, tomorrow }) {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  const randomSecond = [];
  for (let i = 0; i < 42; i++) {
    let random = Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, "0");
    randomSecond.push(random);
  }

  const [second, setSecond] = useState([]);
  useEffect(() => {
    setSecond([...randomSecond]);
  }, []);

  const randomMin = [
    Math.ceil(Math.random() * 3)
      .toString()
      .padStart(2, "0"),
  ];

  if (minute) {
    randomMin.push(minute.toString().padStart(2, "0"));
  }

  for (let i = 0; i < 38; i++) {
    let random = Math.ceil(Math.random() * 1);
    if (Number(randomMin[randomMin.length - 1]) + random < 45) {
      randomMin.push(
        (Number(randomMin[randomMin.length - 1]) + random)
          .toString()
          .padStart(2, "0")
      );
    } else {
      randomMin.push(
        (Number(randomMin[randomMin.length - 1]) + 1)
          .toString()
          .padStart(2, "0")
      );
    }
  }

  const [min, setMin] = useState([]);
  useEffect(() => {
    setMin([...randomMin]);
  }, []);

  return cut.map((x, v) => {
    if (v < point) {
      return (
        <span key={x.number}>
          {`${month}-${tomorrow ? Number(day) + 1 : day}`}{" "}
          {time.toString().padStart(2, "0")}:{min[v + 1]}:{second[v]}{" "}
          &emsp;그랜드순찰&emsp;&emsp;&nbsp;
          {x.point}
        </span>
      );
    }
  });
}
