document.addEventListener('DOMContentLoaded', () => {

})

function addLike(){
    const likeButton = document.getElementById('heart')
    const count = document.getElementById('counter').value
    const likesList = document.getElementById('likes')
    likeButton.addEventListener('click', () => {
        const newLike = document.createElement('li')
        newLike.innerText = `${count} has been liked`
    })

}