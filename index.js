console.log('This is index.js');
const candidates = [
 {
    name : 'Rohan Das',
    image : "https://randomuser.me/api/portraits/men/33.jpg",
    language:'python',
    framework:'node.js',
Age:22
},
 {
    name : 'Rohit Mehra',
    image : "https://randomuser.me/api/portraits/men/5.jpg",
    language:'python',
    framework:false,
Age:25
},
  {
    name : 'Monika Shah',
    image : "https://randomuser.me/api/portraits/women/33.jpg",
    language:'Angular',
    framework:'python',
Age :19
},
 {
    name : 'Mohit Sharma',
    image : "https://randomuser.me/api/portraits/men/23.jpg",
    language:'C++',
    framework:'Django',
Age : 35
},
 {
    name : 'Janice christian',
    image : "https://randomuser.me/api/portraits/women/45.jpg",
    language:'javascript',
    framework:'node.js',
    Age :34

}

]

let nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',nextCv)

function clickMyIterator(data){
   let  nextIndex=0;
return {
    next(){
        
        if(data.length>nextIndex)
        {

            return{value:data[nextIndex++],
                done:false}
        }
        else{

            return {value:undefined,done:true}
           }
    }
}

}

let result = clickMyIterator(candidates);
console.log(result.next().value);
nextCv();

function nextCv(){
   const currentCandidate= result.next().value;
//    console.log(candidate);
    let image = document.getElementById('image');
        let profile = document.getElementById('profile');
        if(currentCandidate!==undefined){
 image.innerHTML = `<img src="${currentCandidate.image} ">`
 profile.innerHTML = `<ul class="list-group">
 <li class="list-group-item">Name: ${currentCandidate.name}</li>
 <li class="list-group-item">Works in ${currentCandidate.language}  </li>
 <li class="list-group-item">with  ${currentCandidate.framework} framework</li>
 <li class="list-group-item">in the Age of ${currentCandidate.Age}</li>
</ul>`
        }
        else{
            alert('Data has Finished');
            window.location.reload();
        }
}