CREATE TABLE "user"(
  "id" INTEGER,
  "username" TEXT NOT NULL,
  "email" TEXT UNIQUE NOT NULL,
  "password" TEXT NOT NULL,
  PRIMARY KEY("id")
);

