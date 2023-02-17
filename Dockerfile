FROM nginx:latest

COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

RUN mkdir /usr/share/nginx/html/vids
COPY vids/rickroll.mp4 /usr/share/nginx/html/vids/

EXPOSE 80
