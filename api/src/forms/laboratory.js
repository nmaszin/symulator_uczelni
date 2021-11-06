import { createForm } from '@/forms'
import Faculty from '@/models/faculty'

export default createForm({
    constraints: {
        name: {
            presence: true,
            length: { minimum: 1, maximum: 100 }
        },
        facultyId: {
            chain: [
                { presence: true },
                { validIdentifier: true },
                { foreignKey: Faculty }
            ]
        }
    },
})
