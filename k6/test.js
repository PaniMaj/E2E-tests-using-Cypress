import http from "k6/http";
import { check, sleep } from "k6";

// // export of vus and duration for sjorter command in terminal :)
// // k6 run --vus 11 --duration 5s test.js
// export const options = {
//   vus: 11,
//   duration: "6s",
// };

export const options = {
  stages: [
    { duration: "10s", target: 1000 },
    { duration: "5s", target: 2 },
    { duration: "2s", target: 0 },
  ],
};

export default function () {
  const response = http.get("http://localhost:4100/");
  check(response, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
