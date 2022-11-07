-- SCHEMA: miliki

-- DROP SCHEMA IF EXISTS miliki ;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE SCHEMA IF NOT EXISTS miliki
    AUTHORIZATION postgres;
	
CREATE TABLE miliki.user (
  userId uuid DEFAULT uuid_generate_v4(),
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  contact INT NOT NULL,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP,
  active BOOLEAN,
  PRIMARY KEY (userId)
);
CREATE TABLE miliki.transactionType (
  transactionTypeId uuid DEFAULT uuid_generate_v4(),
  description VARCHAR(50) NOT NULL,
  createdAt TIMESTAMP,
  PRIMARY KEY (transactionTypeId)
);
CREATE TABLE miliki.investment (
  investmentId uuid DEFAULT uuid_generate_v4(),
  investmentTitle VARCHAR(50) NOT NULL,
  description VARCHAR(1225) NOT NULL,
  image BYTEA,
  investmentAmount DECIMAL NOT NULL,
  investmentRate DECIMAL NOT NULL,
  duration INT NOT NULL,
  status BOOLEAN,
  createdAt TIMESTAMP,
  PRIMARY KEY (investmentId)
);
CREATE TABLE miliki.moneyTransaction (
  transactionId uuid DEFAULT uuid_generate_v4(),
  transactedAmount DECIMAL NOT NULL,
  createdAt TIMESTAMP,
  createdBy uuid,
  transactionTypeId uuid,
  PRIMARY KEY (transactionId),
	FOREIGN KEY (createdBy)
     REFERENCES miliki.user (userId),
	FOREIGN KEY (transactionTypeId)
     REFERENCES miliki.transactionType (transactionTypeId)
);
CREATE TABLE miliki.wallet (
  walletId uuid DEFAULT uuid_generate_v4(),
  investmentTitle VARCHAR(50),
  investedAmount DECIMAL,
  maturityDate DATE,
  balance DECIMAL,
  userId uuid,
  transactionId uuid,
  investmentId uuid,
  PRIMARY KEY (walletId),
	FOREIGN KEY (userId)
     REFERENCES miliki.user (userId),
	FOREIGN KEY (transactionId)
     REFERENCES miliki.moneyTransaction (transactionId),
	FOREIGN KEY (investmentId)
     REFERENCES miliki.investment (investmentId)
);
CREATE TABLE miliki.notification (
  notificationId uuid DEFAULT uuid_generate_v4(),
  description uuid,
  createdAt TIMESTAMP,
  createdFor uuid,
  PRIMARY KEY (notificationId),
	FOREIGN KEY (createdFor)
     REFERENCES miliki.user (userId),
	FOREIGN KEY (description)
     REFERENCES miliki.moneyTransaction (transactionId)
);