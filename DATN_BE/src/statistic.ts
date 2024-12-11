import mongoose from 'mongoose';

// Định nghĩa Schema cho Statistic
const statisticSchema = new mongoose.Schema({
  namePro: { type: String, required: true }, // Tên sản phẩm
  import_price: { type: Number, required: true }, // Giá nhập
  price: { type: Number, required: true }, // Giá bán
  creatDatePro: { type: Date, required: true }, // Ngày mua hàng
  quantity: { type: Number, required: true }, // Số lượng
  profit: { type: Number, required: true }, // Lợi nhuận
}, { timestamps: true }); // Tự động thêm trường createdAt, updatedAt

// Tạo model từ schema
const Statistic = mongoose.model('Statistic', statisticSchema);

export default Statistic;
