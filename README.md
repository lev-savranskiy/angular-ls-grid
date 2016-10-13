# ls-grid
Simple AngularJS grid

# Features
* Data array or dataUrl is only  required config to start!
* Headers can be auto  created
* Sort by every column
* Bottom toolbar with info and pagination
* Clear folder structure

# Demo
http://wap7.ru/folio/angular-ls-grid/index.html

# Documentation

``` 
Available options are

data - {Array}
dataUrl - {String}
headers -  {Array}
itemsPerPage - {Number}, 20 by default
tableWidth - {css value}, 90% by default

Pass options to directive ls-grid 

$scope.options = {
    tableWidth: '40%',
    itemsPerPage: 10,
    dataUrl: 'api/mydata.json',
    headers: {"name": "Name", "start_date": "Start Date", "clicks": "Clicks"}
};
    
<ls-grid options="options"></ls-grid> 

```




# Download
```bash
git clone https://github.com/lev-savranskiy/angular-ls-grid.git

OR

ZIP https://github.com/lev-savranskiy/angular-ls-grid/archive/master.zip
```

