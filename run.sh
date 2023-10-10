#!/bin/bash
set -e

docker build . --platform=linux/amd64 -t wdio-bs-test

docker run \
--platform=linux/amd64 \
-it --rm --user root --platform linux/amd64 \
-e BROWSERSTACK_USERNAME \
-e BROWSERSTACK_ACCESS_KEY \
-v .:/vr \
wdio-bs-test
