# Prinberk High School Website - CI/CD Setup Guide

## 🚀 Quick Start

This repository includes automated CI/CD pipelines that will deploy your school website automatically!

## 📋 Prerequisites

- GitHub account
- Your website code in a GitHub repository

## ⚙️ Setup Instructions

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Save!

### Step 2: Add the Workflow File

1. Create this folder structure in your repository:
   ```
   .github/
     workflows/
       deploy.yml
   ```

2. Copy the `deploy.yml` file from this setup into that location

3. Commit and push:
   ```bash
   git add .github/
   git commit -m "Add CI/CD pipeline"
   git push origin main
   ```

### Step 3: Watch the Magic! ✨

- Go to the **Actions** tab in your GitHub repository
- You'll see your deployment running
- Once complete (usually 1-2 minutes), your site will be live!
- Your site URL will be: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 🔄 How It Works

Every time you push code to the `main` branch:

1. **Validation**: HTML files are checked for errors
2. **Build**: Files are prepared for deployment
3. **Deploy**: Site automatically publishes to GitHub Pages

## 📝 What This Pipeline Does

- ✅ Validates HTML syntax
- ✅ Automatically deploys to GitHub Pages
- ✅ Runs on every push to main branch
- ✅ Can be triggered manually from Actions tab
- ✅ Only deploys if validation passes

## 🛠️ Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab
2. Click **Deploy School Website** workflow
3. Click **Run workflow** → **Run workflow**

## 📂 Project Structure

```
your-repo/
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD pipeline
├── css/
│   └── style.css
├── js/
│   └── transitions.js
├── images/
│   └── hero.jpg
├── index.html
├── about.html
├── academics.html
├── admissions.html
├── students.html
└── contact.html
```

## 🎨 Customization Options

### Add Custom Domain

1. In GitHub Settings → Pages
2. Add your custom domain (e.g., `prinberkhigh.com`)
3. Configure DNS records with your domain provider

### Add More Checks

Edit `.github/workflows/deploy.yml` to add:
- CSS validation
- JavaScript linting
- Image optimization
- Performance testing

## 🐛 Troubleshooting

**Site not updating?**
- Check the Actions tab for errors
- Make sure you pushed to `main` branch
- Verify GitHub Pages is enabled

**HTML validation warnings?**
- These won't stop deployment
- Fix them to improve code quality

**Need help?**
- Check GitHub Actions logs in the Actions tab
- Each step shows detailed output

## 📞 Support

For issues with the pipeline, check:
1. Actions tab for error messages
2. Make sure all files are committed
3. Verify repository settings

---

**Made with ❤️ for Prinberk High School**
