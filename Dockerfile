# Use node alpine as it's a small node image
FROM node:alpine

#Sets an environment variable
ENV PORT 3000

# Create the directory on the node image
# where our Next.js app will live
RUN mkdir -p /app

# Set /app as the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY package*.json /app/

# Install dependencies in /app
RUN npm install

# Copy the rest of our Next.js folder into /app
COPY . /app/

#Execute commands in a new layer on top of the current image and commit the results
RUN npm run build

# Ensure port 3000 is accessible to our system
EXPOSE 3000

# Run npm start, as we would via the command line
CMD ["npm", "start"]
