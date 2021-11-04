var divText = document.createElement('div');
var content = document.createElement('div');
var inputQuestion = document.createElement('input');
var divSphere = document.createElement('div');
var divAnswer = document.createElement('span');
divText.style.textAlign='center';
inputQuestion.style.marginTop='2%';
divText.innerHTML = '<span>Input your question to ask void<span>';
content.className="content";
divAnswer.innerHTML='Click to ask';
inputQuestion.setAttribute('type','text');
document.body.append(content);

content.append(divText);
content.append(inputQuestion);;

divSphere.classList.add('sphere');
var answers = ['Maybe.', 'Never!', 'NO.', 'The future is bleak.','Possibly.', 'Yes!','Spirits say yes',];


divSphere.onclick=function() {
    if(inputQuestion.value.length){
        divSphere.classList.add('clshake');;
        var answer = answers[Math.floor(Math.random() * answers.length)];
        divAnswer.className="blinkcl";
        divAnswer.innerHTML = answer;
        divSphere.addEventListener( "animationend",  function() {
        divSphere.classList.remove("clshake");
        divAnswer.classList.remove("blinkcl")});
    }
}




content.append(divSphere);
divSphere.append(divAnswer);
