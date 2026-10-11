# Sanvir Singh: Engineering Portfolio

Plain HTML, CSS, and JavaScript. No installs, accounts, or build tools needed.

## Preview on Windows with VS Code
1. Unzip the folder (right-click > Extract All).
2. Install VS Code from code.visualstudio.com.
3. In VS Code: File > Open Folder > choose the `portfolio` folder.
4. Open the Extensions icon (left bar), search **Live Server** (Ritwick Dey), click Install.
5. Open `index.html`, right-click in it, choose **Open with Live Server**. The site opens in your browser and updates when you save.
(You can also just double-click `index.html`.)

## Add your photo
Save a portrait (about 800 x 1000 px, JPG) as `images/sanvir.jpg`. Same name, same folder. Refresh.

## Add project images
Save as `images/project-01.jpg`, `project-02.jpg`, `project-03.jpg` (sketches, CAD, robot photos). Until then a labeled placeholder shows. Keep each file under about 500 KB.

## Add resume, letter, and profile links
1. Put your PDFs in `assets/`.
2. Open `js/main.js` and fill in the CONFIG block at the top, e.g. `resume: "assets/Sanvir-Singh-Resume.pdf"`.
3. Links stay hidden until filled in. Only publish the recommendation letter if you and its author are comfortable with that.

## Publish online (free)
**Netlify Drop:** go to app.netlify.com/drop, drag the whole `portfolio` folder onto the page. You get a live link in seconds. Create a free account to keep it and rename the site.
**Alternative: GitHub Pages:** upload the files to a new public repository, then Settings > Pages > Deploy from branch > main.
Check your photos for personal info (like backgrounds showing your address) before publishing.

## Editing text
All text is in `index.html`; colors are at the top of `css/style.css`.
