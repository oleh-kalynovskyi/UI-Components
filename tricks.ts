// Create an array with 5 empty elements
const array = [...Array(5)];
console.log(array); // [undefined, undefined, undefined, undefined, undefined]
<div>
  {emptyArray.map((_, index) => (
    // display 0,1,2,3,4,
    <div key={index}>{index}</div> 
  ))}
</div>
/////////////////////////////<-----------
