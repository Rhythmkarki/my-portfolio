# Rhythm Karki - Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, experience, and education. Built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark theme with purple and blue gradient accents
- **Smooth Scrolling**: Smooth navigation between sections
- **Component-Based Architecture**: Clean React component structure for easy maintenance
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **GitHub Pages Ready**: Configured for automatic deployment to GitHub Pages

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header with smooth scrolling
│   │   ├── Hero.jsx          # Landing section with introduction
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Technical and soft skills showcase
│   │   ├── Projects.jsx      # Featured projects section
│   │   ├── Experience.jsx    # Work experience timeline
│   │   ├── Education.jsx     # Education details
│   │   ├── Certifications.jsx# Professional certifications
│   │   ├── Contact.jsx       # Contact form and information
│   │   └── Footer.jsx        # Footer with copyright
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles with Tailwind
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── vite.config.js            # Vite configuration with GitHub Pages base path
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (installed via NVM)
- npm 11+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rhythmkarki/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

### Building for Production

```bash
npm run build
```

This generates an optimized build in the `dist/` directory.

## 🚀 Deployment

The portfolio is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### GitHub Pages Setup

1. Ensure your repository settings have GitHub Pages enabled
2. Set the source to "GitHub Actions"
3. The GitHub Actions workflow will automatically build and deploy your changes

### Manual Deployment

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. Deploy using the peaceiris/actions-gh-pages action (already configured in the workflow)

## 🎨 Customization

### Modifying Content

Edit the component files in `src/components/` to update:
- Navigation items in `Header.jsx`
- Hero section content in `Hero.jsx`
- About information in `About.jsx`
- Skills in `Skills.jsx`
- Projects in `Projects.jsx`
- Experience timeline in `Experience.jsx`
- Education details in `Education.jsx`
- Certifications in `Certifications.jsx`
- Contact information in `Contact.jsx`

### Styling

- **Tailwind CSS**: Utility-first CSS framework (configured in `tailwind.config.js`)
- **Global Styles**: Edit `src/index.css` for global customizations
- **Component Styles**: Use Tailwind utility classes directly in JSX

### Colors

The dark theme uses:
- Primary: `#0f1117` (dark background)
- Accent: `#c084fc` (purple)
- Secondary Accent: `#a78bfa` (light purple)
- Text: `#9ca3af` (light gray)

## 📦 Technologies Used

- **React 19** - UI library
- **Vite 8** - Build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **GitHub Actions** - CI/CD for automatic deployment
- **ESLint** - Code quality tool

## 📊 Performance

Built with performance in mind:
- **Gzip compression**: ~5.38 KB CSS, ~66.18 KB JS
- **Fast build times**: Vite enables instant Hot Module Replacement (HMR)
- **Optimized production build**: Minimal JavaScript and CSS bundles

## 🔒 Environment Variables

Currently, no environment variables are required. If you need to add sensitive information, create a `.env` file:

```
VITE_API_KEY=your_key_here
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Rhythm Karki**
- Email: rhythm.karki@gmail.com
- Phone: 0468220278
- Location: Sydney, Australia
- GitHub: [@rhythmkarki](https://github.com/rhythmkarki)
- LinkedIn: [Rhythm Karki](https://linkedin.com)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/rhythmkarki/portfolio/issues).

## 🙏 Acknowledgments

- Tailwind CSS for the amazing utility-first CSS framework
- Vite for the blazingly fast build tool
- React for the powerful UI library
- GitHub Pages for free hosting

---

Made with ❤️ by Rhythm Karki
