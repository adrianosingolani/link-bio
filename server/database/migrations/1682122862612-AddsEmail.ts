import { MigrationInterface, QueryRunner } from "typeorm";

export class AddsEmail1682122862612 implements MigrationInterface {
    name = 'AddsEmail1682122862612'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
