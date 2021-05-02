function buildMetadata(sample) {

    // builds the metadata 
  
   
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