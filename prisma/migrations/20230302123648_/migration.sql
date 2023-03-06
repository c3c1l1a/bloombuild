-- CreateTable
CREATE TABLE "Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "route" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Block" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "blockType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_BlockToPage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_BlockToPage_A_fkey" FOREIGN KEY ("A") REFERENCES "Block" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BlockToPage_B_fkey" FOREIGN KEY ("B") REFERENCES "Page" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_BlockToPage_AB_unique" ON "_BlockToPage"("A", "B");

-- CreateIndex
CREATE INDEX "_BlockToPage_B_index" ON "_BlockToPage"("B");
