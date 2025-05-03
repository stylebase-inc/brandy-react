# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# brandy-react

## Storybook

This project uses Storybook for component development and documentation.

### Running Storybook Locally

```bash
npm run storybook
```

### Deploying Storybook to GitHub Pages

Storybook is automatically deployed to GitHub Pages when changes are pushed to the main branch.

You can also manually deploy Storybook with:

```bash
npm run deploy-storybook
```

The deployed Storybook will be available at: https://[your-github-username].github.io/brandy-react/
