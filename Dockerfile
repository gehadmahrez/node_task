FROM node:slim
WORKDIR /user/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 6000
CMD ["node" , "index.js"]