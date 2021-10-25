const { crawlDependencyGraph } = require("./index.js");

const TEST_CASES = [
  {
    given: "/index.html",
    want: [
      "/assets/app.js",
      "/assets/carousel.js",
      "/assets/colors.css",
      "/assets/form.js",
      "/assets/global.css",
      "/assets/home-header.jpg",
      "/assets/router.js",
      "/assets/vars.css",
      "/favicon.ico",
    ],
  },
  {
    given: "/blog/index.html",
    want: [
      "/assets/app.js",
      "/assets/blog-header.jpg",
      "/assets/carousel.js",
      "/assets/colors.css",
      "/assets/form.js",
      "/assets/global.css",
      "/assets/router.js",
      "/assets/vars.css",
      "/favicon.ico",
    ],
  },
  {
    given: "/blog/posts/post-1/index.html",
    want: [
      "/assets/blog/post-1-header.jpg",
      "/assets/colors.css",
      "/assets/global.css",
      "/assets/vars.css",
      "/favicon.ico",
    ],
  },
  {
    given: "/blog/posts/post-2/index.html",
    want: [
      "/assets/blog/post-2-header.jpg",
      "/assets/colors.css",
      "/assets/global.css",
      "/assets/vars.css",
      "/favicon.ico",
    ],
  },
  {
    given: "/blog/posts/post-3/index.html",
    want: [
      "/assets/blog/post-3-header.jpg",
      "/assets/colors.css",
      "/assets/global.css",
      "/assets/vars.css",
      "/favicon.ico",
    ],
  },
];

for (const { given, want } of TEST_CASES) {
  const got = crawlDependencyGraph(given);
  if (got.length !== want.length)
    throw new Error(
      `${given} mismatch: wanted ${want.length} modules; got ${got.length} modules.`
    );
  for (const wanted of want) {
    if (!got.includes(wanted)) {
      throw new Error(`${given}: did not receive module ${wanted}`);
    }
  }
}

console.log("✅ All tests passed!");
