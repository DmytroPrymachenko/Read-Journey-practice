import { useState, useEffect } from "react";
import { FilterSelect } from "./MyBooksFilter.Styled";

const options = [
  { value: "unread", label: "Unread" },
  { value: "in-progress", label: "In progress" },
  { value: "done", label: "Done" },
  { value: "all-books", label: "All books" },
];

const MyBooksFilter = ({ setSelectedOption }) => {
  const [currentOption, setCurrentOption] = useState(() => {
    const savedOption = localStorage.getItem("selectedBookFilter");
    return savedOption ? JSON.parse(savedOption) : options[3];
  });

  useEffect(() => {
    setSelectedOption(currentOption);
  }, [currentOption, setSelectedOption]);

  const handleChange = (option) => {
    setSelectedOption(option);
    setCurrentOption(option);

    localStorage.setItem("selectedBookFilter", JSON.stringify(option));
  };

  return (
    <FilterSelect
      onChange={handleChange}
      name="filter"
      components={{
        IndicatorSeparator: () => null,
      }}
      options={options}
      aria-label="Filter for the books"
      placeholder="All books"
      value={currentOption}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "var(--dark-grey)",
          boxShadow: state.isFocused ? "#3e3e3e" : "#3e3e3e",
          borderRadius: "12px",
          width: "120px",
          height: "40px",
          cursor: "pointer",
          border: "1px solid #3e3e3e",
          ":hover": {
            borderColor: "#3e3e3e",
            outline: "none",
          },
          ":active": {
            borderColor: "#3e3e3e",
            outline: "none",
          },
          caretColor: "transparent",
        }),
        singleValue: (b) => ({
          ...b,
          color: "var(--white)",
        }),
        dropdownIndicator: (b, s) => ({
          ...b,
          color: s.isFocused ? "var(--white)" : "var(--white)",
          transform: s.isFocused ? "rotate(180deg)" : "rotate(0deg)",
          ":hover": {
            color: "var(--white)",
            transform: "rotate(180deg)",
          },
          ":active": {
            transform: "rotate(180deg)",
          },
        }),
        option: (b, s) => ({
          ...b,
          color: !s.isSelected ? "var(--input-title)" : "var(--white)",
          backgroundColor: s.isSelected
            ? "var(--input-bg-selected)"
            : "var(--input-bg)",
          height: "22px",
          cursor: "pointer",
          "&:last-child": {
            paddingBottom: "28px",
          },
          ":active": {
            color: s.isSelected ? "var(--white)" : "var(--input-title)",
          },
        }),
        menu: (styles) => ({
          ...styles,
          borderRadius: "12px",
          backgroundColor: "var(--input-bg)",
        }),
        placeholder: (defaultStyles) => ({
          ...defaultStyles,
          color: "var(--white)",
        }),
        menuList: (styles) => ({
          ...styles,
          borderRadius: "12px",
          color: "var(--white)",
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.05)",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            background: "rgba(18, 20, 23, 0.05)",
          },
          "::-webkit-scrollbar-thumb:hover": {
            borderRadius: "10px",
            background: "rgba(7, 8, 9, 0.05)",
          },
        }),
      }}
    />
  );
};

export default MyBooksFilter;
