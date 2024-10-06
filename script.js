let x = document.querySelector('.btn');
x.addEventListener('click',ran_to);

function ran_img(){
    let a = ["https://assets.goal.com/images/v3/bltd12a9f6b38d99b77/Lionel_Messi_react_Argentina_Australia_World_Cup.png?auto=webp&format=pjpg&width=3840&quality=60","https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg","https://assets.goal.com/images/v3/bltb241cf247eb94962/0639999c91a104b4869462b5c53c9bb3c011eb1d.jpg?auto=webp&format=pjpg&width=3840&quality=60","https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg"]
    let b = a.length;
    let ran_index = Math.floor(Math.random()*b);
    return a[ran_index];
}

function ran_to(){
    let y = document.querySelector('.left');
    y.style.backgroundImage = `url(${ran_img()})`;
    y.style.backgroundSize = "cover"; // Scale the image
    y.style.backgroundRepeat = "no-repeat"; // Prevent repeating
    y.style.backgroundPosition = "center";

}