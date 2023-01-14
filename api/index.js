var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-GFOTZQRJ.css";

// app/components/header.jsx
var import_react_router_dom2 = require("react-router-dom");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-DZDH23UC.svg";

// app/components/navigator.jsx
var import_react_router_dom = require("react-router-dom");

// public/img/cart.png
var cart_default = "/build/_assets/cart-2445OMQO.png";

// app/components/navigator.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navigator() {
  let location = (0, import_react_router_dom.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navegation", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react_router_dom.Link,
      {
        to: "/",
        className: location === "/" ? "active" : "",
        children: "Home"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navigator.jsx",
        lineNumber: 8,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react_router_dom.Link,
      {
        to: "/aboutus",
        className: location === "/aboutus" ? "active" : "",
        children: "About us"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navigator.jsx",
        lineNumber: 11,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react_router_dom.Link,
      {
        to: "/blog",
        className: location === "/blog" ? "active" : "",
        children: "Blog"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navigator.jsx",
        lineNumber: 14,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react_router_dom.Link,
      {
        to: "/store",
        className: location === "/store" ? "active" : "",
        children: "Store"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navigator.jsx",
        lineNumber: 17,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react_router_dom.Link,
      {
        to: "/cart",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: cart_default, alt: "cart icon" }, void 0, !1, {
          fileName: "app/components/navigator.jsx",
          lineNumber: 23,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/navigator.jsx",
        lineNumber: 20,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/navigator.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: logo_default, alt: "logo of af store" }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 10,
      columnNumber: 30
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navigator, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/disclaimer.jsx
var import_react2 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Disclaimer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "disclaimer", children: [
    "All trademarks, logos and images are the ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "property of their respective owners. " }, void 0, !1, {
      fileName: "app/components/disclaimer.jsx",
      lineNumber: 5,
      columnNumber: 72
    }, this),
    "All company, product and service names used in this website are for ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "learning and educational purposes only. " }, void 0, !1, {
      fileName: "app/components/disclaimer.jsx",
      lineNumber: 6,
      columnNumber: 77
    }, this),
    "Use of these names,trademarks and brands ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "does not imply endorsement." }, void 0, !1, {
      fileName: "app/components/disclaimer.jsx",
      lineNumber: 7,
      columnNumber: 50
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/disclaimer.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/footer.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Navigator, {}, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Disclaimer, {}, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/root.jsx
var import_react4 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function meta() {
  return {
    charset: "utf-8",
    title: "AF Store - Home",
    viewport: "width=device-width, initial-scale=1"
  };
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  let ordersLS = typeof window < "u" ? JSON.parse(localStorage.getItem("orders")) ?? [] : null, [orders, setOrders] = (0, import_react4.useState)(ordersLS);
  return (0, import_react4.useEffect)(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react3.Outlet,
    {
      context: { addToCart: (sneakerOrdered) => {
        if (orders.some((sneakerIter) => sneakerIter.id === sneakerOrdered.id)) {
          let updatedCart = orders == null ? void 0 : orders.map((sneakerIter) => (sneakerIter.id === sneakerOrdered.id && (sneakerIter.quantity = sneakerOrdered.quantity), sneakerIter));
          setOrders(updatedCart);
        } else
          setOrders([...orders, sneakerOrdered]);
        return !0;
      }, orders, clearCart: () => {
        setOrders([]);
      }, updateQuantity: (sneakerOrdered) => {
        let updatedCart = orders.map((sneakerIter) => (sneakerIter.id === sneakerOrdered.id && (sneakerIter.quantity = sneakerOrdered.quantity), sneakerIter));
        setOrders(updatedCart);
      }, deleteFromCart: (sneakerOrderedId) => {
        let updatedCart = orders.filter((sneakerIter) => sneakerIter.id !== sneakerOrderedId);
        setOrders(updatedCart);
      } }
    },
    void 0,
    !1,
    {
      fileName: "app/root.jsx",
      lineNumber: 89,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 88,
    columnNumber: 9
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 101,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 102,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 105,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 107,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 108,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 104,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 99,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  let error = (0, import_react3.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: error.status }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 121,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: error.statusText }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 122,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.Link, { to: "/", className: "error-link", children: "Go back to homepage" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 123,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 120,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 119,
    columnNumber: 9
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: error.status }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 134,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: error.statusText }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 135,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.Link, { to: "/", className: "error-link", children: "Go back to homepage" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 136,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 133,
    columnNumber: 12
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 132,
    columnNumber: 9
  }, this);
}

// app/routes/aboutus.jsx
var aboutus_exports = {};
__export(aboutus_exports, {
  default: () => AboutUs,
  links: () => links2,
  meta: () => meta2
});

// public/img/aboutus.jpg
var aboutus_default = "/build/_assets/aboutus-57FXRZRB.jpg";

// app/styles/aboutus.css
var aboutus_default2 = "/build/_assets/aboutus-SG2KQJIR.css";

// app/routes/aboutus.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function meta2() {
  return {
    title: "About Us"
  };
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: aboutus_default2
    },
    {
      rel: "preload",
      href: aboutus_default,
      as: "image"
    }
  ];
}
function AboutUs() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "container aboutus main-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "heading", children: "About us" }, void 0, !1, {
      fileName: "app/routes/aboutus.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: aboutus_default, alt: "Header" }, void 0, !1, {
        fileName: "app/routes/aboutus.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Pellentesque vitae urna sed sem porta ornare eget vitae risus. Vestibulum at ornare neque. Morbi cursus imperdiet metus nec laoreet. Proin felis mi, porta sollicitudin magna in, laoreet tristique massa. Proin faucibus sagittis egestas. Vivamus non gravida turpis. Aenean suscipit libero ut tincidunt fermentum. Morbi blandit maximus orci, nec congue felis varius vestibulum. Integer tincidunt congue semper." }, void 0, !1, {
          fileName: "app/routes/aboutus.jsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Pellentesque vitae urna sed sem porta ornare eget vitae risus. Vestibulum at ornare neque. Morbi cursus imperdiet metus nec laoreet. Proin felis mi, porta sollicitudin magna in, laoreet tristique massa. Proin faucibus sagittis egestas. Vivamus non gravida turpis. Aenean suscipit libero ut tincidunt fermentum. Morbi blandit maximus orci, nec congue felis varius vestibulum. Integer tincidunt congue semper." }, void 0, !1, {
          fileName: "app/routes/aboutus.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/aboutus.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/aboutus.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/aboutus.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links3,
  loader: () => loader
});
var import_react7 = require("@remix-run/react");

