FROM node:18.19.0 as build

WORKDIR /app

COPY package*.json ./

# Retry npm install to handle potential network issues
RUN npm install || npm install || npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

COPY . .

# Build the Angular project
RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build /app/dist/foyer-frontend /usr/share/nginx/html

EXPOSE 80