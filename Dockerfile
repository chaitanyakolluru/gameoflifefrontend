# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code to the working directory
COPY . .

# Set the environment variable for the port number
ENV PORT 3000

# Expose the port number
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
