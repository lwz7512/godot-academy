import base from "@reflexjs/preset-base"

export default {
  preset: base,

  colors: {
    primary: `#009ad6`,
    primaryHover: `#105176`
  },
  styles: {
    root: {
      blockquote: {
        padding: "16px",
        backgroundColor: "#feeeed",
        borderRadius: "4px",
        borderLeft: t => `8px solid ${t.colors.primary}`,
        // 👇
        color: "#000",
      },
    },
    hr: {
      borderTop: "1px solid",
      borderTopColor: "border",
      marginTop: "4rem",
      marginBottom: "6rem"
    },
    
  }
}
