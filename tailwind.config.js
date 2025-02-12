/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#24A0b5",
        secondary: "#197886",
        tertiary: "#0e464f",
        border: "#2ba4b9",
        textGray: "#FAFAFA",
        textBasic: "#b3b3b3",
        borderYellow: "#D5EA001A",
        textBlack: "#0A0C11",
        accent: "#041E23",
        innerBgc: "#08252B",
        innerBgc2: "#07373F",
        bgcTikectsBox: "#052228",
        bgSelectTicket: "#12464E",
        bgcTicketImage: "#00000033",
        bgTicketDetails: "#08343c",
      },
      borderColor: {
        custom: "#07373F",
        border: "#2ba4b9",
        // primary: "#24A0b5",
        // tertiary: "#0e464f",
        // secondary: "#197886",
        ticketBorder: "#133D44",
        // bgSelectTicket: "#12464E",
      },
    },

    backdropBlur: {
      14: "14px",
    },
    backgroundImage: {
      "custom-gradient": `linear-gradient(0deg, #02191D, #02191D), 
                          radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)`,
      "custom-gradient-2": `linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)),
                          radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)`,
    },
    fontFamily: {
      roboto: ["Roboto", "serif"],
      roadrage: ["Road Rage", "serif"],
      jeju: ["Jeju Myeongjo", "serif"],
      alatsi: ["Alatsi", "serif"],
    },
  },
  plugins: [],
};
