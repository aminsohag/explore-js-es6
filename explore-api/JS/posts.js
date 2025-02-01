
/**
 * 1. get the container element where you want to add the new elements
 * 2. create child element
 * 3. set innerText or innerHTML
 * 4. appendChild
*/


function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


function displayPost(posts){
    const postDiv = document.getElementById('post-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <p>Post Id : ${post.id}</p>
            <h3>Post Title : ${post.title}</h3>
            <h4>body: ${post.body}</h4>
        `;
        postDiv.appendChild(div)
        // console.log(post);
    }
}
loadPosts()

