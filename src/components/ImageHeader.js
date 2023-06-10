import HeaderImg from "../image/lion.jpg"
export default function ImageHeader(){
    return(
        <div className="image-header">
            <img src={HeaderImg} alt="lion"/>
            <div>
                <h2>Kelvin Kimani</h2>
                <h5>front-end developer</h5>
                <p>Freelancer</p>
            </div>
        </div>
    )
}