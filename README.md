# Email Bounce for Cloudflare Worker

## Deploy worker to Cloudflare

To create a new Cloudflare worker named "email-bounce", run the following:

```
npm install
npm run deploy
```

### Configure Cloudflare email route

The inbound cloudflare email address needs to be directed to the newly create worker. This can be done via the user interface at the following URL:

```
https://dash.cloudflare.com/[uuid]/[domain]/email/routing/routes
```
Email address route being created and assigned to `email-bounce`:
![Screenshot of email address](documentation\media\Screenshot-address.png)


![Screenshot of Cloudflare worker](documentation\media\Screenshot-worker.png)

### Results

Sending an email from gmail

![Bounce rejection message from gmail](documentation\media\Screenshot-gmail.png)

Sending an email from protonmail

![Bounce rejection message from protonmail](documentation\media\Screenshot-proton.png)