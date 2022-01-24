var addShard0 = sh.addShard("rs0/shard00:27017,shard01:27017,shard02:27017");
var addShard1 = sh.addShard("rs1/shard10:27017,shard11:27017,shard12:27017");
var addShard2 = sh.addShard("rs2/shard20:27017,shard21:27017,shard22:27017");

printjson(addShard0);
printjson(addShard1);
printjson(addShard2);
