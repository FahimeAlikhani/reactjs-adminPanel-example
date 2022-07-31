import React, { useState } from "react";
import { useStyle } from "../../assets/styles/input";
import Filter from "../../assets/images/Filter.svg";
import SearchBtn from "../button/searchBtn";
// import search from "../../assets/images/search.svg"

const FilterInput = ({ filter, setFilter , placeholder }) => {
  const [value, setValue] = useState(filter);
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.FilterContainer}>
        <span className={classes.searchIcon}>
          {/* <img className={classes.icon} src={search} alt="search"/> */}
        </span>
        <input
          className={classes.FilterInput}
          value={value || ""}
          onChange={(e) => {
            //setFilter(e.target.value);
            setValue(e.target.value);
            if(e.target.value === "") setFilter(e.target.value)
          }}
          placeholder={placeholder}
        />
        <SearchBtn
          title="جستجو"
          onClick={() => {
            setFilter(value);
          }}
        />
      </div>
      <span className={classes.iconContainer}>
        <img className={classes.icon} src={Filter} alt="search" />
      </span>
    </div>
  );
};

export default FilterInput;
