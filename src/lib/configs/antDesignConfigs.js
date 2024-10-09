export const theme = ({ primaryColor, secondaryColor }) => {
  return {
    token: {
      secondaryColor: secondaryColor,
      colorPrimary: primaryColor,
      colorBorder: "#ebe7e8",
      colorPrimaryBorder: secondaryColor,
    },
    components: {
      Input: {
        activeBorderColor: primaryColor,
        hoverBorderColor: primaryColor,
      },
      Button: {
        fontWeight: 700,
        defaultColor: primaryColor,
        defaultHoverBg: secondaryColor,
        color: primaryColor,
        defaultHoverBorderColor: primaryColor,
      },
      Table: {
        headerSplitColor: primaryColor,
        stickyScrollBarBg: secondaryColor,
        stickyScrollBarBorderRadius: "0 0 10px 10px",
        cellPaddingBlock: 8,
      },
      Menu: {
        itemHoverBg: secondaryColor,
        itemHoverColor: primaryColor,
      },
      Calendar: {
        itemActiveBg: "#fff",
      },
      Select: {
        colorPrimary: primaryColor,
        colorPrimaryHover: primaryColor,
      },
      Pagination: {
        itemActiveBg: primaryColor,
        itemBg: primaryColor,
      },
    },
  };
};
