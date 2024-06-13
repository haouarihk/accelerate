FROM oven/bun:alpine
RUN apk add nodejs

RUN bun upgrade

WORKDIR /app

COPY . .

RUN bun install

CMD bun start-node
