module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   bodycolor: "#ffff00",
    //   textcolor: "#ffffff",
    //   titlecolor: "#fffeff",
    //   cardbgcolor: "#353444",
    // },

    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        heroImage: "url('/src/images/cta-bg.jpg')",
        slidebg: "url('/src/images/slide-image-bg.png')",
        roadmapbg: "url('/src/images/roadmap.gif')",
        roadbg: "url('/src/images/roadmapImg.png')",
        neonroadmap: "url('/src/images/neonroadmap2.png')",
        headerbgimage: "url('/src/images/headerbgimage.png')",
      },
      animation: {
        // Bounces for a total of 5 seconds
        "bounce-short": "bounce 1s ease-in-out 2",
      },
    },
  },
  plugins: [],
};
