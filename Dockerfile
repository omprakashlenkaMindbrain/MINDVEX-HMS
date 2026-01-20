FROM node:20

WORKDIR /myapp

COPY . .

RUN npm install

RUN npm run build 

EXPOSE 2000

CMD ["npm", "run", "dev", "--", "--host"]
