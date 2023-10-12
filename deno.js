
import { serve } from "https://deno.land/std@0.91.0/http/server.ts";
// import { serveFile } from 'https://deno.land/std@0.91.0/http/file_server.ts';

const server = serve({ port: 8080 });
// const server = serve({ hostname: "fine-dragonfly-59-5g9228h1c9ss.deno.dev"});
for await (const req of server) {
  try {
    let filePath = req.url;

    if (filePath === "/") {
      filePath = "/index.html"; 
    }

    filePath = `./${filePath.substring(1)}`;

    const file = await Deno.open(filePath);
    const fileInfo = await Deno.stat(filePath);

    const headers = new Headers();
    headers.set("Content-Length", fileInfo.size.toString());

    if (filePath.endsWith(".html")) {
      headers.set("Content-Type", "text/html");
    } else if (filePath.endsWith(".css")) {
      headers.set("Content-Type", "text/css");
    } else if (filePath.endsWith(".js")) {
      headers.set("Content-Type", "application/javascript");
    }

    req.respond({ body: file, headers });
  } catch (error) {
    req.respond({ status: 404, body: "Not Found" });
  }
}