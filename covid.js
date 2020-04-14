var dispCountry = () =>{
    let htmlHolder = ""
    let i
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(function(data) {return data.json()})
    .then(data=>{
        for(i=0;i<data.length;i++)
        {
            htmlHolder+=`<tr class="table-primary">
                        <td scope="row">${i}</th>
                        <td>${data[i].country}</td>
                        <td>${data[i].deaths}</td>
                        <td>${data[i].recovered}</td>
                        <td>${data[i].active}</td>
                        </tr>`
        }
        document.getElementById("FillTable").innerHTML=htmlHolder
    })
}

var searchCountry = () =>{
    let htmlHolder = ""
    let searchValue = document.getElementById("search").value
    let i,flag="false"
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(function(data) {return data.json()})
    .then(data=>{
        for(i=0;i<data.length;i++)
        {
            if(searchValue === data[i].country)
            {
                htmlHolder=`<tr class="table-primary">
                            <td scope="row">${i}</th>
                            <td>${data[i].country}</td>
                            <td>${data[i].deaths}</td>
                            <td>${data[i].recovered}</td>
                            <td>${data[i].active}</td>
                            </tr>`
                flag="true"
            }
        }

        if(flag=="true")
        document.getElementById("FillTable").innerHTML=htmlHolder
        else
        alert("Wrong Keyword")
    })
}