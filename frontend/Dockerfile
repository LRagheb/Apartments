FROM node:16-alpine

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]
