// pcBuilderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState: {
    selectedComponent: null,
    selectedComponents: {},
    componentDetails: {
      cpu: { name: "CPU", price: 0, category: "" },
    },
    pcBuilding: [],
    totalCost: 0,
  },
  reducers: {
    setSelectedComponent(state, action) {
      state.selectedComponent = action.payload;
    },
    setSelectedComponents(state, action) {
      const { category, componentName } = action.payload;
      state.selectedComponents[category] = componentName;
    },
    addToPcBuilding(state, action) {
      const { componentName, price, category } = action.payload;
      state.pcBuilding.push({ componentName, price, category });
    },
    calculateTotalCost(state) {
      let totalCost = 0;
      state.pcBuilding.forEach((component) => {
        totalCost += component.price;
      });
      state.totalCost = totalCost;
    },
    calculateTotalCost(state) {
      let totalCost = 0;
      state.pcBuilding.forEach((component) => {
        totalCost += component.price;
      });
      state.totalCost = totalCost;
    },
  },
});

export const {
  setSelectedComponent,
  setSelectedComponents,
  addToPcBuilding,
  calculateTotalCost,
} = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;
