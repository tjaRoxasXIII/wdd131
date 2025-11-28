const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];


button.addEventListener('click', function() {
    if (input.value.trim() == '') {
        alert("Please enter text prior to adding your chapter!")
        input.focus()
    }
    else {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function displayList(item){
    let li = document.createElement('li');
    let delButton = document.createElement('button');

    li.textContent = item;
    delButton.textContent = '❌';

    li.append(delButton);
    list.append(li);

    delButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chapterArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

