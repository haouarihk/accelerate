Credit to: https://github.com/node-libraries/prisma-accelerate-local


example:
```yml
version: "3"

services:
  accelerate:
    image: wolfpat/accelerate
    restart: unless-stopped
    stop_signal: SIGKILL
    ports:
      - "4000:4000/tcp"
      - "4000:4000/udp"
    environment:
      - PORT=4000
      - HOST=0.0.0.0
      # database connection string optional
      - DATABASE_URL=
      # secret optional
      - SECRET=
```
