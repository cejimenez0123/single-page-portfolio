
import { serve } from "https://deno.land/std@0.91.0/http/server.ts";
import { serveFile } from 'https://deno.land/std@0.91.0/http/file_server.ts';

const server = serve({ port: 8080 });

// const server = serve({ hostname: "fine-dragonfly-59-5g9228h1c9ss.deno.dev"});
for await (const req of server) {
  // req.respond({ body: "Hello from Deno!\n" });
  try {
    let filePath = req.url;

    if (filePath === "/") {
      filePath = "/index.html"; 
    }

    filePath = `./${filePath.substring(1)}`;


    const response = await serveFile(req, filePath);
    const headers = new Headers();
    headers.set("Content-Length", fileInfo.size.toString());
    response.headers.set("X-Custom-Header", "MyCustomHeaderValue");

    // You can also add Cache-Control headers if desired
    
    if(filePath.endsWith(".html")){
      response.headers.set("Content-Type", "text/html");
    } else if (filePath.endsWith(".css") ) {
      response.headers.set("Content-Type", "text/html");
    }else if(filePath.endsWith(".js")){
      response.headers.set("Content-Type", "application/javascript");
    }
 
    
    req.respond(response)
  } catch (_error) {
    req.respond({ status: 404, body: "Not Found" });
  }
}