const input = document.getElementById("numberOfWords");
const container = document.querySelector(".container");
let numberOfWords;
const genetrateWord = (n) =>{
    let text="";

    const letters="abcdefghijklmnopqrstuvwxyz";

    for(let i=0;i<n;++i){
        const random = (Math.random()*25).toFixed(0);
        text +=letters[random];
    }
    return text;
};
const generatepara = () =>
{
    numberOfWords = Number(input.value);

    const para =document.createElement("p");
    let data="";
    if (numberOfWords==0 ) {
        return 0;
      }
    for(let i=0;i<numberOfWords;++i)
    {
        const randomnumber=(Math.random()*10).toFixed(0);
        data += genetrateWord(randomnumber);
        data+=" ";
    }
    para.innerText=data;
    para.setAttribute("class","para");
    container.append(para);

};

