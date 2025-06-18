let student=[{
    Name:'yash',
    City:'bhopal',
    Age:'20'
},
{
    Name:'yash',
    City:'bhopal',
    Age:'20'
},
{
    Name:'yash',
    City:'bhopal',
    Age:'20'
}
];
let show=document.querySelector("#datashow")
student.map((e)=>{
    show.innerHTML+= `
    <tr>
        <td>${e.Name}</td>
        <td>${e.City}</td>
        <td>${e.Age}</td>
    </tr> `
})