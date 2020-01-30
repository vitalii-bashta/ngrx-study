FROM node AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=node /app/dist/ngrx-test /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
