import { createApp } from "./deps.ts";
const app = createApp();
app.handle("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
    }),
    body: "Hello, Servest!",
  });
});

app.get(new RegExp("^/foo/(.+)"), async (req) => {
  const [_, id] = req.match;
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ id }),
  });
});

app.listen({ port: 8899 });