CREATE DATABASE IF NOT EXISTS mvp;

use mvp;

CREATE TABLE IF NOT EXISTS comments (
  id int(10) NOT NULL AUTO_INCREMENT,
  username varchar(100) NOT NULL,
  gallery varchar(100) NOT NULL,
  comment text NOT NULL,
  PRIMARY KEY(ID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


