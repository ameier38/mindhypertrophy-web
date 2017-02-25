FROM node:6.10.0
RUN mkdir -p /usr/src/app
ADD . /usr/src/app
RUN npm build
EXPOSE 8000
CMD npm start
