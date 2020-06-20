/**
 * Apex Charts Bar Chart Settings and Data for:
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
// https://apexcharts.com/javascript-chart-demos/column-charts/basic/
// https://exceljet.net/chart/quarterly-sales-by-clustered-region


// leaving raw data in chart due to deadlines
// later may come back to and push these in appropriate arrays


// **************** SET UP CHART *******************************************
const barOptions = {

    //data
    series: [{
        name: 'East',
        data: [41929, 52833, 46603, 60273]
    }, {
        name: 'West',
        data: [48425, 62087, 54585, 73798]
    }, {
        name: 'North',
        data: [45842, 59964, 58242, 70319]
    }, {
        name: 'South',
        data: [31904, 44939, 53796, 46452]
    }],

    //configuration
    chart: {
        type: 'bar',
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
        text: 'Quarterly Sales By Region',
        align: 'center'
    },

    subtitle: {
        text: 'Updated yesterday at 11:59 PM',
        align: 'center',
        margin: 10
    },

    legend: {
        position: 'bottom'
    },

    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },

    fill: {
        opacity: 1
    },

    xaxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        axisTicks: {
            show: false,
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
            text: 'Sales (USD)'
        }
    },

    responsive: [{
        breakpoint: 1199,
        options: {
            title: {
                text: 'Qtly Sales / Region',
                align: 'left'
            }
        }
    }]
}

const barChart = new ApexCharts(document.getElementById('bar-chart'), barOptions);

barChart.render();