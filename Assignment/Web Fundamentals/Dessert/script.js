// Function to remove the element represented by the parameter
function removeElement(element){
    element.remove();
}

// Function alerts what is being searched for
function goBnHandler(){
    var searchValue = document.getElementById("searchTxt").value;
    alert('You are searching for "' + searchValue + '"');
}