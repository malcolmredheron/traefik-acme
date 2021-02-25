const ParcelProxyServer = require("parcel-proxy-server");

const server = new ParcelProxyServer({
  entryPoint: ["src/app/App.html"],
  parcelOptions: {
    https: false,
    autoInstall: false,
    hmrPort: 81,
  },
});

server.listen(80, () => {
  console.log("Parcel proxy server has started");
});
