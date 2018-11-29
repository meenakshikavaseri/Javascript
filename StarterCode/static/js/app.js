/// from data.js
var tableData = data;

// YOUR CODE HERE!
//create a table row and for each of the objects, filter and accept diff inputs
var singleRow = {
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  }
//create a function to populate the table 
function buildTable (){
d3.event.preventDefault()
  var tBody = d3.select('tbody')
  tBody.html('')
// var tRow=  tBody.append('tr')

//filter layer to look at the value at the input field or just filter the data.

dateVal=d3.select("#datetime").property("value")
filterData = tableData.filter(dataPoint => dataPoint.datetime==dateVal)
filterData.forEach(function (singleRow){
 var tRow=  tBody.append('tr')
tRow.html(`<td>${singleRow['datetime']}</td>
<td>${singleRow['city']}</td>
<td>${singleRow['state']}</td>
<td>${singleRow['country']}</td>
<td>${singleRow['shape']}</td>
<td>${singleRow['durationMinutes']}</td>
<td>${singleRow['comments']}</td>`)
})
}

//event listener to call that function
d3.select("#filter-btn").on("click", buildTable)



