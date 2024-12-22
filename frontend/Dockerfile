# Use official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the static files for production (run the React build)
RUN npm run build

# Expose the port the app will run on
EXPOSE 8080

# Start the application (start the production build)
CMD ["npm", "start"]
