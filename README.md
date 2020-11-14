# Modern JavaScript Dashboard
Sample themable JavaScript dashboard template that employs modern ES6, Bootstrap 4 and CSS grid. 

Current theme: [Microsoft Power BI Color Blind Friendly](https://community.powerbi.com/t5/Themes-Gallery/Color-Blind-Friendly/td-p/140597). 

# Notes:
* __*Only*__ targets **modern** browsers. 
* To help [Microsoft phase out IE11](https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666) and in anticipation of [Bootstrap 5 dropping IE support](https://blog.getbootstrap.com/2020/06/16/bootstrap-5-alpha/), IE is not supported.
* Compatible with Bootstrap 4.4.1 and higher.
* Specifically tested with Bootstrap 4.4.1 and 4.5.3.
* Theoretically, this should work with other CSS frameworks. However, this has __*NOT*__ been tested with other CSS frameworks, so your mileage may vary.
* If number or date formatting are specified in the configuration, but the proper library does not load, this gracefully fails to no formatting.
* Strongly recommended to use ISO 8601 date formats in your source data and configuration. Then use the UI for localization.
* Accessibility: Minimal level (Level A ??).
* Site search intentionally left non-functional since developers will likely want to use their own tool, e.g. Elasticsearch, etc.

# Live Demo
[https://simplenotsimpler.github.io/modern-javascript-dashboard/](https://simplenotsimpler.github.io/modern-javascript-dashboard/)

# Getting Started
Download or clone from [modern-javascript-dashboard](https://github.com/simplenotsimpler/modern-javascript-dashboard).

## Requires:
* Bootstrap - either of the versions below:
  * [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
  * [Bootstrap 4.5.3](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
* [Apex Charts](https://github.com/apexcharts/apexcharts.js)
* [ModernTable Library](https://github.com/simplenotsimpler/modern-table)
* JSON data source
* Container to hold the datatable 

## Recommended:
* Number formatting: [format-intl-number library](https://github.com/simplenotsimpler/format-intl-number)
* Date formatting: [Moment.js](https://momentjs.com/)

# License
This project is [MIT licensed](./LICENSE).