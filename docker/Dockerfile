FROM node:24-alpine3.21

WORKDIR /workspace
ADD .yarnrc yarn.lock package.json /workspace/
RUN yarn install

ADD blog /workspace/blog
CMD ["yarn", "build"]
