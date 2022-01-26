# sharding-by-docker-compose

1. build many service mongodb:
- docker-compose up

2. Setup Shards:
- docker exec -it docker exec -it shardingbydockercompose_shard00_1 bash
- mongo scripts/replicaset_0/init_mongodb_replicaset.js

- docker exec -it docker exec -it shardingbydockercompose_shard10_1 bash
- mongo scripts/replicaset_10/init_mongodb_replicaset.js

- docker exec -it docker exec -it shardingbydockercompose_shard20_1 bash
- mongo scripts/replicaset_20/init_mongodb_replicaset.js

=> Check shard for container:
- docker exec -it docker exec -it shardingbydockercompose_shardx0_1 bash
- mongo rs.status()

3. Setup Config Server:
- docker exec -it docker exec -it shardingbydockercompose_configsvr0_1 bash
- mongo scripts/config_replicaset/init_mongodb_replicaset.js

=> Check config for container:
- docker exec -it docker exec -it shardingbydockercompose_configsvr0_1 bash
- mongo rs.status()

4. Setup Query Router:
- docker exec -it docker exec -it  shardingbydockercompose_router0_1 bash
- mongo scripts/sharding_replicaset/init_mongodb_sharding_replicaset.js

=> Check shard status: 
- docker exec -it docker exec -it  shardingbydockercompose_router0_1 bash
- mongo sh.status()

5. After 6, 7, 8, 9:
- docker exec -it docker exec -it  shardingbydockercompose_router0_1 bash
- mongo

6. Enable Sharding at Database Level:
- mongos> use example
- mongos> sh.enableSharding("example")

7. Enable Sharding at Collection Level:
- mongos> use example
- mongos> db.exCollection.ensureIndex({ _id : "hashed" })
- mongos> sh.shardCollection("example.exCollection", {"_id" : "hashed"})

8. Check sharding status:
- mongos> sh.status()

9. Insert data and check process partition:
- mongos> use example
- mongos> for (var i = 1; i <= 10000; i++) db.exCollection.insert( { x : i } )

- mongos> use example
- mongos> db.exCollection.getShardDistribution()

src:
- https://vnsys.wordpress.com/2021/05/24/deploy-mongodb-sharded-cluster/
- https://viblo.asia/p/cai-dat-mongo-cluster-voi-docker-m68Z0NN25kG
