const { createServer, } = require("prisma-accelerate-local");
require("dotenv").config();
createServer({
  datasourceUrl: process.env.DATABASE_URL || "",
  secret: process.env.SECRET || "",
  fastifySeverOptions: {

  }
})
  .listen({
    port: +(process.env.PORT || 4000),
    host: process.env.HOST || "0.0.0.0",
  })
  .then((url) => console.log(`🚀  Server ready at ${url} `));
