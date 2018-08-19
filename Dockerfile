FROM mhart/alpine-node:latest
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci
ADD . /app
RUN npm run build
EXPOSE 3000

CMD npm start