# GalloBuilt website — setup instructions

## What is included
- `index.html`: all website content
- `styles.css`: layout and colors
- `script.js`: mobile menu and email-based quote form
- `favicon.svg`: browser tab icon
- `CNAME`: GitHub Pages custom domain

## Publish on GitHub Pages
1. Sign in at https://github.com and click **+ > New repository**.
2. Name it `gallobuilt-website`, choose **Public**, and create it.
3. Open the repository, choose **Add file > Upload files**. Upload **the individual files inside this folder**, including `index.html` and `CNAME` at the top level (not a ZIP file and not the containing folder). Commit changes.
4. Open **Settings > Pages**. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
5. Under **Settings > Pages > Custom domain**, enter `www.gallobuilt.com` and Save. The `CNAME` file already specifies it.
6. In your domain registrar's DNS panel, add a `CNAME` record: Host/Name `www`, Value/Target `<YOUR-GITHUB-USERNAME>.github.io` (replace placeholder with your actual GitHub username). Remove conflicting `www` A/AAAA/CNAME records.
7. For the root `gallobuilt.com`, add four A records with Host `@` and values `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Remove conflicting root A/AAAA records. This supports the root domain redirecting to `www` through GitHub Pages.
8. Wait for DNS verification and the site to deploy (sometimes several hours; DNS propagation can take up to 24 hours or longer). When available, turn on **Enforce HTTPS** in Settings > Pages.
9. Test `https://www.gallobuilt.com` and `https://gallobuilt.com` on your phone. Test each button and link.

**IMPORTANT:** If your custom email `contact@gallobuilt.com` is already configured, **do not delete or alter your MX, TXT/SPF, DKIM, or DMARC DNS records**. Only change the web-related records listed above. Also confirm that the email mailbox can receive mail before using it with customers.

## Functionality and limitations
- Phone button calls `+1 832 221 7042`.
- Email button opens the user's email client.
- Quote form opens a prefilled email; the visitor must press Send. There is no server or automatic submission. This is intentional for free static hosting.
- Review button opens your supplied Google review link. Reviews are not stored on this site.
- Google Maps button uses a Google Maps search for GalloBuilt in Mont Belvieu. Confirm the result resolves to your exact listing after launch; replace with your official Google Maps listing link if needed.
- Project cards are placeholders; replace them with actual GalloBuilt project photographs when available.
- No fake customer testimonials or claims of licensing/insurance are included.

## Changing the site
Edit the HTML/CSS/JS files in GitHub and commit changes. GitHub Pages will publish updates automatically. For further design changes, bring these files back into ChatGPT.
