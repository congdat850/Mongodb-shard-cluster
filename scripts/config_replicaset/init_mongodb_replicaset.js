var cfg = {
    "_id": "configRs",
    "configsvr": true,
    "members": [
      {
        "_id": 0,
        "host": "configsvr0:27017"
      },
      {
        "_id": 1,
        "host": "configsvr1:27017"
      },
      {
        "_id": 2,
        "host": "configsvr2:27017"
      }
    ] 
  };
  
  var status = rs.initiate(cfg);
  
  printjson(status);