FROM mcr.microsoft.com/playwright:v1.42.1-jammy

COPY . /e2e

WORKDIR /e2e

RUN npm i

RUN npm run lint

CMD ["npm", "run", "test"] 