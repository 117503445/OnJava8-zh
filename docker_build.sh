docker build -t onjava8-builder -f Dockerfile.builder .
docker run --rm -v $PWD:/workspace onjava8-builder