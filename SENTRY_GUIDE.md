# Sentry Setup Guide for Triny-

This guide walks you through setting up a Sentry account for error reporting and establishing feedback loops for the Triny- project.

## 1. Create a Sentry Account
1. Go to [sentry.io](https://sentry.io/) and click **Sign Up**.
2. You can sign up using your GitHub account (recommended) or an email address.
3. Complete the onboarding steps by setting up your organization name (e.g., `triny-org`).

## 2. Create a New Project
1. Once logged in, navigate to **Projects** and click **Create Project**.
2. Choose the platform that matches Triny-'s frontend (e.g., `React`, `Next.js`, or `Browser JavaScript`).
3. Set your alert frequency (the default is usually fine to start).
4. Name your project (e.g., `triny-app`) and assign it to your team.
5. Click **Create Project**.

## 3. Install the Sentry SDK in Triny-
1. Copy the DSN (Data Source Name) provided by Sentry on the setup screen. It looks like: `https://<key>@<org>.ingest.sentry.io/<project-id>`
2. Open your terminal in the Triny- project directory:
   ```bash
   npm install @sentry/react @sentry/tracing
   # or your framework-specific package, e.g., @sentry/nextjs
   ```
3. Initialize Sentry in your main entry file (e.g., `index.js`, `App.js`, or `_app.js`):

   ```javascript
   import * as Sentry from "@sentry/react";

   Sentry.init({
     dsn: "YOUR_SENTRY_DSN_HERE",
     integrations: [new Sentry.BrowserTracing()],
     tracesSampleRate: 1.0, // Adjust this value in production
   });
   ```

## 4. Environment Variables (Recommended)
Never hardcode your DSN. Use an environment variable:
1. Add `VITE_SENTRY_DSN` or `NEXT_PUBLIC_SENTRY_DSN` to your `.env` file.
2. Update the initialization code to use `process.env` or `import.meta.env`.

## 5. Verify the Setup
1. Create a test button in your app that throws an error:
   ```javascript
   <button onClick={() => { throw new Error("Sentry Test Error!"); }}>
     Test Sentry
   </button>
   ```
2. Run your app locally and click the button.
3. Check the **Issues** tab in your Sentry dashboard to ensure the error was captured.

## 6. Set Up Feedback Loops
1. Enable the **User Feedback** widget in Sentry.
2. In your Sentry settings, go to **Projects > [Your Project] > User Feedback** and enable "Crash-Report Modal".
3. Add the following code to your Error Boundary component so users can report what happened when an error occurs:
   ```javascript
   if (error) {
     Sentry.showReportDialog({ eventId: this.state.eventId });
   }
   ```
