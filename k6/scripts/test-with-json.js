import http from "k6/http";
import { check, sleep } from "k6";
import { SharedArray } from "k6/data";

export const options = {
    scenarios: {
        scenarios_example: {
            executor: "per-vu-iterations",
            vus: 100,
            iterations: 100,
            maxDuration: "10s",
        },
    },
};

const data = new SharedArray("some name", function () {
    const f = JSON.parse(open("./test-with-json.json"));
    return f; // f must be an array
});

export default function () {
    const host = "http://host.docker.internal:8080";
    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const element = data[Math.floor(Math.random() * data.length)];

    const response = http.get(`${host}/test/${element}`, {
        params,
    });

    // const response = http.post(
    //     `${host}/api/hello`,
    //     JSON.stringify(element),
    //     params
    // );
    
    check(response, { "status is 200": (r) => r.status === 200 });

    sleep(1);
}
