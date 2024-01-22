# grafana-whatsapp
**************************
This Repo is related to integration of Grafana with WhatsAPP using WhatsAPP API and Webhook

**#Deployment**
**************************
docker run -d --name whatsapp-api -p 3000:3000/tcp --restart always devlikeapro/whatsapp-http-api

WHATSAPP-API Documentation and complete Deployment = https://waha.devlike.pro/


cd webhook

node webhook-server.mjs

**Node Version** = v18.18.2
**NPM Version** = 9.8.1
**Operating System** = RedHat 8

**WHATSAPP-API** = https://github.com/devlikeapro/whatsapp-http-api

**Webhook-mjs Code** = https://chat.openai.com/
