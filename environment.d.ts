declare namespace NodeJS {
  export interface ProcessEnv {
    MYSQL_DB_HOST?: string;
    MYSQL_DB_USERNAME?: string;
    MYSQL_DB_PASSWORD?: string;
    MYSQL_DB_PORT?: number;
    MYSQL_DB_DATABASE?: string;
  }
}
