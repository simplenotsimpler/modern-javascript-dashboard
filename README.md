# Modern JavaScript Dashboard
Sample themable JavaScript dashboard template that employs modern ES6, Bootstrap 4 and CSS grid. 

Current theme [Microsoft Power BI Color Blind Friendly](https://community.powerbi.com/t5/Themes-Gallery/Color-Blind-Friendly/td-p/140597). 

# Notes:
* __*Only*__ targets **modern** browsers. 
* This template is ___NOT___  compatible with IE. This is intentional...how can we help Microsoft kill IE if we keep making stuff that works with it?
* Tested with Bootstrap 4.4.1 CSS framework.
* This has __*NOT*__ been tested with other CSS frameworks.
* If the proper library for number or date formatting does not load, this gracefully fails to no formatting.
* Strongly recommended to use ISO 8601 date formats in your source data and configuration. Then use the UI for localization.
* Accessibility: Minimal level (Level A ??).
* Site search intentionally left non-functional since developers will likely want to use their own tool, e.g. Elasticsearch, etc.

# Live Demo
[https://simplenotsimpler.github.io/modern-javascript-dashboard/](https://simplenotsimpler.github.io/modern-javascript-dashboard/)

# Getting Started
Download or clone from [modern-javascript-dashboard](https://github.com/simplenotsimpler/modern-javascript-dashboard).

## Requires:
* [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
* [Apex Charts](https://github.com/apexcharts/apexcharts.js)
* [ModernTable Library](https://github.com/simplenotsimpler/modern-table)
* JSON data source
* Container to hold the datatable 

## Recommended:
* Number formatting: [format-intl-number library](https://github.com/simplenotsimpler/format-intl-number)
* Date formatting: [Moment.js](https://momentjs.com/)

# License
This project is [MIT licensed](./LICENSE).