// app/components/sneaker.jsx
var import_react_router_dom3 = require("react-router-dom"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Sneaker({ sneaker }) {
  let { title, description, price, image, url } = sneaker.attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "sneaker", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "sneakerTitle", children: title }, void 0, !1, {
      fileName: "app/components/sneaker.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_router_dom3.Link, { to: `/store/${url}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: image.data.attributes.formats.medium.url, alt: `${title} sneaker` }, void 0, !1, {
      fileName: "app/components/sneaker.jsx",
      lineNumber: 9,
      columnNumber: 36
    }, this) }, void 0, !1, {
      fileName: "app/components/sneaker.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "description ", children: description }, void 0, !1, {
      fileName: "app/components/sneaker.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "price-product ", children: [
      price,
      " \u20AC"
    ] }, void 0, !0, {
      fileName: "app/components/sneaker.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_router_dom3.Link, { to: `/store/${url}`, className: "linkTo", children: "Shop now" }, void 0, !1, {
      fileName: "app/components/sneaker.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/sneaker.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/sneaker.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/models/course.server.js
async function getCourse() {
  return await (await fetch(`${process.env.API_URL}/course?populate=image`)).json();
}

// app/models/posts.server.js
async function getAllPosts() {
  return await (await fetch(`${process.env.API_URL}/posts?populate=image`)).json();
}
async function getPostByURL(url) {
  return await (await fetch(`${process.env.API_URL}/posts/?filters[url]=${url}&populate=image`)).json();
}
async function getLastTwoPosts() {
  return await (await fetch(`${process.env.API_URL}/posts?sort=createdAt:DESC&pagination[limit]=2&populate=image`)).json();
}

// app/models/sneakers.server.js
async function getAllSneakers() {
  return await (await fetch(`${process.env.API_URL}/sneakers?populate=image`)).json();
}
async function getSneakerByURL(url) {
  return await (await fetch(`${process.env.API_URL}/sneakers/?filters[url]=${url}&populate=image`)).json();
}
async function getSneakersOnSale() {
  return await (await fetch(`${process.env.API_URL}/sneakers/?filters[onSale]=true&populate=image`)).json();
}

// app/styles/home.css
var home_default = "/build/_assets/home-5LXV6BQT.css";

// app/styles/store.css
var store_default = "/build/_assets/store-2BOWUYPS.css";

// app/styles/posts.css
var posts_default = "/build/_assets/posts-6MRK7ZOO.css";

// app/components/course.jsx
var import_react5 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Course({ course }) {
  var _a;
  let { title, content, image } = course.attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "course", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("style", { jsx: "true", children: `.course{
                background-image:linear-gradient(to right, rgb(0 0 0 /.8 ),rgb(0 0 0 /.6)), url(${(_a = image == null ? void 0 : image.data[0]) == null ? void 0 : _a.attributes.url})
            }` }, void 0, !1, {
      fileName: "app/components/course.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container course-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "heading", children: title }, void 0, !1, {
        fileName: "app/components/course.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: content }, void 0, !1, {
        fileName: "app/components/course.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { children: "Sign up" }, void 0, !1, {
        fileName: "app/components/course.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/course.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/course.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/course.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/post.jsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Post({ post }) {
  let { title, publishedAt, content, url } = post.attributes, calculateTimeReading = (text) => Math.ceil(text.split(" ").length / 200);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "container post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { children: title }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "details", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "date", children: new Date(publishedAt).toLocaleDateString() }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { title: "Calculated by the 200 words average rule", className: "time", children: [
        "~ ",
        calculateTimeReading(content),
        " min read"
      ] }, void 0, !0, {
        fileName: "app/components/post.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "summaryPost", children: content }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react6.Link, { to: `/blog/${url}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { className: "img-post", src: post == null ? void 0 : post.attributes.image.data[0].attributes.formats.large.url, alt: `Cover for the post titled ${title}` }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 18,
      columnNumber: 40
    }, this) }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react6.Link, { className: "linkTo", to: `/blog/${url}`, children: "Read post" }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/post.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
