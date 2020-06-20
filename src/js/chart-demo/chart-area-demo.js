/**
 * Apex Charts Area Chart Settings and Data for:
 * Modern JavaScript Dashboard
 * Sample themable JavaScript dashboard template that employs modern ES6, Bootstrap 4 and CSS grid.
 * @author SimpleNotSimpler
 * @version 1.0.0
 * @license MIT
 * 
 * @requires [Apex Charts](https://github.com/apexcharts/apexcharts.js)
 * 
 */ 


// based on example from:
// https://apexcharts.com/docs/series/

// **************** SET UP DATA OUTSIDE CHART *******************************************

const yValues = [27038, 53082, 55320, 63578, 50564, 16757, 19313, 63626, 33636, 22181, 74702, 11223, 10242, 65196, 62970, 16598, 49865, 69310, 27103, 15954];

//friendly start date
//matching format of PostgreSQL & ISO
//http://www.postgresqltutorial.com/postgresql-date/

const startMonth = moment("2018-08-01", "YYYY-MM-DD");

let xValues = [];

//generate months based on length of yValues array & populate xValues array
for (i = 0; i < yValues.length; i++) {
    //need to add a month
    //https://stackoverflow.com/questions/52851697/get-a-range-of-months-using-moment-with-start-month-and-end-month
    //based on solution from Prem Oct 17 '18 10:04

    xValues.push(startMonth.format("YYYY-MM-DD"));
    startMonth.add(1, 'month');
}

// sets up array for the "Numeric Paired Values in two-dimensional array" method in:
// https://apexcharts.com/docs/series/

let timeSeries = [];

for (i = 0; i < yValues.length; i++) {
    timeSeries.push([xValues[i], yValues[i]]);
}

// **************** SET UP CHART *******************************************
const areaOptions = {

    //data
    series: [{
        name: 'revenue',
        data: timeSeries
    }],

    //configuration
    chart: {
        type: 'area',
        //keep at 95% so chart does not cause horizontal scrolling
        height: '95%',
        width: '95%',

        toolbar: {
            tools: {
                download: '<i class="fas fa-download"></i>',
                zoom: false
            }
        },
    },

    dataLabels: {
        enabled: false
    },

    title: {
        text: 'Monthly Recurring Revenue',
        align: 'left'
    },

    subtitle: {
        text: 'Updated yesterday at 11:59 PM',
        align: 'center',
        margin: 10
    },

    markers: {

        size: 6
    },

    //https://apexcharts.com/docs/options/xaxis/
    xaxis: {
        type: 'datetime',
        title: {
            text: 'Month Year',
            offsetY: 15
        }
    },
    yaxis: {
        labels: {
               formatter: function (value) {
                if (typeof formatIntlNumber !=='undefined') {
                    return formatIntlNumber(value, 'currency-us');
                } else {
                    return value;
                }

            }
        },
        title: {
            text: 'Revenue (USD)'
        }
    },

    tooltip: {
        x: {
          format: 'MMM dd yyyy'
        }
      },

    responsive: [{ 
        breakpoint: 1199,
        options: {
            title: {
                text: 'MRR',
                align: 'left'
            }
        }
    }]
};


const areaChart = new ApexCharts(document.getElementById('area-chart'), areaOptions);

areaChart.render();