# Use an existing base image
FROM mongo:latest

# Set environment variables
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=1234
ENV MONGO_INITDB_DATABASE=test

# Copy initialization script
COPY init.js /docker-entrypoint-initdb.d/
