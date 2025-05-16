const year = document.querySelector("#year");
const month = document.querySelector("#month");
const btn = document.querySelector("#btn");
const res = document.querySelector("#res");

btn.addEventListener("click", function () 
{ 
    const a = [];
    let num = 1;
    const week = new Date(`${year.value}/${month.value}/1`).getDay();
    const days = new Date(year.value, month.value, 0).getDate();
    for(let i = 0; i < days; i++)
    {
        if(i < week)
        {
            a[i] = '';
        }
        else
        {
            a[i] = num;
            num++;
        }
    }
    let display = `<table>
                    <thead>
                        <tr>
                            <td>日</td>
                            <td>一</td> 
                            <td>二</td>
                            <td>三</td>
                            <td>四</td>
                            <td>五</td>
                            <td>六</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>`;
    for(let i = 0; i < a.length; i++)
    {
        if(i % 7 == 0 && i != 0)
        {
            display += `</tr><tr>`;
        }
        if(a[i] == '')
        {
            display += `<td></td>`;
        }
        else
        {
            display += `<td>${a[i]}</td>`;
        }
    }
    display += `</tr>
                    </tbody>
                </table>`;
    res.innerHTML = display;
    console.log(a);
}) 