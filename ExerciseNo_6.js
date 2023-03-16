let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let btn3=document.querySelector("#btn3")
let btn4=document.querySelector("#btn4")

let iA=1;
let a=()=>{
    let container=document.querySelector(".container");
    container.innerHTML="<br>"
    
        let add=prompt("Add your to do");
        if(add){

            localStorage.setItem(`${iA}`,add)
            iA++;
        }else{
            return
        }
       
    

   
}
function bc(a){
    

   
    localStorage.removeItem(a);
    let container=document.querySelector(".container");
    container.innerHTML="<br>"

    let array={};
    let valueofLocalStorage=1; 
    let iofarray=0;
    let arraylength=0;
      //       0                5
    while(iofarray<localStorage.length){
          let value=localStorage.getItem(valueofLocalStorage)
          if(value===null){
               valueofLocalStorage++; 
    }else{
                
                array[iofarray]=value; //0:one,1:three,,2:four,3:five,4:six
                iofarray++; 
                arraylength++;
                valueofLocalStorage++;
            }

            
        }
        // console.log(array);
    //0:one,1:three,2:four,3:five,4:six
    let localStorageNo=1;
    let arrayNo=0;
    while(arrayNo<arraylength){
        localStorage.setItem(`${localStorageNo}`,`${array[arrayNo]}`)
        localStorageNo++;
        arrayNo++;
    }
}

let b=()=>{
  



    let xc=prompt("what item you want to delete,ENTER_THE_KEY")
    if(xc){
    localStorage.removeItem(xc);
    let container=document.querySelector(".container");
    container.innerHTML="<br>"

    let array={};
    let valueofLocalStorage=1; 
    let iofarray=0;
    let arraylength=0;
      //       0                5
    while(iofarray<localStorage.length){
          let value=localStorage.getItem(valueofLocalStorage)
          if(value===null){
               valueofLocalStorage++; 
    }else{
                
                array[iofarray]=value; //0:one,1:three,,2:four,3:five,4:six
                iofarray++; 
                arraylength++;
                valueofLocalStorage++;
            }

            
        }
        // console.log(array);
    //0:one,1:three,2:four,3:five,4:six
    let localStorageNo=1;
    let arrayNo=0;
    while(arrayNo<arraylength){
        localStorage.setItem(`${localStorageNo}`,`${array[arrayNo]}`)
        localStorageNo++;
        arrayNo++;
    }
    iA--;
    console.log(arraylength)
    bc((arraylength+1))
}else{
    return;
}

}

let c=async ()=>{
    let container=document.querySelector(".container");
    let p1=new Promise((resolve,reject)=>{
        container.innerHTML= `
        <table class="table">
      <thead>
     <tr>
      <th scope="col">#</th>
      <th scope="col">TO DO</th>
      
    </tr>
  </thead>
  <tbody class="bodyofTable">
    
    
  </tbody>
  </table>
      
      `
      resolve(true);
    }) 
    await p1;
    let storage=localStorage.length;
    if(storage==0){
        let container=document.querySelector(".container");
    container.innerHTML="<h1>YOUR TO DO LIST IS EMPTY"
    }else{
        
        let rows=document.querySelector(".bodyofTable")
        for(let i=0;i<localStorage.length;i++){
            let a=localStorage.key(i);
            // console.log(a)
            let b=localStorage.getItem(a);
            // container.innerHTML=container.innerHTML+`<p> ${a} ${b} </p>`
            rows.innerHTML=rows.innerHTML+`
            <tr>
            <th scope="row">${a}</th>
         <td>${b}</td>
           </tr>
            `
        }
    }
}
let d=()=>{
    let xconfirm=confirm("ARE YOU SURE YOU WANT TO CLEAR YOUR TODO LIST ")
    if(xconfirm==true){
        
        localStorage.clear();
        let container=document.querySelector(".container");
        container.innerHTML="<br>"
        iA=1;
    }
    else{
        return;
    }
}
btn1.addEventListener('click',a)
btn2.addEventListener('click',b)
btn3.addEventListener('click',c);
btn4.addEventListener('click',d);


(async ()=>{
    onload=()=>{
        iA=(localStorage.length)+1
    }

    onload=()=>{
        c();
    }
})()

