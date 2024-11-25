FROM node:16

WORKDIR /app

COPY backend/package*.json ./
RUN npm install

COPY backend/ .

RUN npm run build

CMD ["node", "dist/index.js"]

EXPOSE 3000
