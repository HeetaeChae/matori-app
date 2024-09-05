const shadow = {
  // iOS shadow
  shadowColor: "#000",
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  // Android shadow (elevation)
  elevation: 2,
} as const;

export { shadow };
