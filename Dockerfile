# Node.js için resmi imajı kullan
FROM node:14

# Uygulama kodlarını /uygulama klasörüne kopyala
WORKDIR /uygulama
COPY package*.json ./
RUN npm install
COPY . .

# Uygulama portunu belirle
EXPOSE 3000

# Uygulamayı başlat
CMD ["node", "app.js"]
