// with formik

function increase(arr: IListItem[], value: string, valueField: string) {
  const currentIndex = arr.findIndex((item: IListItem) => item.value === value);
  const nextItem = arr[currentIndex + 1];
  setFieldValue(valueField, nextItem.value);
  handleSubmit()
}
function decrease(arr: IListItem[], value: string, valueField: string) {
  const currentIndex = arr.findIndex((item: IListItem) => item.value === value);
  const nextItem = arr[currentIndex - 1];
  setFieldValue(valueField, nextItem.value);
  handleSubmit()
}
// make disable if choose last of first element of menu
function btnDisable(arr: string[], item: string) {
  return arr.length - 1 === arr.indexOf(item);
}
function btnDisableP(arr: string[], item: string) {
  return 0 === arr.indexOf(item);
}

// call functions
onClick={() => increase(SortTimeItems, values.time, 'time')} // array of menu element, current value, name of formik field
disabled={btnDisable(SortTimeItems, values.time)} // array of menu element, current value
