# plotly-challenge
 
Before creating any plots, I initiatized the dropdown with the values from samples.json and created a function to update all of the plots any time that a new sample is selected in the dropdown.

I created a ChartBuilder function to loop through variables that were equal to the data I wanted to plot in the samples.json file. 

I then built the bubble chart using the variables and set them to the x and y axis and text. Next, I built the layout of the bubble chart and used Plotly to deploy the bubble chart using the data and layout variables.

For the bar plot I used the same Chart Builder variables but sliced the first 10 objects for plotting and reversed the array to show a bar chart with the top 10 OTUs fournd per individual. Then I used Plotly to deploy the chart. 

The last thing I did was load in the metadata in the demographic info container per individual. I created a metatdataBuilder function, called the data, set it equal to sample and held the results in a list. I appended the list to the panel html container and created a new header tag "h6" that made the text smaller than the "h3" tag currently used for the demo info header. 

