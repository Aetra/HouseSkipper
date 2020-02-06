import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import '.././tbl.css';

class CompetencesCB extends React.Component{
  constructor(props) {
  super(props);
  this.state={
  stats:[],
  };
}
 render(){
   ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);
   const chartConfigs = {
       type: 'angulargauge', // The gauge type
       width: '180', // Width of the gauge
       height: '150', // Height of the gauge
       dataFormat: 'json', // Data type
       dataSource: {
       // Chart Configuration
         "chart": {
             "caption": "Gros Oeuvre",
             "lowerLimit": "1",
             "upperLimit": "5",
             "showValue": "1",
             "numberSuffix": "",
             "theme": "fusion",
             "showToolTip": "0"
         },
         // Chart Data
         "colorRange": {
             "color": [{
                 "minValue": "1",
                 "maxValue": "3",
                 "code": "#e5350e"
             }, {
                 "minValue": "2",
                 "maxValue": "4",
                 "code": "#f9ee05"
             }, {
                 "minValue": "4",
                 "maxValue": "5",
                 "code": "#00ec19"
             }]
         },
         "dials": {
             "dial": [{
                 "value": "3.5"
             }]
         }
     }
   };
     const chartConfigs2 = {
         type: 'angulargauge', // The gauge type
         width: '180', // Width of the gauge
         height: '150', // Height of the gauge
         dataFormat: 'json', // Data type
         dataSource: {
         // Chart Configuration
           "chart": {
               "caption": "Second Oeuvre",
               "lowerLimit": "1",
               "upperLimit": "5",
               "showValue": "1",
               "numberSuffix": "",
               "theme": "fusion",
               "showToolTip": "0"
           },
           // Chart Data
           "colorRange": {
               "color": [{
                   "minValue": "1",
                   "maxValue": "3",
                   "code": "#e5350e"
               }, {
                   "minValue": "2",
                   "maxValue": "4",
                   "code": "#f9ee05"
               }, {
                   "minValue": "4",
                   "maxValue": "5",
                   "code": "#00ec19"
               }]
           },
           "dials": {
               "dial": [{
                   "value": "3.5"
               }]
           }
       }
   };
   const chartConfigs3 = {
       type: 'angulargauge', // The gauge type
       width: '180', // Width of the gauge
       height: '150', // Height of the gauge
       dataFormat: 'json', // Data type
       dataSource: {
       // Chart Configuration
         "chart": {
             "caption": "Petit Travaux",
             "lowerLimit": "1",
             "upperLimit": "5",
             "showValue": "1",
             "numberSuffix": "",
             "theme": "fusion",
             "showToolTip": "0"
         },
         // Chart Data
         "colorRange": {
             "color": [{
                 "minValue": "1",
                 "maxValue": "3",
                 "code": "#e5350e"
             }, {
                 "minValue": "2",
                 "maxValue": "4",
                 "code": "#f9ee05"
             }, {
                 "minValue": "4",
                 "maxValue": "5",
                 "code": "#00ec19"
             }]
         },
         "dials": {
             "dial": [{
                 "value": "3.5"
             }]
         }
     }
 };
 const chartConfigs4 = {
     type: 'angulargauge', // The gauge type
     width: '155', // Width of the gauge
     height: '140', // Height of the gauge
     dataFormat: 'json', // Data type
     dataSource: {
     // Chart Configuration
       "chart": {
           "caption": "Paysager",
           "lowerLimit": "1",
           "upperLimit": "5",
           "showValue": "1",
           "numberSuffix": "",
           "theme": "fusion",
           "showToolTip": "0"
       },
       // Chart Data
       "colorRange": {
           "color": [{
               "minValue": "1",
               "maxValue": "3",
               "code": "#e5350e"
           }, {
               "minValue": "2",
               "maxValue": "4",
               "code": "#f9ee05"
           }, {
               "minValue": "4",
               "maxValue": "5",
               "code": "#00ec19"
           }]
       },
       "dials": {
           "dial": [{
               "value": "3.5"
           }]
       }
   }
};
      return(
     <div className="MesTravaux">
      <h2 className="text-bold"> Mes Compétences </h2>
      <div className="row">
        <div className="col-4">
          <ReactFC
            {...chartConfigs}/>
        </div>
        <div className="col-4">
          <ReactFC
            {...chartConfigs2}/>
        </div>
        <div className="col-4">
          <ReactFC
            {...chartConfigs3}/>
        </div>

      </div>
    </div>
   );}
}
export default CompetencesCB;
