FROM cypress/browsers:node14.17.6-chrome100-ff98

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
ENV PATH $PATH:/app/node_modules/.bin
RUN cypress verify
COPY ./ ./
