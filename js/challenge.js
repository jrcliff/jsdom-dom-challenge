let i = -1;
let j = 0;
let interval = setInterval(increment, 1000);
let count = document.getElementById('counter').value

const likeButton = document.getElementById('heart')
const likesList = document.querySelector('.likes')



function increment(){
    i++;
    document.querySelector('h1#counter').innerText = i;
    j = 0
}
increment();
document.addEventListener('DOMContentLoaded', () => {

})

document.getElementById('minus').addEventListener('click', () => {
    i--;
    document.getElementById('counter').innerText = i;
})

document.getElementById('plus').addEventListener('click', () => {
    i++;
    document.getElementById('counter').innerText = i;
})

document.getElementById('pause').addEventListener('click', () => {
    if(document.getElementById('pause').innerText == 'pause') {
        clearInterval(interval)
        document.querySelector('#pause').innerText = "resume"
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
    }else{
        interval = setInterval( increment, 1000);
        document.querySelector('#pause').innerText = "pause"
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
    }
})

document.getElementById('comment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let comment = document.getElementById('comment-input').value
    let commentList = document.querySelector('.comments')
    let p = document.createElement('p')
    let commentNode = document.createTextNode(comment)
    p.appendChild(commentNode)
    commentList.appendChild(p)
    document.getElementById('comment-input').value = ''
    
} )
   
    

likeButton.addEventListener('click', () => {
    j++;
    
    const newLike = document.createElement('li')
    let likeNode = document.createTextNode(`${i} has been liked ${j} times`)
    let lastLike = document.querySelector('.likes').lastChild
    newLike.appendChild(likeNode)
    if(j>1){
        lastLike.replaceWith(newLike)
    }else{
        likesList.appendChild(newLike)
    }
})


