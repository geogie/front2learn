export default function constants(array, prefix) {
  let obj = {};
  array.map((val)=> {
    obj[val] = `${prefix}_${val}`;
  });
  return obj;
}
