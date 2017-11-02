FROM node

RUN mkdir -p /usr/whisper
WORKDIR /usr/whisper

RUN npm install yarn -g

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . /usr/whisper

RUN yarn production

EXPOSE 3000

CMD ["yarn", "start"]