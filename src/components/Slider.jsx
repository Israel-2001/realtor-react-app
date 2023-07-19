import { collection, getDocs, limit, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import HeroSlider, {Slide} from 'hero-slider'
import { useNavigate } from "react-router-dom";
import "swiper/css/bundle"
import Spinner from "../components/Spinner";
import { db } from "../firebase";
export default function Slider() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(()=>{
    async function fetchListings(){
      const listingsRef = collection(db, "listings")
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5))
      const querySnap = await getDocs(q)
      let listings = [];
      querySnap.forEach((doc)=>{
        return listings.push({
          id:doc.id,
          data:doc.data(),
        });
      });
      setListings(listings);
      setLoading(false)
    }
    fetchListings();
  },[]);
  if (loading) {
    return <Spinner />
  }
  if(listings.length === 0){
    return <></>
  }
  return (
    listings && (
      <>
        <HeroSlider
          className="h-[50%]"
          autoplay='true'
          orientation="horizontal"
          initialSlide={1}
          settings={{
            shouldAutoplay: true,
        }}
        >
        {listings.map(({data, id}) => (
          <Slide 
            key={id}
          >
            <div
              onClick={()=>navigate(`/category/${data.type}/${id}`)}
              className=" relative w-full overflow-hidden h-[100%]"
              style={{
                background: `url(${data.imgUrls[0]}) 
                center, 
                no-repeat`
                , backgroundSize: "cover",
              }}
            ></div>
            <p className="absolute text-[#f1faee] left-1 
              top-3 font-medium max-w-[90%] bg-[#457b9d] 
              shadow-lg opacity-90 p-2 rounded-tr-3xl">
              {data.name}
            </p>
            <p className="absolute text-[#f1faee] left-1 
              bottom-1 font-semibold max-w-[90%] bg-[#e63946] 
              shadow-lg opacity-90 p-2 rounded-tr-3xl">
              ${data.discountedPrice ?? data.regularPrice}
              {data.type === "rent" && " / month"}
            </p>
          </Slide>
        ))}
      </HeroSlider>
      </>
    )
  )
}
