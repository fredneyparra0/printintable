const //Variables Send Comment
    formSend = document.getElementById('form-send'),
    nameSend = document.getElementById('nameComment'),
    textSend = document.getElementById('textComment'),
    containerComments = document.getElementById('containerComments');
    ;


//Evento Send Comment

formSend.addEventListener('submit',(e) => {
    e.preventDefault();

    // Container Comment
    const commentContainer = document.createElement('div');
    commentContainer.className = 'comment';

    // Img Comment
    const imgSend = document.createElement('img');
    imgSend.className = 'img-comment';
    imgSend.setAttribute('src','img/person1.png');
    commentContainer.appendChild(imgSend);

    // Span Title
    const spanTitle = document.createElement('span');
    spanTitle.className = 'title-comment-send';
    spanTitle.textContent = nameSend.value;
    commentContainer.appendChild(spanTitle);

    // Date
    const dateComment = document.createElement('div');
    dateComment.className = 'date';
    const spanOne = document.createElement('span');
    const spanTwo = document.createElement('span');
    spanOne.textContent = 'Fecha ';
    spanTwo.textContent = '30-01-2020';
    dateComment.appendChild(spanOne);
    dateComment.appendChild(spanTwo);
    commentContainer.appendChild(dateComment)

    // Text Comment
    const pText = document.createElement('p');
    pText.className = 'p-comment';
    pText.textContent = textSend.value;
    commentContainer.appendChild(pText);

    containerComments.appendChild(commentContainer);

  });