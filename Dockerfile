FROM mhart/alpine-node:latest
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000

CMD npm start