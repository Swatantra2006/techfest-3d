# GitHub Pages Deployment Walkthrough

We have successfully configured the React + Vite project for deployment to GitHub Pages at the target URL: `https://swatantra2006.github.io/techfest-3d/`.

## Changes Made

### 1. Vite Configuration
- **File**: [vite.config.js](file:///c:/Users/dell/Desktop/Task-2/vite.config.js)
- **Change**: Added `base: '/techfest-3d/'` to ensure that all assets (JS, CSS, images) are loaded with the correct subdirectory prefix, matching the repository name.

### 2. Package Configuration
- **File**: [package.json](file:///c:/Users/dell/Desktop/Task-2/package.json)
- **Changes**:
  - Added the `"homepage"` field pointing to the production deployment URL.
  - Added the `"predeploy"` script to run `npm run build` automatically before deploying.
  - Added the `"deploy"` script using the `gh-pages` package to push the build output directory (`dist`) to the `gh-pages` branch.
  - Added `"gh-pages": "^6.1.1"` to `"devDependencies"`.

---

## Deployment Steps

Because terminal command execution is restricted in the sandbox environment due to path access limits, you must run the deployment commands manually from your terminal inside the project directory (`c:\Users\dell\Desktop\Task-2`):

### Step 1: Install Dependencies
Run the following command to install the added `gh-pages` dependency:
```bash
npm install
```
*(Alternatively, you can run `npm install gh-pages --save-dev`)*

### Step 2: Deploy to GitHub Pages
Run the deployment script:
```bash
npm run deploy
```
This command will:
1. Trigger `predeploy` which runs `vite build` to generate the production-ready assets in the `dist/` directory.
2. Trigger `deploy` which uploads the contents of the `dist/` directory to a branch named `gh-pages` in your GitHub repository.

---

## Enabling GitHub Pages in GitHub Settings

After running `npm run deploy` successfully, you need to verify or configure the settings in GitHub:

1. Open your GitHub Repository: [https://github.com/Swatantra2006/techfest-3d](https://github.com/Swatantra2006/techfest-3d)
2. Go to **Settings** (tab at the top).
3. Scroll down the left sidebar and click on **Pages**.
4. Under the **Build and deployment** section:
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Select **`gh-pages`** and the directory **`/ (root)`**.
5. Click **Save**.
6. Wait a minute or two, and GitHub will deploy your site to the final URL:
   [https://swatantra2006.github.io/techfest-3d/](https://swatantra2006.github.io/techfest-3d/)
