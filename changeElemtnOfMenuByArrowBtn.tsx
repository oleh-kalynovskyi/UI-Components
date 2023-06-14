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
