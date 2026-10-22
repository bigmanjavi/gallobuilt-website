# GalloBuilt Website v3 — upload instructions

Upload ALL files in this folder to the ROOT of your existing GitHub repository `bigmanjavi/gallobuilt-website` (same level as index.html). Replace existing files with matching names. Do not upload the folder itself or the ZIP. Do not change Namecheap DNS settings.

## Changes
- Rooster icon added to both brand marks.
- Improvements service icon changed to a hammer.
- Removed arrow/phone symbol from top-right Call Now button.
- Six hero benefit points in 3 columns x 2 rows.
- Expanded hero introduction to mention trash removal.
- Social preview image uses the user-provided rooster logo with new filename `gallobuilt-share-v3.jpg` to avoid stale cached URLs.
- Quote form changed from JavaScript AJAX to ordinary secure FormSubmit POST so it cannot get stuck showing Sending. It does leave the page for FormSubmit's confirmation; it does not open a mail app.

## Quote form activation — REQUIRED
FormSubmit requires an activation/verification email to `contact@gallobuilt.com`. Open the message and activate it. Then submit a second test and verify receipt. Until then, submissions may not be delivered. If a direct in-page success message is essential, create a Formspree account and supply the form endpoint for a future integration.

## Share preview
After GitHub finishes deploying, open `https://www.gallobuilt.com/gallobuilt-share-v3.jpg` directly to confirm it loads. Messaging apps cache previews; try a fresh conversation or allow time for recrawling. The site can request a preview image but cannot force every app to display it.
