window.addEventListener("load", function() {
    
    let shortenedURLS = {}
    let a = document.createElement("A")

    function shortenURL(){

            if (inputBox2.value != ""){
                shortenedURLS[inputBox2.value] = inputBox.value;
                a.href = shortenedURLS[inputBox2.value]
                a.innerHTML = inputBox2.value
            }
            else {
                let tempURL = Math.floor(Math.random()*90000) + 10000
                shortenedURLS[tempURL] = inputBox.value;
                a.href = shortenedURLS[tempURL]
                a.innerHTML = "www.shortenedURL/" + tempURL
            }

        document.body.appendChild(a)

        console.log(shortenedURLS)
    };

    const inputBox=document.createElement('INPUT');
          inputBox.type='TEXT';
          inputBox.name='myInput';
          inputBox.value='https://www.google.com/';

    const inputBox2=document.createElement('INPUT');
          inputBox2.type='TEXT';
          inputBox2.name='myInput2';
          inputBox2.value='';

    const btn = document.createElement("BUTTON");
    btn.innerHTML = "CLICK ME";    
    
    
    const form = this.document.createElement("FORM")


    const titleOne=document.createElement('P');
    const titleTwo=document.createElement('P');
    titleOne.innerText = "Enter the URL you would like to go shorten:"
    titleTwo.innerText = "Enter a custom URL (if you like):"


    btn.onclick = shortenURL 
    form.appendChild(titleOne) 
    form.appendChild(inputBox);
    form.appendChild(titleTwo) 
    form.appendChild(inputBox2);          
    document.body.appendChild(form); 
    document.body.appendChild(btn);

});