import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
   techniqueId:String,
   phoneNumber:String,
   email:String,
   fullName:String,
   companyName:String,
   orderAmount:Number,
   isPaid:Boolean

});

export default mongoose.models.Order ||  mongoose.model('Order', OrderSchema);
