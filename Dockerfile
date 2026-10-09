FROM node:22

# Install git so npm can clone dependencies safely
RUN apt-get update && apt-get install -y git

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
ENTRYPOINT ["node", "index.js"]
