export const customStylesSelect = {
    input: (provided:any) => ({
      ...provided,
    }),
    menuList: (provided:any) => ({
      ...provided,
      backgroundColor: "#fff",
      color: "#000",

    }),
    indicatorSeparator: (provided:any) => ({
      ...provided,
      display: 'none',
    }),
    indicatorsContainer: (provided:any, state:any) => ({
      ...provided,
      position: 'relative',
      top: '0'
    }),
    control: (provided:any) => ({
      ...provided,
      boxShadow: 'none',
      backgroundColor: "#fff",
      border: "1px solid #ededed !important",
      borderRadius: '12px',
      filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.05))",
    }),
    valueContainer: (provided:any) => ({
      ...provided,
      width: "80%",
      cursor: 'pointer',
      padding: "10px 15px",
      color: "#686767",
      position: 'relative',
      fontSize: '16px'
    }),
    menu: (provided:any) => ({
      ...provided,
      position: "absolute",
      zIndex: "990",
      fontSize: '14px'
  
    }),
    singleValue: (provided:any) => ({
      ...provided,
      color: "rgb(34, 41, 57)",
    }),
    placeholder: (provided:any) => ({
      ...provided,
      color: '#98A8B7',
    }),
  
}