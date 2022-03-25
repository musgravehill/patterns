#!/bin/bash

echo "Hello from ENTRYPOINT"
<<comment
cd /var/www/patterns && composer update 
comment
php-fpm -F