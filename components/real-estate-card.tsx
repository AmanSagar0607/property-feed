import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";

const RealEstateCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#996830] p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl"
      >
        <div className="p-8 bg-[#0A1E40] text-white flex flex-col justify-center md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Find Your Dream Home</h2>
          <p className="mb-6">Explore our listings and book a visit today to find the perfect property for you. Act now and make your dream a reality!</p>
          <Button variant="outline" className="bg-white text-[#0A1E40] font-semibold">Join for free</Button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/mnt/data/image.png"
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RealEstateCard;
