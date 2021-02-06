import base from "@reflexjs/preset-base"
// to override the default theme, reference @reflexjs/preset-base/index.js
export default {
  preset: base,
  // doc navigation button style
  button: {
    link: {
      bg: "#F5F5F5",
      color: "text",
      borderColor: "transparent",
      "&:hover, &:focus": {
        bg: "#d3d7d4",
        color: "text",
        borderColor: "transparent",
      },
    },
  },
  colors: {
    text: `#555`,
    accent: `#EF925E`,
    accentHover: "#FDAF51",
    primary: `#009ad6`,
    primaryHover: `#105176`
  },
  styles: {
    root: {
      blockquote: {
        paddingLeft: "10px",
        paddingTop: "6px",
        paddingBottom: "6px",
        backgroundColor: "#fcf16e",
        borderRadius: "4px",
        borderLeft: t => `8px solid ${t.colors.primary}`,
        // 👇
        color: "#000",
        fontSize: "1.2rem"
      },
    },
    a: {
      textDecoration: "underline",
    },
    hr: {
      borderTop: "1px solid",
      borderTopColor: "border",
      marginTop: "2rem",
      marginBottom: "4rem"
    },
    table: {
      borderCollapse: "collapse",
      width: "100%"
    },
    th: {
      border: "1px solid #ddd",
      padding: 2,
      textAlign: "left",
      backgroundColor: "#4CAF50",
      color: "white"
    },
    td: {
      padding: 2,
      border: "1px solid #ddd"
    }
    
  }
}
