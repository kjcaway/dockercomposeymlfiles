import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  scenarios: {
    scenarios_example: {
      executor: "per-vu-iterations",
      vus: 10,
      iterations: 3,
      maxDuration: "30s",
    },
  },
};
export default function () {
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = http.get("http://host.docker.internal:8080/api/hello", {
    params,
  });
  check(response, { "status is 200": (r) => r.status === 200 });

  sleep(1)
}
