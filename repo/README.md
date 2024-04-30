# WWF

## Getting Started

Why pnpm?
pnpm is an alternative to npm that aims to solve the issue of disk space usage and redundancy in package installations. It achieves this by using a single global storage for packages and symbolic links to reference them. This can lead to significant savings in disk space, especially for projects with many dependencies or when working with multiple projects.

Step 1: Install `pnpm`
```bash
yarn global add pnpm
# or 
npm install -g pnpm
```

Step 2: Install Project
```bash
pnpm install
```

Step 3: Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.