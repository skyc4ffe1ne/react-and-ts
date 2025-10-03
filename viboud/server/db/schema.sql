CREATE TABLE "user"(
  "id" INTEGER,
  "username" TEXT NOT NULL,
  "email" TEXT UNIQUE NOT NULL,
  "password" TEXT NOT NULL,
  PRIMARY KEY("id")
);


CREATE TABLE "room"(
  "id" INTEGER,
  "name" TEXT NOT NULL,
  "user_id" INTEGER,
  PRIMARY KEY("id"),
  FOREIGN KEY("user_id") REFERENCES "user"("id")
);
