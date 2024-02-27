import http from "k6/http";
import { check, sleep } from "k6";

const apiUrl = "http://localhost:3000/api";

// Test setup and scenarios
export const options = {
  thresholds: {
    //define global thresholds for test > see other test results
    http_req_duration: ["p(95) < 250"],
    http_req_failed: ["rate <= 0.05"],
  },

  scenarios: {
    // scenario: authorization users
    authorization: {
      executor: "ramping-vus", //type of engine
      exec: "startAuthorization", //reference to function in test
      startVUs: 0,
      stages: [
        { duration: "1s", target: 25 },
        { duration: "10s", target: 0 },
      ],
    },
    // // scenario: show user list
    // users: {
    //   executor: "per-vu-iterations",
    //   exec: "getUser",
    //   vus: 40,
    //   iterations: 2,
    //   startTime: "5s", //delay
    // },
  },
};

export function startAuthorization() {
  const payload = JSON.stringify({
    login: "m.tuzimek@merixstudio.com",
    password: "H@slo123",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = http.post(`${apiUrl}/users/login`, payload, params);

  check(response, {
    "status code is 200": (r) => r.status == 200,
    "body include login": (r) => r.body.includes("m.tuzimek@merixstudio.com"),
  });

  sleep(1);
}

// export function getUser() {
//   const response = http.get("https://jsonplaceholder.typicode.com/users");

//   check(response, {
//     "status code is 200": (r) => r.status == 200,
//     "body is include": (r) => r.body.lenght > 0,
//   });

//   sleep(1);
// }
