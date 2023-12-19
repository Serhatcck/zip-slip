# Use official image for Node.js
FROM node:14


WORKDIR /uygulama
COPY package*.json ./
RUN npm install
COPY . .


EXPOSE 3000

# Run app
CMD ["node", "app.js"]
