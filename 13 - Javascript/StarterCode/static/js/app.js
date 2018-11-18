// from data.js
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
  var tBody = d3.select('tbody')
  var tRow=  tBody.append('tr')

//option 1:
// var td = tRow.append('td')
// td.html(`${singleRow['datetime']}`)

// option 2:
tableData.forEach(function (singleRow){
 var tRow=  tBody.append('tr')
tRow.html(`<td>${singleRow['datetime']}</td>
<td>${singleRow['city']}</td>
<td>${singleRow['state']}</td>
<td>${singleRow['country']}</td>
<td>${singleRow['shape']}</td>
<td>${singleRow['durationMinutes']}</td>
<td>${singleRow['comments']}</td>`)
})
// do the same for all of them in data.js(table data)..
