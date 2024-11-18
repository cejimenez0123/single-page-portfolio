
Deno.serve(async (req:Request) => {
  const url = new URL(req.url);

  // Determine the file to serve
  let filePath = url.pathname === "/" ? "index.html" : url.pathname.slice(1);

  try {
    // Read the requested file
    const content = await Deno.readFile(filePath);
    const contentType = getContentType(filePath);
    return new Response(content, {
      headers: { "Content-Type": contentType },
    });
  } catch {
    return new Response("File not found", { status: 404 });
  }
});

function getContentType(path: string): string {
  if (path.endsWith(".html")) return "text/html";
  if (path.endsWith(".js")) return "application/javascript";
  if (path.endsWith(".css")) return "text/css";
  return "application/octet-stream";
}
