# use the official nodejs
FROM node:21-alpine

# set the working directory
WORKDIR /app

# copy the package json files to the container
COPY package*.json ./

# installing the  dependencies
RUN npm install --production

# copy the remaining files and folders to the container
COPY . .

RUN npm run build

# starting the service
CMD [ "npm", "run", "prod" ]
