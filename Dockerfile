# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
RUN npm run build

# Set API host
ENV REACT_APP_API_HOST = http://localhost:5000/api/

# Expose port 9000 on the container
EXPOSE 9000

# Defined in package.json
CMD [ "npm", "run", "start:server" ]