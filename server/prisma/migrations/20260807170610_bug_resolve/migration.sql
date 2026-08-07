/*
  Warnings:

  - You are about to drop the column `cotent` on the `source_chunk` table. All the data in the column will be lost.
  - Added the required column `content` to the `source_chunk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "source_chunk" DROP COLUMN "cotent",
ADD COLUMN     "content" TEXT NOT NULL;
