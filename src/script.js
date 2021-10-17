let show = document.querySelector("#show");
const api = "https://www.breakingbadapi.com/api/";
console.log(show);

// this a way fetch its not a work with parcle..i don't know why?
// all = async ()=>{
//     const re = await fetch(api)
//     const da = await re.json()
//     console.log(da)
// }
// all();

//fetch a father api
gett = () => {
  fetch(api)
    .then((rep) => {
      return rep.json();
    })
    .then((dataaa) => {
      const obj = Object.entries(dataaa);
      const inobj = obj[0][1];
      getsaml(inobj);
      //  console.log(inobj)
    });
};
gett();
//fetch a son api
getsaml = (col) => {
  fetch(col)
    .then((re) => re.json())
    .then((dea) => {
      console.log(dea);
      dataName(dea);
    });
};
// tow Way it working but the frist away needed function change to result like result onther way.
dataName = (op) => {  //[1].that A One Way...-_-
    // let selcet = document.createElement("select")
    // selcet.className ="form-select w-75 p-3 "
    // selcet.id ="selt"
    // show.append(selcet)
    //  op.map((item)=>{
    //      let opt = document.createElement("option")
    //      selcet.append(opt)
    //     opt.innerHTML = item.name
    //  })
    // [2].that a onther way...-_-
    show.innerHTML = `<select class="form-select  " id="selt" onchange="change(this.value)">
      <option>please select</option>
      ${op.map((char) => `<option>${char.name}</option>`)}
      </select>`;
    }






      
change = (byName) => {
  fetch(api)
    .then((ret) => ret.json())
    .then((data) => {
      const obj2 = Object.entries(data);
      const obj3 = obj2[0][1];
      //console.log(obj3)
      fetch(`${obj3}?name=${byName}`)
        .then((re) => re.json())
        .then((d) => {
          if (byName !== "please select") {
            let data1 = document.querySelector("#data");
            data1.innerHTML = ` <div><h3>Name (${d.map(m => m.name)})</h3>
            <li>Portrayed (${d.map(m => m.portrayed)})</li>
            ${
              d.map(m => m.birthday) == "Unknown"
                ? ``
                : `<li>BirthDay(${d.map(m => m.birthday)})</li>`
            }
        <li>NickName (${d.map(m => m.nickname)})</li>
        <li>Category (${d.map(m => m.category)})</li>
            <li>Status (${d.map(m => m.status)})</li>
            <li>Occupation (${d.map(m => m.occupation)})</li>
        </div>
        <img src="${d.map(m => m.img)}" width = 100%>`;
            console.log(d[0].name);
            console.log(d.map((m) => m.name));
          }
        });
    });
};
