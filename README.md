# ls-grid
Simple AngularJS grid

# Features
* Data array or dataUrl is only  required config to start!
* Headers are  auto created if missing
* Every column is sortable
* Bottom toolbar with info and pagination
* Clear folder structure

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

