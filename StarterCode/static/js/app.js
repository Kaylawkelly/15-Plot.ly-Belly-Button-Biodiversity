function buildMetadata(sample) {

    // metadata 
  
   
    var metadataURL = `/metadata/${sample}`;
      d3.json(metadataURL).then(function(sample){
        var sampleData = d3.select(`#sample-metadata`);
        sampleData.html("");
        Object.entries(sample).forEach(function([key,value]){
          var row = sampleData.append("p");
          row.text(`${key}:${value}`)
        })
      });
  }
  function buildCharts(sample) {
    // Use d3.json to get data
    var plotData = `/samples/${sample}`;

     // Barchart / horizontal 
     d3.json(plotData).then(function(data){
        var values = data.sample_values.slice(0,10);
        var labels = data.otu_ids.slice(0,10);
        var display = data.otu_labels.slice(0,10);
  
        var barchart = [{
          values: values,
          lables: labels,
          hovertext: display,
          type: "bar"
        }];
        Plotly.newPlot('bar',barchart);