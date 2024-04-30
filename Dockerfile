FROM  docker.io/library/node
RUN npm install -g npm@latest
RUN npm install -g pnpm@latest
RUN mkdir -p /usr/local/src
COPY ./repo /usr/local/src/
WORKDIR /usr/local/src/repo
RUN pnpm install 
ENTRYPOINT pnpm dev
