import base from "@reflexjs/preset-base"

export default {
  preset: base,

  colors: {
    text: `#444`,
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
    hr: {
      borderTop: "1px solid",
      borderTopColor: "border",
      marginTop: "4rem",
      marginBottom: "6rem"
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
