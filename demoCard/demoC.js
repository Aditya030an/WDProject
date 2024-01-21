const sc = document.querySelector(".main");
const uf = document.querySelector(".unfollow");
const count = document.querySelector(".counter");
const image = document.querySelector(".image");
const imgcontainer = document.querySelector(".imgcontainer");


const backphoto = document.getElementById('backphoto');
image.style.backgroundImage = "url('./img/wallpaper3.jpg')";
backphoto.onchange = ()=>{
    const selectedfile = backphoto.files[0].name;
    console.log(selectedfile);
    image.style.backgroundImage = "url('./img/" + selectedfile + "')";
}


const profilePhoto = document.getElementById('profilePhoto');
imgcontainer.style.backgroundImage = "url('./img/default\ phot.jpg')";
profilePhoto.onchange = ()=>{
    const profileImg = profilePhoto.files[0].name;
        imgcontainer.style.backgroundImage = "url('./img/" + profileImg + "')";
}

const on = () =>{
    console.log("clicked on share");
    sc.classList.add("active");
}

const off = () =>
{
    console.log("clicked on cross");
    sc.classList.remove("active");
}

const follow = ()=>{
    console.log("unfollow a gya");
    uf.classList.add("unfollowactive");


    let value = parseInt(count.innerHTML);
    value += 1;
    count.innerHTML = value;
    console.log(value);
}

const unfollow = () =>
{
    console.log("unfollow chele gya");
    uf.classList.remove("unfollowactive");

    let value = parseInt(count.innerHTML);
    value -= 1;
    count.innerHTML = value;
    console.log(value);
}
function ini (){
    count.textContent = 0;
    uf.classList.remove("unfollowactive");
}
const updateDetails = ()=>{
    let newName = document.getElementById("inputName");
    let newProfession = document.getElementById("inputProfession");
    let errormsg = document.getElementById("errormsg");
    if(newName.value === "" || newProfession.value === ""){
      errormsg.classList.remove("showerror");
      setTimeout(()=>{
        errormsg.classList.add("showerror");
      } , 1200)
    }
    else{

        let name = document.querySelector(".name");
        let proffession = document.querySelector(".profession");
    
        name.textContent = newName.value;
        proffession.innerHTML = newProfession.value ;
    
        document.querySelector(".inData").style.scale = 0;
        document.querySelector(".card").style.scale = 1;
    }
    

    ini();
}


