# grafana-whatsapp
**************************
This Repo is related to integration of Grafana with WhatsAPP using WhatsAPP API and Webhook
forked from https://github.com/000x001/grafana-whatsapp

- Adding phone number parameters into url and api key

**#Deployment**
**************************

sudo docker run -it -p 3000:3000/tcp -e WHATSAPP_API_KEY="your api key" devlikeapro/whatsapp-http-api

WHATSAPP-API Documentation and complete Deployment = https://waha.devlike.pro/

cd webhook

node webhook-server.mjs

**Node Version** = v19.9.0

**NPM Version** = 9.6.3

**Operating System** = Ubuntu 22.04.3 LTS

**WHATSAPP-API** = https://github.com/devlikeapro/whatsapp-http-api

