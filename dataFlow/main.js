const posts = [
    { name: 'John',
      text: 'I am from USA'  },
    { name: 'Rose',
      text: 'I am from Canada'

    }
]
const render = function(){
    for (post of posts) {
        
        $('#allPosts').append(`<div id='p'> ${post.name} ${post.text} </div>`)
    }
}
render()
$('button').on('click', function() {
    let newPost = {}
    newPost.name = $('#name').val()
    newPost.text = $('#text').val()
    posts.push(newPost)
    $('#allPosts').empty()
    render()

})

