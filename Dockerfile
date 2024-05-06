FROM  docker.io/library/node
RUN npm install -g npm@latest
RUN npm install -g pnpm@latest
RUN mkdir -p /usr/local/src/node
COPY ./repo /usr/local/src/node
WORKDIR /usr/local/src/node
RUN pnpm install 
#ENTRYPOINT pnpm dev
