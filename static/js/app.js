
function chartBuilder(oneSample) {
  d3.json("samples.json").then((data) => {
    var samples = data.samples; 
    var sampleArray = samples.filter(sampleObject => sampleObject.id == oneSample);
    //alert(sampleArray);
    var result = sampleArray[0];
    var otu_ids = result.otu_ids; 
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;
    //alert(sample_values);
    
    //    Build Bubble Chart
    var myBubbleData = [{
      x: otu_ids, //Use otu_ids for the x values.
      y: sample_values, //Use sample_values for the y values.
      text: otu_labels, //Use otu_labels for the text values.
      mode: "markers", 
      marker: {
        size: sample_values, //Use sample_values for the marker size.
        color: otu_ids, //Use otu_ids for the marker colors.
        colorscale: "Earth"        
      }
    }]; 

    //    Build bubble layout
    var myBubbleLayout = {
      title: "Bacterial Samples", 
      margin: {t:0},
      hovermode: "closest",
      xaxis: {title: "OTU ID"},
      margin: {t:30}
    };
    Plotly.newPlot("bubble", myBubbleData, myBubbleLayout); 
    
    //    Build horizontal bar chart 
    
    //with a dropdown menu to display the top 10 OTUs found in that individual.
    var myBarData = [{
      y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(), //Use otu_ids as the labels for the bar chart.
      x: sample_values.slice(0, 10).reverse(), //Use sample_values as the values for the bar chart.
      text: otu_labels.slice(0, 10).reverse(), //Use otu_labels as the hovertext for the chart.
      type: "bar", 
      orientation: "h"
    }];

    //  Build bar layout
    var myBarLayout = {
      title: "Top 10 Bacteria", 
      margin: {t:30, l: 100}
    };

    Plotly.newPlot("bar", myBarData, myBarLayout);
  
  }); 
}


//4. Display the sample metadata, i.e., an individual's demographic information.


//5. Display each key-value pair from the metadata JSON object somewhere on the page.

//6. Update all of the plots any time that a new sample is selected.

//populate the dropdown with the values from samples.json
function initialize() {
  var dropdown = d3.select("#selDataset"); 
  d3.json("samples.json").then((data) => {
    var sampleList = data.names; 
    sampleList.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample); 

    });
    //capture first sample metadata from the list
    var firstSample = sampleList[0];
    chartBuilder(firstSample); 
    //metadataBuilder(firstSample);

  }); 
}

function optionChanged(newSample){
  //alert(newSample);
  chartBuilder(newSample);
}

initialize(); 