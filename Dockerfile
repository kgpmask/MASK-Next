# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy all project files
COPY . .

# 6. Build Next.js app
RUN npm run build

# 7. Expose port
EXPOSE 3000

# 8. Start app
CMD ["npm", "run", "start"]
