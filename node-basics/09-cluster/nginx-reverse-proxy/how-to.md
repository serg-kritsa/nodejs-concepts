## stop nginx
nginx -s stop
## shutdown nginx gracefully
nginx -s quit
## reload nginx config file
nginx -s reload
## reopen nginx log files
nginx -s reopen

## add additional config file in nginx.conf 
http {
    ...
    include <config-filename.conf>
    ...
}
nginx -s reload

## config load balancer
upstream loadbalancer{
  server localhost:3000;
  server localhost:3001;
}
server {
  ...
  location / {
      proxy_pass http://loadbalancer/jph/;
  }
}

