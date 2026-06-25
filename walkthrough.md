# GitHub Pages Deployment Walkthrough (GitHub Actions)

We have successfully migrated the deployment process from the `gh-pages` CLI tool to **GitHub Actions**. This avoids local build errors on Windows (like `ENAMETOOLONG`) and runs the entire build and deploy pipeline in GitHub's secure cloud environment.

## Why the White Page Occurred
In your previous deployment attempt, the raw source code files (including `src/main.jsx` and `index.html`) were pushed directly to the hosting branch without being compiled.
* A browser cannot run raw JSX files (`/src/main.jsx`) directly.
* GitHub Pages is a static file server and does not run a dev server (like Vite) to compile files on the fly.
* Under GitHub Actions, Vite builds your app into static assets (compiled HTML, CSS, and JS) inside a `dist/` directory, which GitHub Pages then serves correctly.

---

## Correct Folder Structure

Your repository must have the following layout for GitHub Actions to discover the workflow:

```text
c:\Users\dell\Desktop\Task-2\
├── .github/
│   └── workflows/
│       └── deploy.yml      <-- Correct Workflow File
├── src/
├── public/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore             <-- Critical: Ignores node_modules & dist
└── ...
```

---

## Step-by-Step Recovery & Deployment Instructions

### 1. Remove Tracked/Staged Build Artifacts & Caches
Run the following PowerShell commands in your project root (`c:\Users\dell\Desktop\Task-2`) to clear the Git index of untracked dependencies, clean the accidental directory, and stage the correct files:

```powershell
# Step A: Remove tracked node_modules and dist from Git cache (if tracked)
git rm -r --cached node_modules
git rm -r --cached dist

# Step B: Delete the accidental '.githubworkflows' directory
Remove-Item -Recurse -Force .githubworkflows

# Step C: Add the updated files (.gitignore, vite.config.js, package.json, and .github/workflows/deploy.yml)
git add .

# Step D: Commit the changes
git commit -m "Configure GitHub Pages with GitHub Actions"

# Step E: Push the changes to GitHub
git push origin main
```

---

### 2. Enable GitHub Actions in GitHub Settings

Now, you must instruct GitHub to build your site using the new GitHub Actions workflow instead of using a branch deployment:

1. Open your repository: [https://github.com/Swatantra2006/techfest-3d](https://github.com/Swatantra2006/techfest-3d)
2. Click the **Settings** tab.
3. In the left navigation bar, click on **Pages** (under the *Code and automation* section).
4. Under **Build and deployment**:
   * **Source**: Click the dropdown menu and select **GitHub Actions**.
5. Your deployment is now fully automated! Push your commits to the `main` branch, and the site will build and publish automatically.

---

### 3. Verification

Once the GitHub Action runner finishes:
* The status will be shown in your repository's **Actions** tab.
* The final site will be live and functional at:
  👉 **[https://swatantra2006.github.io/techfest-3d/](https://swatantra2006.github.io/techfest-3d/)**
