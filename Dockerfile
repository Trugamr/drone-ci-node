FROM node:16-alpine

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json index.js ./
RUN npm install

# Set default environment variables
ENV PORT 80

# Expose port 80
EXPOSE 80

CMD ["node", "index.js"]