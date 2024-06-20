/*
  Warnings:

  - You are about to alter the column `budget` on the `project` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `project` MODIFY `budget` VARCHAR(191) NULL;
