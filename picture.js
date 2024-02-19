let elementpic = ''
let picArray = []
let returnpicarray = ''
const FetchPic = async ()=>{
    picArray = []
    let URLpic = `https://pixabay.com/api/?key=42450190-1160fb2f4840de43f15ec4c76&q=${element.name.common}&image_type=photo`
    let responsepic = await fetch(URLpic)
    let convertedResponsepic = await responsepic.json()
    let neccessary = convertedResponsepic.hits
    for (let index = 0; index < neccessary.length; index++) {
        elementpic = neccessary[index];
        picArray.push(elementpic.largeImageURL)
    }
    console.log(picArray);
    for (let i = 0; i < picArray.length; i++) {
         returnpicarray = picArray[0];
        console.log(returnpicarray);
    }
    const changebodybg = () =>{
        let picshow = Math.floor(Math.random()*picArray.length)
        document.body.style.backgroundImage = "url('" + picArray[picshow] + "')";
        console.log(picArray.length);
    }
    changebodybg()
        setInterval(changebodybg, 5000)
}   