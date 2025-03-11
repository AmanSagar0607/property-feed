import { HeroVideoDialog } from "@/components/ui/HeroVideoDialog";

export function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <div className="relative lg:px-16 sm:px-8 px-4 xl:px-10 mt-24 ">
      {/* Light Mode Video */}
      <HeroVideoDialog
        className="block dark:hidden w-full"
        animationStyle="top-in-bottom-out"
        videoSrc="https://videos.pexels.com/video-files/18531414/18531414-uhd_2560_1440_60fps.mp4"
        thumbnailSrc="https://res.cloudinary.com/dl7zgwx4o/image/upload/fl_preserve_transparency/v1741334731/Mansio/hero-image_wj9i70.jpg?_s=public-apps"
        thumbnailAlt="Hero Video"
      />

      {/* Dark Mode Video */}
      <HeroVideoDialog
        className="hidden dark:block w-full"
        animationStyle="top-in-bottom-out"
        videoSrc="https://videos.pexels.com/video-files/18531414/18531414-uhd_2560_1440_60fps.mp4"
        thumbnailSrc="https://res.cloudinary.com/dl7zgwx4o/image/upload/fl_preserve_transparency/v1741334731/Mansio/hero-image_wj9i70.jpg?_s=public-apps"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
