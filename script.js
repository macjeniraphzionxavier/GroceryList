//Get elements from Item, Quantity, and Weight inputs
var groceryInput = document.getElementById("grocery-item");
var quantityInput = document.getElementById("amount");
var weightInput = document.getElementById("weight");
var addTo = document.getElementById("add");
var table = document.querySelector("table");


//Get elements from the table data of items, quantity, and weight
var tdItem = document.getElementById("itemTD");
var tdQuantity = document.getElementById("quantityTD");
var tdWeight = document.getElementById("weightID");
const checkboxInput = document.querySelector("input");


//function to create list

function createListElement(){
    var checkBox = document.createElement("input"); //Create input element for the checkbox
    // add the type, id, and value for checkbox
    checkBox.type="checkbox";
    checkBox.id ="checkbox1";
    checkBox.value = "checkbox1";
    
    
    var tbody = document.querySelector("tbody");//var to select the tbody element
    //Var to create tr, 
    var tRow = document.createElement("tr");
    var tData0 = document.createElement("td");
    var tData1 = document.createElement("td");
    var tData2 = document.createElement("td");
    var tData3 = document.createElement("td");

  


    // tData0.classList.add("check");
    tData1.classList.add("itemTD");
    tData2.classList.add("quantityTD");
    tData3.classList.add("weightTD");

    //get the value of the input
    var groceryValue = groceryInput.value;
    var quantityValue = quantityInput.value;
    var weightValue = weightInput.value;

    //create a new TextNode and append the text value 
    var groceryText = document.createTextNode(groceryValue);
    var quantityText = document.createTextNode(quantityValue);
    var weightText = document.createTextNode(weightValue);
   
    
    //append the text values to each table date
   
    tbody.appendChild(tRow);
    tData1.appendChild(groceryText);
    tData2.appendChild(quantityText);
    tData3.appendChild(weightText);
    tData0.appendChild(checkBox);

   
   
    tRow.appendChild(tData0);
    tRow.appendChild(tData1);
    tRow.appendChild(tData2);
    tRow.appendChild(tData3);
   //Cross items when 
    checkBox.addEventListener("click", function() {
       
        if (this.checked) {
            tData1.classList.add("done");
            tData2.classList.add("done");
            tData3.classList.add("done");

        } else {
            
            tData1.classList.remove("done");
            tData2.classList.remove("done");
            tData3.classList.remove("done");
        }
    });
    
    groceryInput.value = "";
    quantityInput.value ="";
    weightInput.value="";
    
    
;
}

function addListAfterClick(){
   
    createListElement();
    

}


addTo.addEventListener("click",addListAfterClick);

