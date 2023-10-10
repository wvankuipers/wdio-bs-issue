FROM node:20.7.0-alpine

WORKDIR /vr/

ENTRYPOINT /vr/build.sh
