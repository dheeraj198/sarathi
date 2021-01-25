 $("#create-user").click(function() {
  $("#popup").show();
});

$("#close, #cancel, #create").click(function() {
  $("#popup").hide();
});

    function addStudent()
    {
      var name=document.sample.name.value;
      var EmployeeID=document.sample.EmployeeID.value;
      var Department=document.sample.Department.value;
      var email=document.sample.email.value;
      var DOJ=document.sample.DOJ.value;
      
    if(!name || !EmployeeID || !Department || !email || !DOJ)
    {
      alert("Some fields missing");
    }
    else{
      var tr=document.createElement('tr');

      var td1=tr.appendChild(document.createElement('td'));
      var td2=tr.appendChild(document.createElement('td'));
      var td3=tr.appendChild(document.createElement('td'));
      var td4=tr.appendChild(document.createElement('td'));
      var td5=tr.appendChild(document.createElement('td'));
    var td6=tr.appendChild(document.createElement('td'));

      td1.innerHTML=name;
      td2.innerHTML=EmployeeID;
      td3.innerHTML=Department;
      td4.innerHTML=email;
      td5.innerHTML=DOJ;
      td6.innerHTML = td6.innerHTML + "<button type='button' value='Delete row' onclick='removeRow(this)'>✖</button>"

      document.getElementById("tb1").appendChild(tr);

       $("#popup").hide();
      document.getElementById("formId").reset();
    }
    
}
   function removeRow(oButton) {
        var empTab = document.getElementById('tb1');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
    } 