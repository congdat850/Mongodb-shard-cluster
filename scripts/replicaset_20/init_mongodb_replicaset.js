var cfg = {
    "_id": "rs2",
    "members": [
      {
        "_id": 0,
        "host": "shard20:27017"
      },
      {
        "_id": 1,
        "host": "shard21:27017"
      },
      {
        "_id": 2,
        "host": "shard22:27017"
      }
    ] 
  };
  
  var status = rs.initiate(cfg);
  
  printjson(status);
  