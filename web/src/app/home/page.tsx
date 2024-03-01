import { ImageBox } from "@/components/image-box"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
      <div className="text-center mb-auto">
        <h1 style="color : green ;"> FarmEasy</h1>
          <span className="gradient-text">{siteConfig.name}</span> - Plant
          Disease Detection
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Saving <span className="gradient-text"> Farmers</span> with
          Science
        </h2>
      </div>
      <div className="mb-auto">
        <ImageBox />
      </div>
    </main>
  )
}
