FROM webdevops/php-nginx:7.4

RUN rm /opt/docker/etc/nginx/vhost.conf
RUN rm /opt/docker/etc/nginx/vhost.common.d/10-location-root.conf

COPY vhost.conf /opt/docker/etc/nginx/vhost.conf