# Use an existing base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend files
COPY . .

# Expose port
EXPOSE 5000

# Command to run the application
CMD ["node", "server.js"]
