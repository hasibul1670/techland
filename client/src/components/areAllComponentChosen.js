const areAllComponentsChosen = () => {
  return componentTypes.every(
    (componentType) => componentType.componentName !== "" && componentType.price !== 0
  );
};
