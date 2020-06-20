/**
 * Apex Charts Pie Chart Settings and Data for:
 * Modern JavaScript Dashboard
 * Sample themable JavaScript dashboard template that employs modern ES6, Bootstrap 4 and CSS grid.
 * @author SimpleNotSimpler
 * @version 1.0.0
 * @license MIT
 * 
 * @requires [Apex Charts](https://github.com/apexcharts/apexcharts.js)
 * 
 */ 


// **************** SET UP DATA OUTSIDE CHART *******************************************

const pieLabels = ['Clothing', 'Grocery', 'Other'];

const pieSeries = [55, 28, 17];


// **************** SET UP CHART *******************************************
const pieOptions = {

    //data
    labels: pieLabels,
    series: pieSeries,

    //configuration
    chart: {
        //make sure to set both width and height
        //otherwise, chart will expand beyond container in both directions
        width: '100%',
        
        height: '90%',
        type: 'pie',
        toolbar: {
            show: true,
            tools: {
                download: '<i class="fas fa-download"></i>',
                zoom: false
            }
        },
    },

    /* this is confusing because there are two dataLabels. */
    dataLabels: {
         /* 
            dropShadow from the generic dataLabels 
            https://apexcharts.com/docs/datalabels/
        */
        dropShadow: {
            enabled: true,
            top: 2,
            left: 2,
            blur: 1,
            opacity: 1
        }
    },

    /* 
        dataLabels offset in the pie specific section.
        https://github.com/apexcharts/apexcharts.js/issues/349
    */
    plotOptions: {
        pie: {
            dataLabels: {
                minAngleToShowLabel: 20,
                offset: -5
            }
        }
    },

    title: {
        text: 'Monthly Sales By Category',
        align: 'center'
    },

    legend: {
        position: 'bottom',
    },

    // set to false because unable to get the tooltip to display with a percent sign
    tooltip: {
        enabled: false
    },

    responsive: [{
        breakpoint: 1199,
        chart: {
            width: "85%",
            height: "75%"
        },
        options: {
            title: {
                text: 'Mthly Sales',
                align: 'left'
            }
        }
    }]
};

const pieChart = new ApexCharts(
    document.getElementById('pie-chart'),
    pieOptions
);

pieChart.render();