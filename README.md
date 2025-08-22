# NE ZHA — LOTUS PRINCE

A cinematic, interactive website showcasing the epic legend of Ne Zha, the rebellious Lotus Prince from Chinese mythology. Built with modern web technologies and featuring stunning 3D animations.

🌐 **Live Website**: [https://sri01729.github.io/Ne-Zha-Landing-Page/](https://sri01729.github.io/Ne-Zha-Landing-Page/)

![Ne Zha Website](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-3D-orange?style=for-the-badge&logo=three.js)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animation-purple?style=for-the-badge)

## ✨ Features

### 🎭 Epic Storytelling
- **Cinematic Hero Section**: "BEHOLD NE ZHA" with large 3D model
- **Interactive 3D Model**: Ne Zha character with smooth animations
- **Story Sections**: Divine Birth, Dragon's Defiance, Lotus Rebirth
- **Mythological Content**: Rich storytelling with authentic Chinese mythology

### 🎨 Visual Excellence
- **3D Animations**: Scroll-triggered Three.js-style animations
- **Animated Cards**: Hover effects with SVG filters and motion
- **Infinite Scrolling**: Movie reviews and type strips
- **Responsive Design**: Fluid layouts across all devices

### 🚀 Technical Features
- **Next.js 14**: App Router with TypeScript
- **Three.js Integration**: 3D model rendering with React Three Fiber
- **Framer Motion**: Smooth scroll animations and transitions
- **shadcn/ui**: Modern component library
- **Tailwind CSS**: Utility-first styling

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── hero-enhanced.tsx    # Main landing page with all sections
│   ├── floating-island-3d.tsx # 3D Ne Zha model component
│   ├── header.tsx           # Navigation header
│   ├── animated-card.tsx    # Interactive story cards
│   ├── feature239.tsx       # Fourth section component
│   ├── big-type-strip.tsx   # Infinite scrolling text
│   ├── infinite-cards.tsx   # Movie reviews carousel
│   └── ui/                  # shadcn/ui components
└── lib/
    └── utils.ts             # Utility functions
```

## 🎯 Sections Overview

### 1. **Hero Section** - "BEHOLD NE ZHA"
- Large 3D Ne Zha model with smooth animations
- Epic typography and scroll indicator
- Cinematic entrance animations

### 2. **Saga Section** - "An Unyielding Spirit"
- 3D card with childhood image
- Story of Ne Zha's divine nature
- Side-by-side layout with animations

### 3. **Theme Section** - "A Saga Forged in Fire and Water"
- Three animated story cards
- Divine Birth, Dragon's Defiance, Lotus Rebirth
- Hover effects with SVG filters

### 4. **Rebel Section** - "My Fate is My Own"
- Feature component with dotted border design
- Chinese quote in red: "我命由我不由天"
- Ne Zha battle image

### 5. **Experience Section** - "Experience Ne Zha"
- YouTube video embed (IMAX size)
- Infinite scrolling movie reviews
- Epic wallpaper with decorated content

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Animations**: Framer Motion
- **Components**: shadcn/ui
- **Images**: Next.js Image optimization
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd floatingisland
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Key Files

### 3D Model
- **Model File**: `public/Nezha3dmodel.glb`
- **Component**: `src/components/floating-island-3d.tsx`
- **Features**: Auto-rotation, lighting, environment mapping

### Animations
- **Scroll Animations**: Framer Motion with 3D transforms
- **Card Hover Effects**: SVG filters with turbulence
- **Infinite Scrolling**: CSS keyframes for smooth motion

### Images
- **Hero**: `nezha_childhood.jpeg`
- **Story Cards**: `Nezha_baby.jpeg`, `nezha_aobing.jpeg`, `nezha_lotus.jpeg`
- **Battle Scene**: `Na Tra.jpeg`
- **Wallpaper**: `ne_zha_wallpaper.jpeg`

## 🎨 Design System

### Typography
- **Headings**: Large, bold, tracking-tighter
- **Body**: Light weight, relaxed line height
- **Scale**: Responsive from mobile to desktop

### Colors
- **Background**: Pure white (`bg-white`)
- **Text**: Black (`text-black`)
- **Accents**: Red for Chinese quotes (`text-red-600`)
- **Decorations**: Subtle gradients and borders

### Animations
- **Duration**: 1.2-1.8s for cinematic feel
- **Easing**: `easeOut` for natural motion
- **3D Effects**: `rotateX`, `rotateY`, `rotateZ` transforms
- **Scale**: Elements start small and grow to full size

## 🌟 Special Features

### Infinite Scrolling Components
- **BigTypeStrip**: "LOTUS PRINCE ✹ NE ZHA ✹ REBEL GOD ✹ ETERNAL YOUTH ✹"
- **InfiniteCards**: Movie reviews with critic scores and dates

### Interactive Elements
- **Navigation**: Smooth scroll to sections
- **3D Model**: Orbit controls and presentation controls
- **Animated Cards**: Hover effects with title/description animations

### Performance Optimizations
- **Image Optimization**: Next.js Image component with priority loading
- **3D Loading**: Suspense boundaries for smooth loading
- **Animation Performance**: Hardware acceleration and optimized transforms

## 📱 Responsive Design

- **Mobile**: Single column layouts, optimized typography
- **Tablet**: Adaptive grid systems
- **Desktop**: Full cinematic experience with side-by-side layouts
- **Breakpoints**: Tailwind's responsive utilities

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel with automatic optimization
```

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **AWS**: Amplify or S3 + CloudFront
- **Docker**: Multi-stage build for containerization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Chinese Mythology**: Rich cultural heritage and storytelling
- **Three.js Community**: 3D web graphics inspiration
- **Framer Motion**: Smooth animation library
- **shadcn/ui**: Beautiful component library

---

**Experience the legend of Ne Zha - the eternal youth who defied the heavens!** 🏮⚡
