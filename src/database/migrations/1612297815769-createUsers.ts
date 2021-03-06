import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1612297815769 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {await queryRunner.createTable(new Table({
        name : 'usuarios',
        columns :[
            {
                name:'id',
                type:'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name:'name',
                type:'varchar',
            },
            {
                name:'password',
                type:'text',
            },
        ],
    }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
