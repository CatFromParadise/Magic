var divText = document.createElement('div');
var content = document.createElement('div');
var inputQuestion = document.createElement('input');
var divSphere = document.createElement('div');
var divAnswer = document.createElement('span');
divText.style.textAlign='center';
inputQuestion.style.marginTop='2%';
divText.innerHTML = '<span>Input your question to ask the Void<span>';
content.className="content";
divAnswer.innerHTML='Click to ask';
inputQuestion.setAttribute('type','text');
document.body.append(content);

content.append(divText);
content.append(inputQuestion);;

divSphere.classList.add('sphere');
var answers = ['Maybe.', 'Never!', 'NO.', 'The future is bleak.','Possibly.', 'Yes!','Spirits say yes','Outlook not so good',
'Without a doubt','Better not tell you now','Void says no','Void says yes','My reply is no','It is decidedly so',
'Maybe you shoul ask again?','As I see it, yes','As I see it, no','Yes definetely','You may rely on it'];


divSphere.onclick=function() {
    if(inputQuestion.value.length){
        divSphere.classList.add('clshake');;
        var answer = answers[Math.floor(Math.random() * answers.length)];
        divAnswer.className="blinkcl";
        divAnswer.innerHTML = answer;
        divSphere.addEventListener( "animationend",  function() {
        divSphere.classList.remove("clshake");
        divAnswer.classList.remove("blinkcl")});
        inputQuestion.style.backgroundColor="white"
    }
    else{
        inputQuestion.placeholder="You have to input some text !!!"
    }
}




content.append(divSphere);
divSphere.append(divAnswer);
