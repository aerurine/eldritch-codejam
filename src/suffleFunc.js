export const shuffle = (arr) => {
  let suffled = [];
  let current = arr.lenght;

  while (current != 0) {
    let random = Math.floor(Math.random() * current);
    suffled.push(arr[random]);
    arr.splice(random, 1);
    current--;
  }
  return suffled;
}

