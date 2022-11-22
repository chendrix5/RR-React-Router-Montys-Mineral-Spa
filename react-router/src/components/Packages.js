

export default function Packages(props) {
    const displayPackages = props.Packages.map((eachPackage) => {
      return (
       <li>{eachPackage}</li> 
       )
    })

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <div>
                    <ul>
                        {displayPackages}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}