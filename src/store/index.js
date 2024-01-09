import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShow: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    increaseBy5(state, actions) {
      state.counter = state.counter + actions.payload;
    },
    toggle(state) {
      state.isShow = !state.isShow;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
