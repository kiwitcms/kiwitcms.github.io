Title: How to backup Docker volumes for Kiwi TCMS
date: 2018-07-30 00:25
comments: true
og_image: images/backup.png
twitter_image: images/backup.png
author: Alexander Todorov
tags: customization


When you start Kiwi TCMS by running `docker-compose up`
(see [here](http://kiwitcms.readthedocs.io/en/latest/installing_docker.html#start-docker-compose))
it will automatically create 2 volumes: `kiwi_db_data` and `kiwi_uploads`.
This blog post will outline how to backup these docker volumes.

**Note:** in the instructions below `kiwi_db` is the container name and `kiwi` is the
database name used inside the `docker-compose.yml` file!


MariaDB/MySQL database
----------------------

To export all contents from the docker container execute the command:

    docker exec -u 0 -i kiwi_db mysqldump kiwi > backup.sql

This will create a file named `backup.sql` in the current directory, outside of the running container!

You can restore the database contents by using the following command:

    cat backup.sql | docker exec -u 0 -i kiwi_db mysql -v kiwi

**Notes:**

1. The commands above using `-u 0` are executed with `root` privileges inside the
   container. In this way you don't need to type-in the database password!
2. Depending on your scenario you may want to remove the existing volume
   (`docker-compose down && docker volume rm kiwi_db_data`) before restoring the database!


Postgres database
-----------------

To export all contents from the docker container execute the command:

    docker exec -i kiwi_db pg_dump --dbname=kiwi -F c > backup.bak

This will create a file named `backup.bak` in the current directory, outside of the running container.
This is a PostgreSQL custom database dump format which contains all data and schema definitions.
That is a binary file which can be read with the `pg_restore` command!

To drop and restore the entire database execute:

    docker exec -i kiwi_db psql -c "DROP DATABASE IF EXISTS kiwi;"
    cat backup.bak | docker exec -i kiwi_db pg_restore --dbname=template1 -vcC


Multi-tenant database
---------------------

The [kiwitcms-tenant](https://github.com/kiwitcms/tenants) add-on and/or
[Kiwi TCMS Enterprise](https://github.com/kiwitcms/enterprise) work only on
Postgres! Each tenant (aka name-space) uses a separate database schema.
The first schema name is `public`.

The backup and restore instructions shown above operate on all tenants together!
If you want to [drop and] restore an individual tenant then use the commands:

    docker exec -it kiwi_db psql --dbname=kiwi
    
    kiwi=> DROP SCHEMA $tenant_name CASCADE;
    ....
    DROP SCHEMA
    kiwi=> CREATE SCHEMA $tenant_name;
    CREATE SCHEMA
    kiwi=>Ctrl+D
    
    cat backup.bak | docker exec -i kiwi_db pg_restore --dbname=kiwi -v --schema $tenant_name


Backing up file uploads
-----------------------

Uploaded files can easily be backed up with:

    docker exec -i kiwi_web /bin/tar -cP /Kiwi/uploads > uploads.tar

and then restored with:

    cat uploads.tar | docker exec -i kiwi_web /bin/tar -x

You may also try the `rsync` command but be aware that it is not installed
by default!

**Note:**
the same approach may be used to backup `/var/lib/mysql/` or `/var/lib/pgsql/data`
from the `kiwi_db` container.


Backing up multi-tenant uploads
-------------------------------

By default multi-tenant file uploads are stored under `/Kiwi/uploads/tenant/$tenant_name`.
You can archive all contents with the same procedure above. If you wish to restore
files per tenant you will have to upload the `$tenant_name` directory into the
docker volume.


Alternatives
------------

By default both docker volumes created for Kiwi TCMS use the `local` driver
and are available under `/var/lib/docker/volumes/<volume_name>` on the host
running your containers. You can try backing them up from there as well.

Another alternative is to use the
[docker-lvm-plugin](https://www.projectatomic.io/blog/2016/05/docker-lvm-plugin/)
and create these volumes as LVM2 block devices. Then use
`lvcreate -s` command to create a snapshot volume. For more information see
[chapter 2.3.5. Snapshot Volumes](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/logical_volume_manager_administration/index#snapshot_volumes)
from the LVM Administrator Guide for Red Hat Enterprise Linux 7.


Happy testing!
