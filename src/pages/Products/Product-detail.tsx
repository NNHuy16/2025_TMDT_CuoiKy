import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RecommendedProducts from "./recommended-products";
import { ProductOptions } from "./ProductOptions";
import { QuantitySelector } from "./QuantitySelector";
import { AddToCartModal } from "./AddToCartModal";
import { ProductReviews } from "./ProductReviews";
import productApi from "@/services/productApi";
import { useState } from "react";
import { Product } from "@/model/Product";

const materials = ["PLA", "ABS", "Resin", "TPU"];
const sizes = ["Nhỏ", "Trung bình", "Lớn"];
const colors = ["Trắng", "Đen", "Xanh dương", "Xám"];
const printLocations = ["Mặt trước", "Mặt sau", "Góc cạnh", "Toàn bộ"];

export const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  // Lấy data sản phẩm bằng React Query
  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["productDetail", productId],
    queryFn: () => productApi.getProductById(productId as string),
    enabled: !!productId,
  });

  // Các state UI liên quan tới lựa chọn (mặc định)
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedPrintLocation, setSelectedPrintLocation] = useState(printLocations[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hàm tăng giảm số lượng
  const handleQuantityChange = (newQuantity: number) => {
    if (!product) return;
    if (newQuantity >= 1 && newQuantity <= product.stock) setQuantity(newQuantity);
    else if (newQuantity < 1) setQuantity(1);
    else if (newQuantity > product.stock) setQuantity(product.stock);
  };

  // Xử lý thêm vào giỏ
  const handleAddToCart = () => {
    if (!product || quantity <= 0 || quantity > product.stock) {
      alert("Số lượng không hợp lệ hoặc sản phẩm đã hết hàng.");
      return;
    }
    // ... như cũ
    setIsModalOpen(true);
  };

  // Xử lý mua ngay
  const handleBuyNow = () => {
    if (!product || quantity <= 0 || quantity > product.stock) {
      alert("Số lượng không hợp lệ hoặc sản phẩm đã hết hàng.");
      return;
    }
    navigate("/checkout");
  };

  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <p className="text-lg text-gray-700">Đang tải sản phẩm...</p>
        </div>
    );
  }

  if (error || !product) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
          <p className="text-lg text-red-600 mb-4">Không tìm thấy sản phẩm.</p>
          <Link to="/">
            <Button variant="outline">
              <FaArrowLeft className="mr-2" /> Quay lại trang chủ
            </Button>
          </Link>
        </div>
    );
  }

  const isOutOfStock = product.stock <= 0;

  return (
      <div className="w-full bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12">
          <AddToCartModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              product={product}
              quantity={quantity}
              selectedColor={selectedColor}
              selectedPrintLocation={selectedPrintLocation}
              selectedMaterial={selectedMaterial}
              selectedSize={selectedSize}
          />

          <Link to="/product" className="mb-6 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <Button variant="ghost" className="px-0">
              <FaArrowLeft className="mr-2" /> Quay lại danh sách sản phẩm
            </Button>
          </Link>

          <Card className="flex flex-col lg:flex-row overflow-hidden shadow-lg rounded-lg bg-white">
            <div className="lg:w-1/2 p-4 flex items-center justify-center bg-gray-100">
              <img
                  src={product.img || "/placeholder.svg?height=600&width=600"}
                  alt={product.productName}
                  className="max-w-full h-auto object-contain rounded-lg"
              />
            </div>

            <CardContent className="lg:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{product.productName}</CardTitle>
                <CardDescription className="text-lg text-gray-700 mb-4">
                  <Badge variant="secondary" className="text-base px-3 py-1 bg-gray-200 text-gray-700">
                    {product.category?.name || "Không rõ danh mục"}
                  </Badge>
                </CardDescription>
                <p className="text-gray-900 font-extrabold text-4xl mb-6">{product.price.toLocaleString("vi-VN")}đ</p>
                <div className="mb-6 text-gray-800 leading-relaxed">
                  <h3 className="text-xl font-semibold mb-2">Mô tả sản phẩm:</h3>
                  <p>{product.description}</p>
                </div>
                <ProductOptions
                    colors={colors}
                    printLocations={printLocations}
                    materials={materials}
                    sizes={sizes}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                    selectedPrintLocation={selectedPrintLocation}
                    setSelectedPrintLocation={setSelectedPrintLocation}
                    selectedMaterial={selectedMaterial}
                    setSelectedMaterial={setSelectedMaterial}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                />
                <QuantitySelector
                    quantity={quantity}
                    handleQuantityChange={handleQuantityChange}
                    stock={product.stock}
                    isOutOfStock={isOutOfStock}
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button
                    onClick={handleAddToCart}
                    className="w-full sm:w-auto bg-gray-800 text-white hover:bg-gray-700 h-12 px-6 text-lg font-semibold"
                    disabled={isOutOfStock}
                >
                  <FaShoppingCart className="inline mr-3 text-xl" /> Thêm vào giỏ
                </Button>
                <Button
                    onClick={handleBuyNow}
                    className="w-full sm:w-auto bg-black text-white hover:bg-gray-900 h-12 px-6 text-lg font-semibold"
                    disabled={isOutOfStock}
                >
                  Mua ngay
                </Button>
              </div>
            </CardContent>
          </Card>

          <RecommendedProducts />
          <ProductReviews />
        </div>
      </div>
  );
};

export default ProductDetail;
