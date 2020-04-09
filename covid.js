var dispCountry = () =>{
    let htmlHolder = ""
    const loadingEffect =
    `<div class="load-wrap">
        <div class="load-1">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>`
    document.querySelector(".container").innerHTML+=loadingEffect;
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(data=>{
        document.querySelector(".container").lastElementChild="";
         return data.json()
    })
    .then(data=>{
        data.map((val,index)=>{
            htmlHolder+="<tr><th scope='row'>"+index+"</th>"
            htmlHolder+="<td>"+val.country+"</td>"
            htmlHolder+="<td>"+val.deaths+"</td>"
            htmlHolder+="<td>"+val.recovered+"</td>"
            htmlHolder+="<td>"+val.active+"</td></tr>"
            document.getElementById("tab").innerHTML+=htmlHolder
            htmlHolder=""
        })
    })
}