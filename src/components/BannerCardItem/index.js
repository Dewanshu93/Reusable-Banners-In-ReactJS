// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <h1 className="head1">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="btn1">Show More</button>
    </li>
  )
}
export default BannerCard
