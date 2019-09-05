FROM node:10
ENV PORT 8888
ENV HOST 0.0.0.0
WORKDIR /miApl
COPY package*.json /miApl/
RUN npm install
COPY . /miApl
ENTRYPOINT [ "node", "usuarios.js" ]
