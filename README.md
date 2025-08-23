# Abhinav Singh - Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and certifications with AI-powered features.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **AI-Powered Project Ideas**: Generate project suggestions using Google Gemini AI
- **Interactive Contact Form**: With validation and EmailJS integration
- **Animated Background**: Canvas-based particle animation
- **Smooth Scrolling**: Enhanced navigation experience
- **Accessibility**: Screen reader friendly with ARIA labels

## 🛠️ Setup

### Local Development
1. Open `index.html` in your browser
2. Configure API keys via localStorage (see config.js)

### GitHub Deployment
1. **Configure GitHub Secrets** (Settings → Secrets and variables → Actions):
   - `GEMINI_API_KEY` - Google Gemini AI API key
   - `EMAILJS_SERVICE_ID` - EmailJS service ID
   - `EMAILJS_TEMPLATE_ID` - EmailJS template ID
   - `EMAILJS_PUBLIC_KEY` - EmailJS public key

2. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: GitHub Actions

3. **Push your code**:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

## 🔑 API Keys

### Google Gemini AI
- Get from: [Google AI Studio](https://aistudio.google.com/)
- Add as `GEMINI_API_KEY` in GitHub Secrets

### EmailJS
- Setup at: [EmailJS](https://www.emailjs.com/)
- Add Service ID, Template ID, and Public Key to GitHub Secrets

## 📁 File Structure

```
Portfolio/
├── .github/workflows/deploy.yml  # GitHub Actions deployment
├── config.js                     # Environment configuration
├── index.html                    # Main portfolio page
└── README.md                     # This file
```

## 🌐 Live Demo

Visit: `https://ironsupr.github.io/Portfolio`

---

**Built with ❤️ by Abhinav Singh**
