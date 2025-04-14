import { Table, Column, Model, DataType, Default } from "sequelize-typescript"
import { Col } from "sequelize/types/utils"

@Table({
    tableName: 'products'
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    name: string

    @Column({
        type: DataType.FLOAT(5, 2)
    })
    price: number

    @Column({
        type: DataType.BOOLEAN
    })
    disponibilidad: boolean
}
export default Product