FROM node:20.5.1-slim

# RUN mkdir -p /usr/share/man/man1 && \
#     apt update && apt install -y \
#     git \
#     ca-certificates \
#     openjdk-11-jre

# ENV JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]