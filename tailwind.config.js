module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: { "bootstrap-body": "#f7f2ee" } },
  },
  plugins: [],
  corePlugins: { preflight: false },
};
