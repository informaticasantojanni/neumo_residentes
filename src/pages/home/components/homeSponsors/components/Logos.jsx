


const Logos = ({image: image, title: title}) => {

  

    return (
        // <div className="w-full mx-auto mb-40 flex flex-row flex-wrap justify-center">
        //     {logos.map((logo, index) => {
        //         return (
        //             <img className="mx-3 w-[250px] h-[200px]" key={index} src={logo.image}></img>
        //         )
        //     })}
        // </div>
        <div className="h-full w-[300px] flex justify-center overflow-hidden m-2 flex-shrink-0 cursor-pointer">
            <div className="w-full h-full  rounded-3xl mb-4 flex justify-center">
                {/* <img src={image} alt={`Sponsor ${title}`} className="w-[150px] h-[150px] grayscale" /> */}
                <img src={image} alt={`Sponsor ${title}`} className="h-[150px]" />
            </div>
        </div>
    )
}

export default Logos

{/* <div className="h-full w-[300px] flex justify-center overflow-hidden m-2 flex-shrink-0 cursor-pointer">
<div className="w-full h-full rounded-3xl mb-4 flex justify-center border-solid border-2 border-Blue">
  <img src={image} alt={`Sponsor ${title}`} className="h-full w-full grayscale" />
</div> */}
// </div>
