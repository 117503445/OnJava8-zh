FROM node

WORKDIR /workspace

# install pnpm
RUN npm install -g pnpm

ENTRYPOINT [ "./build.sh"]