export const getMaxColumns = (width) => {
  if (width < 500) return 1;
  else if (width < 769) return 2;
  else return 3;
};

/*

  IF MAX COLUMNS IS 1 
  [{one}, {two}, {three}, {four}, {five}] => [{one}, {two}, {three}, {four}, {five}]

  IF MAX COLUMNS IS 2
  [{one}, {two}, {three}, {four}, {five}] => [ [{one}, {three}, {five}], [{two}, {four}] ]

  IF MAX COLUMNS IS 3
  Remainder 0
  [{one}, {two}, {three}] => [ [{one}], [{two}], [{three}] ]
  Remainder 1
  [{one}, {two}, {three}, {four}] => [ [{one}], [{two}, {four}], [{three}] ]
  Remainder 2
  [{one}, {two}, {three}, {four}, {five}] => [ [{one}, {four}], [{two}], [{three}, {five}] ]

*/
export const getSubarray = (maxColumns, array) => {
  switch (maxColumns) {
    case 1:
      return distributeAlternatively(array, 1);

    case 2:
      return distributeAlternatively(array, 2);

    case 3:
      return distributeAlternatively(array, 3);

    default:
      break;
  }
};

function distributeAlternatively(arr, divisions) {
  // if (divisions <= 0) throw new Error("divisions must be a positive integer");
  // if (arr.length < divisions)
  //   throw new Error("divisions cannot be greater than the length of the array");

  const result = [];
  for (let i = 0; i < divisions; i++) result.push([]);

  const length = arr.length;
  for (let i = 0; i < length; i++) result[i % divisions].push(arr[i]);

  return result;
}

export const getUserPreferenceTheme = () => {
  const userPreferenceBrowserSetting = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const userPreferenceLocalStorage =
    localStorage.getItem("dark-theme") === "true";
  return userPreferenceLocalStorage || userPreferenceBrowserSetting;
};
