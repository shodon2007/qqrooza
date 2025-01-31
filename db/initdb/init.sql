DO
$$
BEGIN
   IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'qqrooza') THEN
      CREATE DATABASE qqrooza;
   END IF;
END
$$;

DO
$$
BEGIN
   IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'root') THEN
      CREATE USER root WITH PASSWORD 'root';
   END IF;
END
$$;

GRANT ALL PRIVILEGES ON DATABASE qqrooza TO root;
