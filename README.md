# sharding-by-docker-compose

1. docker-compose up
2.
- docker exec -it docker exec -it shardingbydockercompose_shard00_1 bash
- mongo scripts/replicaset_0/init_mongodb_replicaset.js

- docker exec -it docker exec -it shardingbydockercompose_shard10_1 bash
- mongo scripts/replicaset_10/init_mongodb_replicaset.js

- docker exec -it docker exec -it shardingbydockercompose_shard20_1 bash
- mongo scripts/replicaset_20/init_mongodb_replicaset.js

3. docker exec -it shardingbydockercompose_router0_1 bash
5. sh.status()
