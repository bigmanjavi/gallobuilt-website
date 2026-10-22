# GalloBuilt website update — October 2026

## Update the live GitHub Pages site

1. Open https://github.com/bigmanjavi/gallobuilt-website in Safari and select **Add file → Upload files** (desktop website view if needed).
2. Extract the ZIP first. Upload **the contents** of the `gallobuilt-site` folder into the repository root, **not** the folder or ZIP itself.
3. Replace the existing `index.html`, `styles.css`, and `script.js` when GitHub prompts. Add `social-preview.jpg` and `README-UPDATE.md`. Keep `CNAME` and `favicon.svg` in place.
4. Commit changes to `main`. GitHub Pages should deploy automatically. You do not need to change Namecheap DNS.

## IMPORTANT: Activate direct quote submissions

The quote form now submits via FormSubmit (https://formsubmit.co/) without opening a mail app. On the **first form submission**, FormSubmit emails an activation/confirmation message to **contact@gallobuilt.com**. Open that mailbox, find the FormSubmit activation email, and click its confirmation link. Until activation is completed, **do not assume quote requests are being delivered**. Test the form yourself after activation and verify receipt. Check spam/junk folders if the confirmation message doesn't arrive.

This is a third-party free form service; submissions are sent to FormSubmit for processing. Service limits, anti-spam checks, and delivery are controlled by that provider. Do not enter sensitive personal information in the form.

## Social sharing preview

`social-preview.jpg` is a 1200×630 image made from the GalloBuilt logo you supplied. The page includes Open Graph and Twitter preview tags referencing https://www.gallobuilt.com/social-preview.jpg. Messaging and social apps cache previews; they may take time to update. Share a new message after deployment to test.

## Other changes

- Removed all Google Maps/directions links; Google review link stays.
- Unified SVG icons for Repairs, Housework, Improvements, and new Trash Removal service.
- Removed icons from Our Work placeholders.
- Form submits directly from the website via AJAX; status messages and error fallback included.

## Business contact

Phone: (832) 221-7042; email: contact@gallobuilt.com.
