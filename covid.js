//document fragmentation
var tableRow = function(val,index){
    let fragment = new DocumentFragment();
    const   tr = document.createElement('tr'),
            th = document.createElement('th'),
            td1 = document.createElement('td'),
            td2 = document.createElement('td'),
            td3 = document.createElement('td'),
            td4 = document.createElement('td');
    th.innerText = index;
    td1.innerText = val.country;    
    td2.innerText = val.deaths;
    td3.innerText = val.recovered;
    td4.innerText = val.active;
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    fragment.appendChild(tr);
    return fragment;
}
const loadingEffect =
    /* This practice of manipulating DOM is not recommended */ 
    `<div class="load-wrap">
        <div class="load-1">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>`
var dispCountry = () =>{
    // Selecting container class and adding loading effect as the data is fetched
    document.querySelector(".container").innerHTML+=loadingEffect;
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(data=>{
        //After the data fetching is over , remove loading node
        loadingNode = document.querySelector(".container");
        loadingNode.removeChild(loadingNode.childNodes[3]);
         return data.json()
    })
    .then(data=>{
        let tab = document.querySelector('#tab');  
        data.map((val,index)=>tab.appendChild(tableRow(val,index)))
    })
}

var searchCountry = () =>{
    let searchVal = document.getElementById("searcher").value
    document.getElementById("tab").innerHTML=""
    // Selecting container class and adding loading effect as the data is fetched
    document.querySelector(".container").innerHTML+=loadingEffect;
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(data=>{
        //After the data fetching is over , remove loading node
        loadingNode = document.querySelector(".container");
        loadingNode.removeChild(loadingNode.childNodes[3]);
        return data.json()
    })
    .then(data=>{
        data=data.filter(data=>data.country.toLowerCase()==searchVal.toLowerCase()||searchVal=="")
        console.log(data)
        let tab = document.querySelector('#tab');  
        data.map((val,index)=>tab.appendChild(tableRow(val,index)))
    })
}