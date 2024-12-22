# Use a lightweight Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files from the frontend directory
COPY . .

# Build the static files for production (if applicable)
RUN npm run build

# Use a lightweight server to serve static files
RUN npm install -g serve

# Expose the port used by the frontend
EXPOSE 8080

# Command to serve the frontend
CMD ["serve", "-s", "build", "-l", "8080"]
