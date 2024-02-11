import mongoose from 'mongoose';

const TechniqueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categoryName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    dailyRent: { type: Number, required: true },
    monthlyRent: { type: Number, required: true },
    productionYear: { type: String, required: true }
});

export default mongoose.models.Technique || await mongoose.model('Technique', TechniqueSchema);
