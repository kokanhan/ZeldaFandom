/*
 * Add your JavaScript to this file to complete the assignment.
 */

function createButtonClickListener(event) {//if you don't use event's info, you can leave it blank
    console.log("== Create button was clicked, event:", event);
    console.log("== show which button was clicked(easy to understand):", event.target);
    console.log("== show which button was clicked(more easy to understand):", event.currentTarget);
    // to hide a class, use 'hidden'; unhide a class, use 'block'
    document.getElementById("create-post-modal").style.display = 'block';
    document.getElementById("modal-backdrop").style.display = 'block';
    event.stopPropagation();
    
}

var createButton = document.getElementById('create-post-button');//find the create button
createButton.addEventListener('click', createButtonClickListener);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cancelButtonClickListener(event){
    document.getElementById("create-post-modal").style.display = 'none';
    document.getElementById("modal-backdrop").style.display = "none";
    var inputText = document.getElementById('post-text-input');
    inputText.value = '';
    var authorText = document.getElementById('post-attribution-input');
    authorText.value = '';
    event.stopPropagation();
}

//Get the first element with class="modal-close-button", smart way!
var closeButton = document.querySelector(".modal-close-button");
//you can alsow write it as:
//var closeButton = document.getElementsByClassName("modal-close-button")[0];

var cancelButton = document.getElementsByClassName("modal-cancel-button")[0];

cancelButton.addEventListener('click', cancelButtonClickListener);
closeButton.addEventListener('click', cancelButtonClickListener);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function insertNewPost(utext, author) {
    var newPost = document.createElement('article');
    newPost.classList.add("post");

    var postIconDiv = document.createElement('div');
    postIconDiv.classList.add("post-icon");
    newPost.appendChild(postIconDiv);
    // var newImg = document.createElement('img');
    // img.src = "http://placekitten.com/320/320/";
    // newPost.appendChild(newImg);

    // not necessary, delete later
    var PosIcon = document.createElement('i');
    PosIcon.classList.add("fas");
    PosIcon.classList.add("fa-bullhorn");
    postIconDiv.appendChild(PosIcon);
    // postIconDiv.classList.add("fas");
    // postIconDiv.classList.add("fa-bullhorn");

    var postContent = document.createElement('div');
    var postText = document.createElement('p');
    postContent.classList.add("post-content");
    postText.classList.add("post-text");
    postText.textContent = utext;
    postContent.appendChild(postText);
    newPost.appendChild(postContent);


    var postAuthor = document.createElement('p');
    postAuthor.classList.add("post-author");
    var authorLink = document.createElement('a');
    authorLink.href = "#";
    var linkName = document.createTextNode(author);
    authorLink.appendChild(linkName);
    postAuthor.appendChild(authorLink);
    postContent.appendChild(postAuthor);

    var postContainer = document.querySelector(".post-container");
    postContainer.appendChild(newPost);
}


function SubmitButtonClickListener(event) {
    console.log("== Accept button was clicked, event:", event);
    var inputText = document.getElementById('post-text-input').value;
    console.log("===text: ", inputText);
    var authorName = document.getElementById('post-attribution-input').value;
    if (inputText == "" || authorName == "") {
        alert("Please enter your text and name");
        document.getElementById("create-post-modal").style.display = "block";
        document.getElementById("modal-backdrop").style.display = "block";

    } else {
        insertNewPost(inputText, authorName);
        document.getElementById("create-post-modal").style.display = "none";
        document.getElementById("modal-backdrop").style.display = "none";
        document.getElementById('post-attribution-input').value = null;
        document.getElementById('post-text-input').value = '';
    }

}

var submitPostButton = document.querySelector('.modal-accept-button');//find the create button
submitPostButton.addEventListener('click', SubmitButtonClickListener);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function searchButtonClickListener(event){
    var postContainer = document.getElementsByClassName('post');
    var inputSearch = document.getElementById('navbar-search-input').value;
    for (var i = 0; i < postContainer.length; i++) {
        postContainer[i].classList.remove('hidden');
    }
    if (inputSearch !== null){
        for (var i = 0; i < postContainer.length; i++) {
            str = postContainer[i].textContent;
            n = str.search(new RegExp(inputSearch, "i"));// 'i' means to igore case
            if (n === -1) {// not match
                postContainer[i].classList.add('hidden');
            }
        }
    }

        console.log("search keyword is  null");
          
}

var searchButton = document.getElementById("navbar-search-button");
searchButton.addEventListener('click', searchButtonClickListener);

//live search
var LiveSearch = document.getElementById("navbar-search-input");
LiveSearch.addEventListener('keyup', searchButtonClickListener);