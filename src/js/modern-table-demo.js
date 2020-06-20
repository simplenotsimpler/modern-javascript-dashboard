/**
 * ModernTable Settings for:
 * Modern JavaScript Dashboard
 * Sample themable JavaScript dashboard template that employs modern ES6, Bootstrap 4 and CSS grid.
 * @author SimpleNotSimpler
 * @version 1.0.0
 * @license MIT
 * 
 * @requires [ModernTable Library](https://github.com/simplenotsimpler/modern-table)
 */ 


// Updated relative json link to be compatible with gh-pages
// https://www.freecodecamp.org/forum/t/solved-relative-links-work-on-locahost-3000-but-not-on-github-pages/230681
const localJSON = 'data/sample-sales-data.json';

const sampleTable = new ModernTable(
  'table-container', // tableContainerID
  'sample-table', // tableID
  localJSON, // dataURL
  {
    tableClasses: 'table table-bordered table-striped table-hover table-sticky table-sm',
    tableCaption: 'Sample Sales Data',  
    searchClasses: 'form-control mb-2 w-25 float-right',
    colConfig: {
      'rpt_date': {
        'format': 'date-us',
        'dateFrom': 'YYYY-MM-DD',
        'dateTo': 'MM/DD/YY',
        'colTitle': 'report date'
      },
      'new_customers': {
        'format': 'number-grouped',
        'alignment': 'right'
      },
      'revenue': {
        'format': 'currency-us',
        'alignment': 'right'
      },
      'cogs': {
        'format': 'currency-us',
        'alignment': 'right'
      },
      'profit': {
        'format': 'currency-us',
        'alignment': 'right'
      },
      'profit_margin': {
        'format': 'percent',
        'numDecimals': 1,
        'alignment': 'right'
      }
    }
  });