async function loader() {
  let [sneakers, posts, course] = await Promise.all([
    getSneakersOnSale(),
    getLastTwoPosts(),
    getCourse()
  ]);
  return {
    sneakers,
    posts,
    course
  };
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: home_default
    },
    {
      rel: "stylesheet",
      href: store_default
    },
    {
      rel: "stylesheet",
      href: posts_default
    }
  ];
}
function Index() {
  var _a, _b, _c, _d;
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "container sneakers-sale", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "heading", children: "Sneakers on sale" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "sneakers-grid", children: (_b = (_a = data.sneakers) == null ? void 0 : _a.data) == null ? void 0 : _b.map((sneaker) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Sneaker, { className: "sneaker-home", sneaker }, sneaker.id, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Course, { course: data.course.data }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "container latests-posts", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "heading", children: "Latests posts" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "posts-grid", children: (_d = (_c = data.posts) == null ? void 0 : _c.data) == null ? void 0 : _d.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Post, { className: "posts-home", post }, post.id, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/store.jsx
var store_exports = {};
__export(store_exports, {
  default: () => Store,
  links: () => links4
});
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function links4() {
  return [
    {
      rel: "stylesheet",
      href: store_default
    }
  ];
}
function Store() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "container main-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react8.Outlet, { context: (0, import_react8.useOutletContext)() }, void 0, !1, {
    fileName: "app/routes/store.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/store.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/store/$sneakerURL.jsx
var sneakerURL_exports = {};
__export(sneakerURL_exports, {
  default: () => Sneaker2,
  links: () => links5,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react"), import_react10 = require("react");

// public/img/success.svg
var success_default = "/build/_assets/success-UNJJU3CF.svg";

// app/routes/store/$sneakerURL.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
async function loader2({ params }) {
  let { sneakerURL } = params, sneaker = await getSneakerByURL(sneakerURL);
  if (!sneaker || sneaker.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Sneaker not found"
    });
  return sneaker;
}
function meta3({ data }) {
  if (!data)
    return {
      title: "Sneaker not found",
      description: "Sneakers on sale, model not found"
    };
  let { title } = data.data[0].attributes;
  return {
    title: `AF Store - ${title}`,
    description: `Sneaker on sale, model ${title}`
  };
}
function links5() {
  return [
    {
      rel: "stylesheet",
      href: store_default
    }
  ];
}
function Sneaker2() {
  let [orderDetails, setOrderDetails] = (0, import_react10.useState)({
    quantity: 0,
    size: 0
  }), [alertVisible, setAlertVisible] = (0, import_react10.useState)(!1), { addToCart } = (0, import_react9.useOutletContext)(), sneaker = (0, import_react9.useLoaderData)(), sizes = [37, 40, 41, 42, 43, 44, 45, 46], { title, description, price, image, url } = sneaker.data[0].attributes, handleChange = (e) => {
    let { id, value } = e.target;
    setOrderDetails({ ...orderDetails, [id]: +value });
  }, handleAlertVisiblity = () => {
    setAlertVisible(!0), setTimeout(() => {
      setAlertVisible(!1);
    }, 3e3);
  }, handleSubmit = (e) => {
    e.preventDefault();
    let orderSelected = {
      id: `${sneaker.data[0].id}${orderDetails.size}`,
      title,
      image: image.data.attributes.url,
      price,
      quantity: orderDetails.quantity,
      size: orderDetails.size,
      url
    };
    addToCart(orderSelected) && handleAlertVisiblity(), setOrderDetails({
      quantity: 0,
      size: 0
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "container main-container ind-sneaker", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: image.data.attributes.url, alt: `Sneaker ${title}` }, void 0, !1, {
      fileName: "app/routes/store/$sneakerURL.jsx",
      lineNumber: 93,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "details-sneaker", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { children: title }, void 0, !1, {
        fileName: "app/routes/store/$sneakerURL.jsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "description", children: description }, void 0, !1, {
        fileName: "app/routes/store/$sneakerURL.jsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "price-product", children: [
        price,
        " \u20AC"
      ] }, void 0, !0, {
        fileName: "app/routes/store/$sneakerURL.jsx",
        lineNumber: 97,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { onSubmit: handleSubmit, className: "cart-form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "select", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "size-sneaker", children: "Choose a size" }, void 0, !1, {
            fileName: "app/routes/store/$sneakerURL.jsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "select",
            {
              required: !0,
              id: "size",
              value: orderDetails.size,
              onChange: handleChange,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { value: "", children: "Size" }, void 0, !1, {
                  fileName: "app/routes/store/$sneakerURL.jsx",
                  lineNumber: 107,
                  columnNumber: 19
                }, this),
                sizes.map((sizeIt) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { value: sizeIt, children: sizeIt }, sizeIt, !1, {
                  fileName: "app/routes/store/$sneakerURL.jsx",
                  lineNumber: 109,
                  columnNumber: 41
                }, this))
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/store/$sneakerURL.jsx",
              lineNumber: 101,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/store/$sneakerURL.jsx",
          lineNumber: 99,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "quantity", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "quantity", children: "Quantity" }, void 0, !1, {
            fileName: "app/routes/store/$sneakerURL.jsx",
            lineNumber: 113,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "select",
            {
              onChange: handleChange,
              value: orderDetails.quantity,
              required: !0,
              id: "quantity",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { value: "", children: "Quantity" }, void 0, !1, {
                  fileName: "app/routes/store/$sneakerURL.jsx",
                  lineNumber: 120,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                  fileName: "app/routes/store/$sneakerURL.jsx",
                  lineNumber: 121,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                  fileName: "app/routes/store/$sneakerURL.jsx",
                  lineNumber: 122,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                  fileName: "app/routes/store/$sneakerURL.jsx",
                  lineNumber: 123,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/store/$sneakerURL.jsx",
              lineNumber: 114,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/store/$sneakerURL.jsx",
          lineNumber: 112,
          columnNumber: 15
        }, this),
        alertVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "alert-added ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: success_default, alt: "icon success on green" }, void 0, !1, {
            fileName: "app/routes/store/$sneakerURL.jsx",
            lineNumber: 129,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "text", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Added to the cart" }, void 0, !1, {
              fileName: "app/routes/store/$sneakerURL.jsx",
              lineNumber: 131,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react9.Link, { to: "/cart", children: "Go to checkout" }, void 0, !1, {
              fileName: "app/routes/store/$sneakerURL.jsx",
              lineNumber: 132,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/store/$sneakerURL.jsx",
            lineNumber: 130,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/store/$sneakerURL.jsx",
          lineNumber: 127,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "submit", value: "Add to cart" }, void 0, !1, {
          fileName: "app/routes/store/$sneakerURL.jsx",
          lineNumber: 136,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/store/$sneakerURL.jsx",
        lineNumber: 98,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/store/$sneakerURL.jsx",
      lineNumber: 94,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/store/$sneakerURL.jsx",
    lineNumber: 92,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/store/$sneakerURL.jsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

// app/routes/store/index.jsx
var store_exports2 = {};
__export(store_exports2, {
  default: () => Store2,
  links: () => links6,
  loader: () => loader3,
  meta: () => meta4
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function loader3() {
  return (await getAllSneakers()).data;
}
function meta4() {
  return {
    title: "AF Store",
    description: "Af Store - Our sneakers collection"
  };
}
function links6() {
  return [
    {
      rel: "stylesheet",
      href: store_default
    }
  ];
}
function Store2() {
  let sneakers = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container main-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "heading", children: "Our Collection" }, void 0, !1, {
      fileName: "app/routes/store/index.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    (sneakers == null ? void 0 : sneakers.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "sneakers-grid", children: sneakers.map((sneaker) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Sneaker, { sneaker }, sneaker.id, !1, {
      fileName: "app/routes/store/index.jsx",
      lineNumber: 33,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/store/index.jsx",
      lineNumber: 31,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/store/index.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links7
});
var import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function links7() {
  return [
    {
      rel: "stylesheet",
      href: posts_default
    }
  ];
}
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 14,
    columnNumber: 11
  }, this);
}

// app/routes/blog/$postURL.jsx
var postURL_exports = {};
__export(postURL_exports, {
  default: () => PostURL,
  loader: () => loader4,
  meta: () => meta5
});
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
async function loader4({ params }) {
  let { postURL } = params, post = await getPostByURL(postURL);
  if (!post || post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Post not found"
    });
  return post;
}
function meta5({ data }) {
  if (!data)
    return {
      title: "Post not found",
      description: "Sneakers on sale, model not found"
    };
  let { title } = data.data[0].attributes;
  return {
    title: `${title}`,
    description: `AF Blog - ${title}`
  };
}
function PostURL() {
  let post = (0, import_react13.useLoaderData)(), { title, content, publishedAt } = post.data[0].attributes, formatedText = (text) => text.split(`
`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("article", { className: "container indPost ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { className: "heading", children: title }, void 0, !1, {
      fileName: "app/routes/blog/$postURL.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: new Date(publishedAt).toLocaleDateString() }, void 0, !1, {
      fileName: "app/routes/blog/$postURL.jsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { className: "coverPost", src: post.data[0].attributes.image.data[0].attributes.formats.large.url, alt: `cover for the ${title} post ` }, void 0, !1, {
      fileName: "app/routes/blog/$postURL.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "textPost", children: formatedText(content).map((text, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: text }, idx, !1, {
      fileName: "app/routes/blog/$postURL.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/blog/$postURL.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog/$postURL.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/$postURL.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/blog/index.jsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => Blog2,
  loader: () => loader5,
  meta: () => meta6
});
var import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function loader5() {
  return await getAllPosts();
}
function Blog2() {
  let posts = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "container ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "heading", children: "AF Blog" }, void 0, !1, {
      fileName: "app/routes/blog/index.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "blog", children: posts.data.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Post, { post }, post.id, !1, {
      fileName: "app/routes/blog/index.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/blog/index.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/index.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function meta6() {
  return {
    title: "Blog",
    description: "A collection of posts for sneakers hunters and passionate people about sneaker culture."
  };
}

// app/routes/cart.jsx
var cart_exports = {};
__export(cart_exports, {
  default: () => Cart,
  links: () => links8,
  meta: () => meta7
});

// app/styles/cart.css
var cart_default2 = "/build/_assets/cart-765B4ZGI.css";

// app/routes/cart.jsx
var import_react16 = require("@remix-run/react");

// app/components/cartSneaker.jsx
var import_react15 = require("@remix-run/react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function CartSneaker({ sneaker }) {
  let { title, quantity, size, image, price, url, id } = sneaker, { updateQuantity, deleteFromCart } = (0, import_react15.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "sneaker-cart", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react15.Link, { to: `/store/${url}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: image, alt: `${title} sneaker` }, void 0, !1, {
      fileName: "app/components/cartSneaker.jsx",
      lineNumber: 7,
      columnNumber: 36
    }, this) }, void 0, !1, {
      fileName: "app/components/cartSneaker.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "details-order", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { children: title }, void 0, !1, {
        fileName: "app/components/cartSneaker.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "size", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: [
        "Size: ",
        size
      ] }, void 0, !0, {
        fileName: "app/components/cartSneaker.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/cartSneaker.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "quantity", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "Quantity: " }, void 0, !1, {
          fileName: "app/components/cartSneaker.jsx",
          lineNumber: 14,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "select",
          {
            className: "select-cart",
            value: quantity,
            onChange: (e) => updateQuantity({
              quantity: +e.target.value,
              id
            }),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                fileName: "app/components/cartSneaker.jsx",
                lineNumber: 23,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                fileName: "app/components/cartSneaker.jsx",
                lineNumber: 24,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                fileName: "app/components/cartSneaker.jsx",
                lineNumber: 25,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/cartSneaker.jsx",
            lineNumber: 15,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/cartSneaker.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "price", children: [
        price,
        " \u20AC"
      ] }, void 0, !0, {
        fileName: "app/components/cartSneaker.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "subtotal", children: [
        "Subtotal: ",
        `${quantity * price} \u20AC`
      ] }, void 0, !0, {
        fileName: "app/components/cartSneaker.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "button",
        {
          type: "button",
          className: "btn-delete-sneaker",
          onClick: (e) => deleteFromCart(id),
          children: "Delete Sneaker"
        },
        void 0,
        !1,
        {
          fileName: "app/components/cartSneaker.jsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/cartSneaker.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/cartSneaker.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/cart.jsx
var import_react17 = require("react"), import_remix_utils = require("remix-utils"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function links8() {
  return [
    {
      rel: "stylesheet",
      href: cart_default2
    }
  ];
}
function meta7() {
  return {
    title: "AFStore - Cart",
    description: "Order summary page"
  };
}
function Cart() {
  let [total, setTotal] = (0, import_react17.useState)(0), { orders, clearCart } = (0, import_react16.useOutletContext)();
  return (0, import_react17.useEffect)(() => {
    let totalCalculated = orders.reduce((totalAc, sneakerIter) => totalAc + sneakerIter.quantity * sneakerIter.price, 0);
    setTotal(totalCalculated);
  }, [orders]), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_remix_utils.ClientOnly, { fallback: "Loading cart...", children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "heading", children: "Shopping cart" }, void 0, !1, {
      fileName: "app/routes/cart.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "cart", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { children: "Products" }, void 0, !1, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 35,
          columnNumber: 17
        }, this),
        (orders == null ? void 0 : orders.length) === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "There are no sneakers on the cart" }, void 0, !1, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 38,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react16.Link, { to: "/store", children: "Go to store" }, void 0, !1, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 39,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 37,
          columnNumber: 17
        }, this) : orders == null ? void 0 : orders.map((sneaker) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(CartSneaker, { sneaker }, `${sneaker.id}+${Math.floor(Math.random() * 1e6)}`, !1, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 43,
          columnNumber: 21
        }, this)),
        (orders == null ? void 0 : orders.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: () => {
          clearCart();
        }, children: "Clear cart" }, void 0, !1, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 46,
          columnNumber: 42
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("aside", { className: "details", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { children: "Order details" }, void 0, !1, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: [
          "Order total: ",
          total,
          " \u20AC"
        ] }, void 0, !0, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.jsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "cf6b782e", entry: { module: "/build/entry.client-OQWJCI3K.js", imports: ["/build/_shared/chunk-X6MYYLS3.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NDFE35N7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/aboutus": { id: "routes/aboutus", parentId: "root", path: "aboutus", index: void 0, caseSensitive: void 0, module: "/build/routes/aboutus-IIM3HJQY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-S6AWQ7TC.js", imports: ["/build/_shared/chunk-BCYANOBJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$postURL": { id: "routes/blog/$postURL", parentId: "routes/blog", path: ":postURL", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$postURL-WZQSJTEK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "routes/blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-5WASKNN5.js", imports: ["/build/_shared/chunk-7GBUJLUX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart": { id: "routes/cart", parentId: "root", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/cart-GQN6RSG6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-5YEPFHY6.js", imports: ["/build/_shared/chunk-7GBUJLUX.js", "/build/_shared/chunk-VU4A3ZNZ.js", "/build/_shared/chunk-74IAIMUQ.js", "/build/_shared/chunk-46WPVSSY.js", "/build/_shared/chunk-BCYANOBJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store": { id: "routes/store", parentId: "root", path: "store", index: void 0, caseSensitive: void 0, module: "/build/routes/store-TEID2O6F.js", imports: ["/build/_shared/chunk-46WPVSSY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store/$sneakerURL": { id: "routes/store/$sneakerURL", parentId: "routes/store", path: ":sneakerURL", index: void 0, caseSensitive: void 0, module: "/build/routes/store/$sneakerURL-PQ4S7OXZ.js", imports: ["/build/_shared/chunk-74IAIMUQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store/index": { id: "routes/store/index", parentId: "routes/store", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/store/index-CQ4BONOM.js", imports: ["/build/_shared/chunk-VU4A3ZNZ.js", "/build/_shared/chunk-74IAIMUQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-CF6B782E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/aboutus": {
    id: "routes/aboutus",
    parentId: "root",
    path: "aboutus",
    index: void 0,
    caseSensitive: void 0,
    module: aboutus_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/store": {
    id: "routes/store",
    parentId: "root",
    path: "store",
    index: void 0,
    caseSensitive: void 0,
    module: store_exports
  },
  "routes/store/$sneakerURL": {
    id: "routes/store/$sneakerURL",
    parentId: "routes/store",
    path: ":sneakerURL",
    index: void 0,
    caseSensitive: void 0,
    module: sneakerURL_exports
  },
  "routes/store/index": {
    id: "routes/store/index",
    parentId: "routes/store",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: store_exports2
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$postURL": {
    id: "routes/blog/$postURL",
    parentId: "routes/blog",
    path: ":postURL",
    index: void 0,
    caseSensitive: void 0,
    module: postURL_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: blog_exports2
  },
  "routes/cart": {
    id: "routes/cart",
    parentId: "root",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
