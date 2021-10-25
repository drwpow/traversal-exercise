const DEPENDENCY_GRAPH = {
  "/assets/app.js": [
    "/assets/carousel.js",
    "/assets/form.js",
    "/assets/router.js",
  ],
  "/assets/blog-header.jpg": [],
  "/assets/blog/post-1-header.jpg": [],
  "/assets/blog/post-2-header.jpg": [],
  "/assets/blog/post-3-header.jpg": [],
  "/assets/carousel.js": [],
  "/assets/colors.css": ["/assets/vars.css"],
  "/assets/form.js": [],
  "/assets/global.css": ["/assets/colors.css", "/assets/vars.css"],
  "/assets/home-header.jpg": [],
  "/assets/router.js": [],
  "/assets/vars.css": ["/assets/colors.css"],
  "/blog/index.html": [
    "/assets/app.js",
    "/assets/blog-header.jpg",
    "/assets/global.css",
    "/favicon.ico",
  ],
  "/blog/posts/post-1/index.html": [
    "/assets/blog/post-1-header.jpg",
    "/assets/global.css",
    "/favicon.ico",
  ],
  "/blog/posts/post-2/index.html": [
    "/assets/blog/post-2-header.jpg",
    "/assets/global.css",
    "/favicon.ico",
  ],
  "/blog/posts/post-3/index.html": [
    "/assets/blog/post-3-header.jpg",
    "/assets/global.css",
    "/favicon.ico",
  ],
  "/favicon.ico": [],
  "/index.html": [
    "/assets/app.js",
    "/assets/global.css",
    "/assets/home-header.jpg",
    "/favicon.ico",
  ],
};

function crawlDependencyGraph(url) {
  const foundModules = [];
  // given an entry URL, return an array of all dependencies needed
  return foundModules;
}

exports.DEPENDENCY_GRAPH = DEPENDENCY_GRAPH;
exports.crawlDependencyGraph = crawlDependencyGraph;
