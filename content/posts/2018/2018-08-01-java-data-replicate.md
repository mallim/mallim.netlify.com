---
title: "What are the options for data sync?"
date: 2018-08-01 21:32:00
tags:
  - java
  - data-replication
  - data-synchronize
---

Possible options:

- Write your own self open source ETL tools - [Pentaho Data Integration](https://community.hitachivantara.com/docs/DOC-1009855)
  and [Open Studio for Data Integration](https://www.talend.com/products/data-integration/data-integration-open-studio/)
- This is newly discovered which works on self-generated database triggers - an open source database replication solution -
  [SymmetricDS](https://www.symmetricds.org/)
- Based on Oracle, you will have Data Pump, Golden Gate, Materialized Views, [Database Change Notification](https://docs.oracle.com/cd/B19306_01/B14251_01/adfns_dcn.htm)

But take note of **Best Practises** section in [Database Change Notification](https://docs.oracle.com/cd/B19306_01/B14251_01/adfns_dcn.htm):

```
If there are frequent and a large number of notifications, it can slow down OLTP throughput due to the overhead of generating the notifications.
```
