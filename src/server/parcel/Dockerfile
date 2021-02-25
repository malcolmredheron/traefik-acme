FROM node:12

WORKDIR /fable
COPY package.json package-lock.json /fable/
RUN npm install
COPY tsconfig.json /fable/
COPY src /fable/src

CMD ["npx", "ts-node", "src/server/parcel/parcelServe.js"]
