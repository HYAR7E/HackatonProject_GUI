// Save data to cache
export function postCacheData(name, data){
  let _data = JSON.stringify(data)  // JSON stringify data
  console.log("JSON", _data)
  let _data = encryptData(_data)  // Encrypt data
  console.log("XOR", _data)
  let _name = encryptData(name)  // Encrypt name
  window.localStorage.setItem(_name, _data);  // Add data to cache
  return true;
}
// Get data from cache
export function getCacheData(name){
  let _name = encryptData(name)  // Encrypt name
  // If there is no data
  if(!window.localStorage.hasOwnProperty(_name))
    return false;

  // Return previous page data's pk
  let data = window.localStorage.getItem(_name)
  console.log("XOR", _data)
  data = encryptData(data)
  console.log("JSON", _data)
  return JSON.parse(data)
}
// Encryption function
const encryptData = data => {
  if(typeof data != "string" && typeof data != "number"){
    if(process.env.REACT_APP_DEBUG) console.error("ERROR, data is not string in functions.js function encryptData");
    return ""  // Default to handle error
  }
  data = String(data)

  // key's length according to data
  let key = process.env.REACT_APP_XOR_KEY;
  let new_key = key
  while(new_key.length < data.length) new_key += key
  key = new_key
  // encrypt
  return data.split("")  // Slit to array
  .map( (x, inx) => x.charCodeAt(0) ^ key.charCodeAt(inx) )  // XOR operation
  .map(y => String.fromCharCode(y))  // To character
  .join("")  // Join array
}
