# React JS Landing Page Template

\*\*

# 🛎️🛎️ Good news! New & improved [V2](https://github.com/issaafalkattan/react-landing-page-template-2021) is out

\*\*

### <a href="https://react-landing-page-template-93ne.vercel.app/">LIVE DEMO</a>

## Description

This is a ReactJS based landing page template, fit for a startup company/service with a one page view. The design is inspired by a template from <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/">Free-CSS.com </a>
All 'visual' data can be easily modified by changing the data.json file.

## Make it Yours!

### 1. Preps

You will need to have <a href="https://nodejs.org/">Node JS</a> installed on your pc.

### 2. Clone Files

After cloning the files, you will have to run `yarn` followed by `yarn start` in the CLI

### 3. Add your own data

Change the data in the `data.json` file as well as add any images to `public/img/`
You can also change styles by modifying the `public/css` files.

### 4. Configure EmailJS for Contact Form

To enable the contact form functionality, you need to set up EmailJS:

1. **Create an EmailJS Account**

   - Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
   - You get 200 free emails per month

2. **Set up Email Service**

   - In your EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions for your email provider

3. **Create Email Template**

   - Go to "Email Templates" in your dashboard
   - Create a new template with these variables:
     - `{{from_name}}` - sender's name
     - `{{from_email}}` - sender's email
     - `{{message}}` - message content
   - Example template:

     ```
     Subject: New Contact Form Message from {{from_name}}

     You have received a new message from your website contact form:

     Name: {{from_name}}
     Email: {{from_email}}

     Message:
     {{message}}
     ```

4. **Get Your Credentials**

   - Service ID: Found in "Email Services" section
   - Template ID: Found in "Email Templates" section
   - Public Key: Found in "Account" > "General" section

5. **Configure Environment Variables**

   - Copy `.env.example` to `.env`
   - Replace the placeholder values with your actual EmailJS credentials:
     ```
     REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
     REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
     ```

6. **Test the Contact Form**
   - Restart your development server: `yarn start`
   - Fill out and submit the contact form
   - Check your email for the message

## Like this project?

<a href="https://www.buymeacoffee.com/issaaf">Buy my a coffee ☕️</a>

## Credits

##### Free CSS

<a href="https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/">Free-CSS.com </a>

##### Issaaf kattan
