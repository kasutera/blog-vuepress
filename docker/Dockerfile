FROM node:19-alpine3.15
ENV NODE_PATH /opt/node_modules

RUN apk update && apk add git

WORKDIR /workspace
ADD .yarnrc /workspace/.yarnrc
ADD package.json /workspace/package.json
RUN yarn install

ADD blog /workspace/blog
CMD ["yarn", "build"]
