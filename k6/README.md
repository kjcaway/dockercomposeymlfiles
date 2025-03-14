### k6
- 부하테스트

## Use
- Docker execute
    ```bash
    cat test.js | docker run --rm -i --net=host grafana/k6 run -
    # if you want to read json file
    cat test-with-json.js | docker run -v $(pwd):/home/k6 --rm -i --net=host grafana/k6 run -
    ```
- Docker-compose
    ```bash
    docker-compose run k6 run /scripts/test.js
    ```