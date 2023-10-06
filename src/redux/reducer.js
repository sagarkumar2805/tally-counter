import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "tally",
  initialState: { tallys: [{ count: 0, title: "Tally" }] },
  reducers: {
    addTally: (state) => {
      state.tallys.push({ count: 0, title: "Tally" });
    },
    incrementCount: (state, action) => {
      const { index } = action.payload;
      state.tallys[index].count += 1;
    },
    decrementCount: (state, action) => {
      const { index } = action.payload;
      if (state.tallys[index].count > 0) {
        state.tallys[index].count -= 1;
      }
    },
    setTally: (state, action) => {
      const { index, value } = action.payload;
      state.tallys[index].count = value;
    },
    changeTallyName: (state, action) => {
      const { index, value } = action.payload;
      state.tallys[index].title = value;
    },
    deleteTally: (state, action) => {
      const { index } = action.payload;
      state.tallys.splice(index, 1);
    },
    resetTally: (state, action) => {
      const { index } = action.payload;
      state.tallys[index].title = "Tally";
      state.tallys[index].count = 0;
    },
  },
});

export const {
  addTally,
  incrementCount,
  decrementCount,
  setTally,
  changeTallyName,
  deleteTally,
  resetTally,
} = slice.actions;
export default slice.reducer;
