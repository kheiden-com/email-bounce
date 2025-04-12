# Email Bounce for Cloudflare Worker

This Cloudflare worker can provide a bounce response when attached to an email address.

## Deploy worker to Cloudflare - CLI

To create a new Cloudflare worker named "email-bounce", run the following:

```
npm install
npm run deploy
```

## Deploy worker to Cloudflare - UI
0) Fork this repository
1) Create a new worker
![Screenshot of the new worker button](documentation/media/Screenshot-worker-new.png)

2) Import the repository
![Select](documentation/media/Screenshot-import-repository.png)

3) Use the default name 'email-bounce' or select a new name. Keep the default build command of `npx wrangler deploy`.
4) Create the worker


### Configure Cloudflare email route

The inbound cloudflare email address needs to be directed to the newly create worker. This can be done via the user interface at the following URL:

```
https://dash.cloudflare.com/[uuid]/[domain]/email/routing/routes
```
Email address route being created and assigned to `email-bounce`:
![Screenshot of email address](documentation/media/Screenshot-address.png)


![Screenshot of Cloudflare worker](documentation/media/Screenshot-worker.png)

### Results

Sending an email from gmail

![Bounce rejection message from gmail](documentation/media/Screenshot-gmail.png)

Sending an email from protonmail

![Bounce rejection message from protonmail](documentation/media/Screenshot-proton.png)