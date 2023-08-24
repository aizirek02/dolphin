import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  originalData: [],
  isOpen: false,
  selectedId: "",
  form: "",
  buttonType: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setOriginalData: (state, action) => {
      state.originalData = action.payload;
    },
    setOpenModal: (state, action) => {
      state.isOpen = action.payload;
    },
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    setButtonType: (state, action) => {
      state.buttonType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setData,
  setOriginalData,
  setOpenModal,
  setSelectedId,
  setForm,
  setButtonType,
} = productSlice.actions;

export default productSlice.reducer;
