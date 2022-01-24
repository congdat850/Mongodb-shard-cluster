var cfg = {
    "_id": "rs1",
    "members": [
      {
        "_id": 0,
        "host": "shard10:27017"
      },
      {
        "_id": 1,
        "host": "shard11:27017"
      },
      {
        "_id": 2,
        "host": "shard12:27017"
      }
    ] 
  };
  
  var status = rs.initiate(cfg);
  
  printjson(status);
  