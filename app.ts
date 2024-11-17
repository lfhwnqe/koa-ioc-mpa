import { addAliases } from "module-alias";
addAliases({
  "@root": __dirname,
  "@interfaces": `${__dirname}/interface`,
  "@config": `${__dirname}/config`,
  "@middlewares": `${__dirname}/middlewares`,
});
import Koa from "koa";
import config from "@config/index";
const app = new Koa();

const { port, viewDir, memoryFlag, staticDir } = config;

// response
app.use((ctx) => {
  ctx.body = "Hello Koa";
});

app.listen(port, () => {
  console.log("BFF启动成功");
});
