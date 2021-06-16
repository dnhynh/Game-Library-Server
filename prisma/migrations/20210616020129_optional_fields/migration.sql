-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publisher" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "rating" TEXT,

    PRIMARY KEY ("publisher", "name")
);
INSERT INTO "new_Game" ("createdAt", "name", "nickname", "publisher", "rating") SELECT "createdAt", "name", "nickname", "publisher", "rating" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
