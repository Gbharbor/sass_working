# React.js - Next.js + Sass Study Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
Additionally, it includes **Sass** for styling, a powerful CSS preprocessor, to improve code organization and maintainability.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Access the application**:  
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the project by modifying `app/page.tsx`. The page will auto-update as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## 🎨 Sass Integration

This project includes **Sass** to extend CSS capabilities with features like variables, mixins, and nesting.

### 📦 Installing Sass

Ensure Sass is installed as a dependency:

```bash
npm install sass
```

### 🗂️ Organizing Sass Files

1. Create a `styles` directory in the `src` folder to organize your Sass files.

2. Common files to include:
   - `_variables.scss`: For global variables (e.g., colors, fonts).
   - `_mixins.scss`: For reusable style blocks.
   - `globals.scss`: For global styles.

3. Import `globals.scss` in `app/layout.tsx` or `app/page.tsx`:
   ```tsx
   import './styles/globals.scss';
   ```

4. Suggested folder structure:
   ```
   src/
   ├── styles/
   │   ├── _variables.scss
   │   ├── _mixins.scss
   │   └── globals.scss
   ```

### 🛠️ Using Sass Features

Example of how to use Sass in `globals.scss`:

```scss
// _variables.scss
$primary-color: #0070f3;
$font-stack: 'Arial', sans-serif;

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// globals.scss
@import 'variables';
@import 'mixins';

body {
  font-family: $font-stack;
  color: $primary-color;
}

.centered {
  @include flex-center;
  height: 100vh;
}
```

### ✨ Why Use Sass?

- **Improved Code Organization:** Keep styles modular and reusable.
- **Variables:** Define and reuse consistent values like colors and fonts.
- **Mixins:** Avoid repetitive code by creating reusable style blocks.
- **Nesting:** Write styles that mirror the HTML structure, improving readability.

---

## 📚 Learn More

To learn more about the tools used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Sass Documentation](https://sass-lang.com/documentation) - Learn more about Sass.

---

## 🚀 Deploying on Vercel

The easiest way to deploy this application is using [Vercel](https://vercel.com), the platform created by the Next.js team.  

Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

---

## 📝 License

This project is for educational purposes, focusing on learning React.js, Next.js, and Sass integration.
```