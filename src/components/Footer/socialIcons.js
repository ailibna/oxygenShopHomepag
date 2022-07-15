import YoutubeIcon from '../../assets/images/Path 1998.svg'
import FacebookIcon from '../../assets/images/Path 1999.svg'
import InstagramIcon from '../../assets/images/Path 2000.svg'
import TwiterIcon from '../../assets/images/Path 2001.svg'
import LineIcon from '../../assets/images/Line 16.svg'

function SocialIcons() {
    return(
            <div className="socialIcons">
                <img src={YoutubeIcon} alt="" />
                <img src={LineIcon} alt="" />
                <img src={FacebookIcon} alt="" />
                <img src={LineIcon} alt="" />
                <img src={InstagramIcon} alt="" />
                <img src={LineIcon} alt="" />
                <img src={TwiterIcon} alt="" />
            </div>
    )
}
export default SocialIcons
