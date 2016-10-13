# ls-grid
Simple AngularJS grid

# Features
* Data array or dataUrl is only  required config to start!
* Headers are  auto created if missing
* Every column is sortable
* Bottom toolbar with info and pagination
* Clear folder structure

# Dependencies
    <!-- VENDORS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.4/lodash.min.js"></script>
    <script src="scripts/vendor/angular-paging.js"></script>
    <script src="scripts/vendor/angular-tabindex.js"></script>
    <script src="scripts/vendor/angular-pagination.js"></script>

    <!-- LS-GRID COMPONENTS -->
    <script src="components/lsPager/lsPager.js"></script>
    <script src="components/lsGrid/lsGrid.js"></script>
    <link rel="stylesheet" href="components/lsGrid/lsGrid.css"/>
    
# Demo
http://wap7.ru/folio/angular-ls-grid/index.html

# Documentation

``` 

Pass options to directive ls-grid 
Available options are

data - {Array}
dataUrl - {String}
headers -  {Array}
itemsPerPage - {Number}, 20 by default
tableWidth - {css value}, 90% by default
----
//EXAMPLE 1
//Width,  itemsPerPage, dataUrl and  headers are passed
$scope.options = {
    tableWidth: '600px',
    itemsPerPage: 15,
    dataUrl: 'api/mydata.json',
    headers: {"name": "Name", "start_date": "Start Date", "clicks": "Clicks"}
};
    
<ls-grid options="options"></ls-grid> 
----
//EXAMPLE 2
//Only data passed
$scope.options2 = {
    data: [{
             "id": 358,
             "name": "Skidoo",
             "start_date": "2017-04-24",
             "clicks": 66
           }, {
             "id": 548,
             "name": "Flashspan",
             "start_date": "2019-03-13",
             "clicks": 107
          }]

};
    
<ls-grid options="options2"></ls-grid> 

```




# Download
```bash
git clone https://github.com/lev-savranskiy/angular-ls-grid.git

OR

ZIP https://github.com/lev-savranskiy/angular-ls-grid/archive/master.zip
```

