# React 3D Custom Product Designer

A modern, interactive 3D product customization application that allows users to design and personalize products like hoodies, jackets, and t-shirts. Users can add logos, adjust positioning, and customize colors in real-time using an intuitive 3D interface.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=flat-square&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.174.0-000000?style=flat-square&logo=three.js)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite)

## ✨ Features

- **3D Product Visualization**: Interactive 3D models of clothing items (hoodies, t-shirts, jackets)
- **Real-time Customization**: Live preview of design changes
- **Logo Upload & Positioning**: Add custom logos and adjust their position on products
- **Color Customization**: Change product colors with real-time preview
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with Material-UI
- **Smooth Animations**: Enhanced user experience with Framer Motion

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **3D Graphics**: Three.js with React Three Fiber
- **3D Utilities**: @react-three/drei for enhanced 3D components
- **UI Library**: Material-UI (MUI) for modern component design
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router DOM for navigation
- **Styling**: Emotion for CSS-in-JS styling
- **Fonts**: Plus Jakarta Sans for typography

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-3d-custom-product-designer.git
   cd react-3d-custom-product-designer
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── api/                    # API layer and data fetching
├── assets/                 # Static assets (3D models, icons, images)
├── components/             # Reusable React components
│   ├── designer/          # Designer-specific components
│   ├── models/            # 3D model components
│   └── product/           # Product-related components
├── configs/               # Application configuration
├── constants/             # Application constants
├── contexts/              # React context providers
├── hooks/                 # Custom React hooks
├── pages/                 # Page components
├── plugins/               # Third-party plugin configurations
├── types.d.ts            # TypeScript type definitions
└── utils/                # Utility functions
```

## 🎯 Key Features Explained

### 3D Product Visualization
- Interactive 3D models rendered using Three.js and React Three Fiber
- Real-time rotation, zoom, and pan controls
- High-quality product models with realistic materials and lighting

### Customization Tools
- **Logo Upload**: Users can upload custom logos and images
- **Position Control**: Drag and drop logos to desired positions on the product
- **Color Selection**: Real-time color changes with instant preview
- **Size Adjustment**: Scale logos and design elements

### User Experience
- Responsive design that works on all devices
- Smooth animations and transitions using Framer Motion
- Intuitive controls with visual feedback
- Modern Material-UI components for consistent design

## 🔧 Development

### Adding New Products

1. Add 3D model files (`.glb` format) to `src/assets/3d/`
2. Update the product data in `src/api/fakeApi.ts`
3. Create product-specific components if needed
4. Update routing in `src/app-wrapper.tsx`

### Customizing the Theme

The application uses Material-UI theming. Customize colors, typography, and spacing in:
- `src/theme.ts` - Main theme configuration
- `src/configs/theme.config.ts` - Theme-specific settings

### Adding New Features

1. Create components in the appropriate `src/components/` subdirectory
2. Add any new hooks to `src/hooks/`
3. Update context providers in `src/contexts/` if state management is needed
4. Add new pages to `src/pages/` and update routing

## 🧪 Testing

While this project doesn't include tests yet, we recommend adding:

- **Unit Tests**: For utility functions and hooks
- **Component Tests**: For React components using React Testing Library
- **Integration Tests**: For user workflows and 3D interactions
- **Visual Regression Tests**: For 3D rendering consistency

## 📦 Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🚀 Deployment

This application can be deployed to various platforms:

- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

### Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   ```bash
   git fork https://github.com/your-username/react-3d-custom-product-designer.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the existing code style and conventions
   - Add comments for complex logic
   - Ensure TypeScript types are properly defined

4. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Provide a clear description of your changes
   - Include screenshots for UI changes
   - Reference any related issues

### Code Style Guidelines

- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use Material-UI components when possible
- Keep components small and focused
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### Reporting Issues

If you find a bug or have a feature request:

1. Check existing issues first
2. Create a new issue with:
   - Clear description of the problem/feature
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment details

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** - Amazing 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Material-UI** - Beautiful React components
- **Framer Motion** - Smooth animations
- **Vite** - Fast build tool

## 📞 Support

If you have questions or need help:

- Open an issue on GitHub
- Check the documentation
- Review existing issues and discussions

---

**Happy coding! 🎨✨**
