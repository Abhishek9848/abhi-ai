import "./brand.css"
import { atlassian,dropbox,google,shopify,slack } from "./imports"

const Brand = () => {
  return (
    <div className="brand section__padding">
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={google} alt="google" />
      <img src={shopify} alt="shopify" />
      <img src={slack} alt="slack" />
    </div>
  )
}

export default Brand
