# 🚀 My Next.js + TypeScript App

A modern web application built with Next.js, TypeScript, and Tailwind CSS.

![screenshot](./public/LOGO_w_1.png)

---

## ✨ Features

- 🌟 Next.js 14 with App Router
- 📜 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🔥 API routes and authentication with NextAuth
- ⚡ Optimized performance with ISR & SSR

---

## 📦 Installation

Clone the repository:

```sh
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

Install dependencies:

```sh
pnpm install  # or npm install / yarn install
```

Run the development server:

```sh
pnpm dev  # or npm run dev / yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
.
.
├── eslint.config.mjs
├── jsconfig.json
├── messages
├── next.config.ts
├── next-env.d.ts
├── node_modules
├── out
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
├── README.md
├── src
│   ├── app
│   │   ├── (app)
│   │   ├── Content.json
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components
│   │   ├── BackgroundOverlay.tsx
│   │   ├── body.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── LeftBorderTitle.tsx
│   │   ├── Modal.tsx
│   │   ├── Navbars.tsx
│   │   ├── Stack.tsx
│   │   ├── TreeModal.tsx
│   │   └── Typography.tsx
│   ├── constants
│   │   ├── icons.tsx
│   │   ├── otherWeb.ts
│   │   └── routes.ts
│   ├── i18n
│   │   └── request.ts
│   ├── providers
│   │   └── BaseProvider.tsx
│   ├── types
│   │   ├── featureTypes.ts
│   │   └── screenTypes.ts
│   └── utils
│       ├── gsapFadeIn.ts
│       └── widthDetector.ts
│
├── tailwind.config.mjs
├── tsconfig.json
└── yarn.lock

```

---

## 🔑 Environment Variables

Create a `.env.local` file and add:

```sh
NEXT_PUBLIC_API_URL=https://api.example.com
NEXTAUTH_SECRET=your-secret-key
```

---

## ⚡ Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build the project
- `pnpm start` – Run production build
- `pnpm lint` – Run ESLint
- `pnpm test` – Run tests

---

## 🤝 Contributing

1. Fork the project.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

👤 **Your Name**  
- Twitter: [@yourhandle](https://twitter.com/yourhandle)
- GitHub: [yourusername](https://github.com/yourusername)
- Email: your.email@example.com

