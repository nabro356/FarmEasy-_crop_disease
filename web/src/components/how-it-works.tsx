import Image from "next/image"
import ClickPhoto from "@/assets/click-photo.jpg"
import Processing from "@/assets/processing.jpg"
import Greenry from "@/assets/happy-greens.jpg"
import Header from "@/components/header"
import { siteConfig } from "@/config/site"

export default function HowItWorks() {
  return (
    <section className="container pt-24 px-8">
      <div>
        <Header heading={`How ${siteConfig.name} Works?`} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full mt-16">
        <div>
          <div className="h-72 relative">
            <Image
              src={ClickPhoto}
              alt="A person clicking photo of plant"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="py-4 text-center">
            <p>
              Start by capturing a clear image of a plant leaf that might be
              showing signs of disease. Ensure that the image is sharp and
              well-lit. Easily upload the image to the FarmEasy platform using
              our user-friendly interface.
            </p>
          </div>
        </div>
        <div>
          <div className="h-72 relative">
            <Image
              src={Processing}
              alt="Computer Processing the instruction"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="py-4 text-center">
            <p>
            </p>
          </div>
        </div>
        <div>
          <div className="h-72 relative">
            <Image
              src={Greenry}
              alt="Happy and Green Plants"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="py-4 text-center">
            <p>
              Thank You !!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
