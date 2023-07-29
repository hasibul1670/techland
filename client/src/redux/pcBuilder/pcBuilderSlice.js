// pcBuilderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState: {
    selectedComponent: null,
    selectedComponents: {},
    componentDetails: {
      cpu: { name: "CPU", price: 0,category:''},
    },
    pcBuilding: [], // Initialize pcBuilding as an empty array
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
      const { componentName, price,category } = action.payload;
      state.pcBuilding.push({ componentName, price,category });
    },
    // ... other reducers ...
  },
});

export const { setSelectedComponent, setSelectedComponents, addToPcBuilding } =
  pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;
