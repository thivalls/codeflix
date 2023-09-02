FROM node:16-buster-slim

RUN apt update && apt install -y --no-install-recommends \
    git \
    ca-certificates

USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]