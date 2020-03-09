function Addform(){
var Text = document.getElementById('TextValue');
var AddToDo = document.getElementById('button-color');
var Active = document.getElementById('Active');
var complete =  document.getElementById('Final');
var newText =Text;

    if(newText.value.length>0)
{
    var li = document.createElement('li');
    var checkBox=document.createElement('newitem');
    checkBox.setAttribute('type', 'checkbox');
    li.appendChild(checkBox);
    
    li.innerHTML+=newText.value;
    Active.appendChild(li);
}
newText.appendChild ='';
}

