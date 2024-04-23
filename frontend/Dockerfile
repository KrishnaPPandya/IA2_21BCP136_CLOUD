# Use an existing base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend files
COPY . .

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
