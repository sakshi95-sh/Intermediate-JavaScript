let itemList=[]

export function addItem(item) {
  itemList.push(item)
  return itemList
}
export function removeItem(item) {
  for (let i = 0; i < itemList.length;i++) {
    if (item === itemList[i]) {
      // console.log(item === ele)
     return itemList.splice(i,1)
   }
 }
 return console.log("This Item not Listed")
}
export function listItems() {
  itemList.forEach(element =>
  {
      console.log(element)
  })
}
