Title: How to backup Docker volumes for Kiwi TCMS
date: 2018-07-30 00:25
comments: true
og_image: images/backup.png
twitter_image: images/backup.png
author: Alexander Todorov


When you start Kiwi TCMS by running `docker-compose up`
(see [here](http://kiwitcms.readthedocs.io/en/latest/installing_docker.html#start-docker-compose))
it will automatically create 2 volumes: `kiwi_db_data` and `kiwi_uploads`.
This blog post will outline how to backup these docker volumes.

Backing up the database
-----------------------

Kiwi TCMS is a Django application and the `manage.py` command provides an easy way
to dump and load the database contents. To export all contents on your docker host
execute:

    docker exec -it kiwi_web /Kiwi/manage.py dumpdata --all --indent 2 > database.json

This will create a file named `database.json` in the current directory, outside of the
running container!

You can restore the database contents by using the following commands:

    # delete data from all tables
    docker exec -it kiwi_web /bin/bash -c '/Kiwi/manage.py sqlflush | /Kiwi/manage.py dbshell'
    # then reload the existing data
    cat database.json | docker exec -i kiwi_web /Kiwi/manage.py loaddata --format json -

**NOTE:** depending on your scenario you may want to remove the existing volume
(`docker-compose down && docker volume rm kiwi_db_data`) and re-create the
DB schema (`/Kiwi/manage.py migrate`) before restoring the contents!


**WARNING**: the above steps are applicable to Kiwi TCMS 5.1 or above. On earlier
versions `manage.py` will fail due to various issues.


Backing up multi-tenant database
--------------------------------

The [kiwitcms-tenant](https://github.com/kiwitcms/tenants) add-on depends on the
PostgreSQL database. It will create multiple DB schemas, one per tenant. To backup
all tenants use the following command:

    docker exec -i kiwi_db /bin/bash -c 'pg_dump --dbname=kiwi -F c' > backup.bak

This will create a file in the PostgreSQL custom database dump format which
contains all data and schema definitions. That is a binary file which can be read
with the `pg_restore` command.

To [drop and] restore the entire multi-tenant database:

    docker volume rm kiwi_db_data
    cat backup.bak | docker exec -i kiwi_db /bin/bash -c 'pg_restore --dbname=kiwi -v'


To [drop and] restore an individual tenant:

    docker exec -it kiwi_web /Kiwi/manage.py dbshell
    
    kiwi=> DROP SCHEMA $tenant_name CASCADE;
    ....
    DROP SCHEMA
    kiwi=> CREATE SCHEMA $tenant_name;
    CREATE SCHEMA
    kiwi=>Ctrl+D
    
    cat backup.bak | docker exec -i kiwi_db /bin/bash -c 'pg_restore --dbname=kiwi -v --schema $tenant_name'


**WARNING:** `sqlflush | dbshell` will not work when you have multiple DB schemas so you must use
the PostgreSQL database shell to manipulate the contents of the database!


Backing up file uploads
-----------------------

Uploaded files can easily be backed up with:

    docker exec -it kiwi_web /bin/tar -cP /Kiwi/uploads > uploads.tar

and then restored:

    cat uploads.tar | docker exec -i kiwi_web /bin/tar -x

You may also try the `rsync` command but be aware that it is not installed
by default!

The same approach may be used to backup `/var/lib/mysql/` from the `kiwi_db`
container.

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
