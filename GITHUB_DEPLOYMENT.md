# GitHub and Vercel Deployment Guide

This guide explains how to deploy the Sales Dashboard application to GitHub and then to Vercel.

## Prerequisites

1. Git installed on your local machine
2. A GitHub account
3. A Vercel account (free available at [vercel.com](https://vercel.com))

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Give your repository a name (e.g., "sales-dashboard")
4. Choose to make it public or private
5. Do NOT initialize with a README (we'll push our existing code)
6. Click "Create repository"

## Step 2: Push Your Local Code to GitHub

1. Open your terminal/command prompt
2. Navigate to your project directory:
   ```bash
   cd "f:\New folder\Desktop\project\sales-dashboard"
   ```

3. Initialize git (if not already done):
   ```bash
   git init
   ```

4. Add all files to git:
   ```bash
   git add .
   ```

5. Commit the files:
   ```bash
   git commit -m "Initial commit: Sales Dashboard application"
   ```

6. Add the remote repository (replace with your actual repository URL):
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```

7. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

### Option 1: Connect Vercel to GitHub (Recommended)

1. Sign in to [Vercel](https://vercel.com)
2. Click "New Project"
3. Find your repository in the list and click "Import"
4. Vercel will automatically detect the Next.js framework
5. Review the project settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. Click "Deploy"
7. Wait for the deployment to complete (usually takes 1-2 minutes)
8. Your application will be live at the provided URL!

### Option 2: Manual Deployment with Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Navigate to your project directory:
   ```bash
   cd "f:\New folder\Desktop\project\sales-dashboard"
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? Select your account
   - Found project? Link to existing or create new
   - Link to existing project? No (if first time)
   - What's your project's name? sales-dashboard
   - In which directory is your code located? ./
   - Want to override the settings? No

5. Your application will be deployed and you'll receive a URL

## Step 4: Configure Environment Variables (If Needed)

This application does not require environment variables for basic functionality. All data is currently mock data.

If you add features that require environment variables in the future:
1. In your Vercel project dashboard, go to "Settings"
2. Click "Environment Variables" in the sidebar
3. Add your environment variables
4. Redeploy the application

## Step 5: Set Up Automatic Deployments

Vercel automatically deploys your application when you push to the main branch:

1. Any push to the main branch will trigger a new deployment
2. Pull requests will create preview deployments
3. You can customize this behavior in your Vercel project settings

## GitHub Actions for CI/CD

This repository includes a GitHub Actions workflow for automated deployment to Vercel. To use it:

1. Add the following secrets to your GitHub repository:
   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

2. The workflow will automatically deploy on pushes to the main branch

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Ensure all dependencies are properly installed
   - Check that Node.js version is 18.17 or later
   - Verify that the build command is `npm run build`

2. **Deployment Failures**
   - Check the Vercel logs for error messages
   - Ensure all required files are included in the build
   - Verify that the output directory is correctly set

3. **GitHub Push Issues**
   - Ensure you have the correct repository URL
   - Check your Git credentials
   - Make sure you have proper permissions to the repository

### Getting Help

If you encounter issues:
1. Check the Vercel documentation: https://vercel.com/docs
2. Review the GitHub documentation: https://docs.github.com
3. Look at the application logs in Vercel dashboard
4. Check GitHub Actions logs if using CI/CD

## Best Practices

### For GitHub
1. Use meaningful commit messages
2. Create branches for new features
3. Use pull requests for code review
4. Keep your repository organized

### For Vercel
1. Use environment variables for configuration
2. Monitor your deployments
3. Set up custom domains when ready
4. Use preview deployments for testing

## Next Steps

After successful deployment:
1. Share your application URL
2. Set up custom domain (optional)
3. Configure analytics
4. Monitor performance
5. Add more features to your dashboard

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)
- [Recharts Documentation](https://recharts.org/)