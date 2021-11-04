import { createModel } from '@/models'
import Student from '@/models/student'
import Faculty from '@/models/faculty'

export default createModel({    
    async initialize() {
        await Promise.all([Student, Faculty].map(x => x.initialize()))
            .catch(() => {})
    },

    async deinitialize() {
        await Promise.all([Student, Faculty].map(x => x.deinitialize()))
            .catch(() => {})
    }
})
