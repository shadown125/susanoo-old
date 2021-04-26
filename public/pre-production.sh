#!/bin/bash

echo ''
echo 'Installiere CacheBuster'
npm install grunt@1.0.4 grunt-cache-bust@1.7.0 --no-package-lock

echo ''
echo 'Pre-Produktionstasks werden ausgeführt.'
echo 'npm run pre-production'
npm run pre-production

echo ''
echo '----------------------------------------';
echo 'Pre-Produktionstasks wurden ausgeführt.';
echo '----------------------------------------';
