FROM mhart/alpine-node:latest AS build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci
ADD . /app
RUN npm run build
RUN npm ci --prod

FROM mhart/alpine-node:base
WORKDIR /app
ENV NODE_ENV="production"
COPY --from=build /app/dist .
COPY --from=build /app/node_modules /app/node_modules
CMD node server.js