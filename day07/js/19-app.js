// 4- Dizideki her bir elemanın 2 katının mutlak değerini alıp
// başka bir diziye atın.
// Yeni dizinin elemanları azalan şekilde sıralansın.
let dizi1 = [-5, 6, 3, -5, -7, 4, 12, -58, 72];
let newArr=[];
dizi1.forEach((item,index)=>{
    newArr[index]=Math.abs(item*2)
})
console.log(newArr)
newArr.sort((a,b)=>b-a)
console.log(newArr)
