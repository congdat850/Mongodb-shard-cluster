# sharding-by-docker-compose

1. docker-compose up
2. docker exec -it docker exec -it shardingbydockercompose_shard00_1 bash
3. mongo scripts/replicaset_0/init_mongodb_replicaset.js

4. docker exec -it shardingbydockercompose_router0_1 bash
5. sh.status()
