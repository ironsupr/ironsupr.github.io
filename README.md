# Abhinav Singh - Developer Portfolio

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript featuring 3D animations, interactive elements, and a professional design.

## 🚀 Features

### ✨ **Modern Design**

- Responsive layout that works on all devices
- Glassmorphism effects and gradient backgrounds
- Smooth animations and transitions
- Professional color scheme with purple accents

### 🎯 **Interactive Elements**

- Custom loading screen with progress animation
- 3D background animations using Three.js
- Smooth scrolling navigation
- Hover effects and interactive buttons

### 📱 **Sections**

- **Hero Section**: Eye-catching introduction with call-to-action
- **About**: Personal information and skills overview
- **Projects Timeline**: Showcase of development projects
- **Contact**: Functional contact form with EmailJS integration
- **Footer**: Enhanced footer with social links and resources

### 🛠️ **Technical Features**

- **EmailJS Integration**: Working contact form
- **Custom 404 Page**: Branded error page with navigation
- **Loading Screen**: Animated loading experience
- **SEO Optimized**: Proper meta tags and structure
- **GitHub Pages Ready**: Automated deployment workflow

## 🌐 Live Demo

Visit the live portfolio: [https://ironsupr.github.io/Portfolio/](https://ironsupr.github.io/Portfolio/)

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main portfolio page
├── 404.html           # Custom 404 error page
├── style.css          # Complete styling and animations
├── animations.js      # Three.js 3D background animations
├── bg.png            # Profile/background image
├── images.jpeg       # About section image
├── RESUME_O.pdf      # Downloadable resume
└── .github/
    └── workflows/
        └── static.yml  # GitHub Pages deployment
```

## 🚀 Deployment

The portfolio is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch triggers a new deployment.

### Manual Deployment

1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. Push changes to `main` branch

## 🔧 Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/ironsupr/Portfolio.git
   cd Portfolio
   ```

2. Start a local server:

   ```bash
   python -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser

## 📧 Contact Form Setup

The contact form uses EmailJS for functionality. To set up your own:

1. Create an account at [EmailJS](https://emailjs.com/)
2. Create a service and email template
3. Update the EmailJS configuration in `index.html`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   // Update service ID and template ID in the send function
   ```

## 🎨 Customization

### Colors

The main color scheme uses CSS custom properties. Update the purple accents by modifying the gradient values in `style.css`.

### Content

- Update personal information in `index.html`
- Replace `bg.png` and `images.jpeg` with your own images
- Update `RESUME_O.pdf` with your resume
- Modify social media links in the contact section

### Animations

- 3D background animations are in `animations.js`
- CSS animations are defined in `style.css`
- Loading screen animations can be customized in the loading section

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhinav Singh**

- GitHub: [@ironsupr](https://github.com/ironsupr)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)

---

⭐ **Star this repository if you found it helpful!**
