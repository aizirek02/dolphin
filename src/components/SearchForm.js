import React from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./slice";

function SearchForm() {
  const dispatch = useDispatch();
  const originalData = useSelector((state) => state.productSlice.originalData);

  const handleTermChange = (event) => {
    let searchStr = event.target.value;
    let filteredData = originalData.filter((e) =>
      e.title.toUpperCase().includes(searchStr.toUpperCase())
    );
    dispatch(setData(filteredData));
  };

  const handleSearch = (value) => {
    let searchStr = value;
    let filteredData = originalData.filter((e) =>
      e.title.toUpperCase().includes(searchStr.toUpperCase())
    );
    dispatch(setData(filteredData));
  };

  const { Search } = Input;

  return (
    <Search
      style={{
        height: "25px",
        width: "50rem",
        marginLeft: "300px",
        paddingTop: "80px",
      }}
      size="large"
      placeholder="Search"
      onChange={handleTermChange}
      enterButton
      onSearch={handleSearch}
    />
  );
}

export default SearchForm;
