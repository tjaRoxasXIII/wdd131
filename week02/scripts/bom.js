const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', function() {
    let li = document.createElement('li');
    let delButton = document.createElement('button');

    if (input.value.trim() == '') {
        alert("Please enter text prior to adding your chapter!")
        input.focus()
    }
    else {

        li.textContent = input.value;
        delButton.textContent = '❌';

        li.append(delButton);
        list.append(li);
        input.value = '';
    }

   delButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
    })
});


