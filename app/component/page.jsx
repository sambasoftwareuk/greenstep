
import ImageSliderComponent from '../_components/imageSliderComponent'
import images from '../mocks/images.json'
import sliderData from '../mocks/sliderData.json'

const page = () => {
  return (
    <div>
      <ImageSliderComponent images={images} size={"lg"} sliderData={sliderData} />
    </div>
  )
}

export default page