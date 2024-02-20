const parentContainer = document.querySelector('.read-more-container');


parentContainer.addEventListener('click',event=>{
    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector(
        '.read-more-txt'
    );
    currentText.classList.toggle('read-more-txt--show');

    current.textContent = current.textContent.includes('Read More') ?
        "Read Less.." : "Read More...";
})