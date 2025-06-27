import './styles/ContentGenMq.css'

export default function ContentGenMq({title, description, buttons=['NA', 'NA'], optionalStyle, miniTitle=undefined}) {
    if(optionalStyle === 'whitestyle') {
        return(
            <section className="textTwo">
            <div className="conText">
                <h6>{miniTitle}</h6>
                <h1>{title}</h1>
                <p>{description}</p>
                {buttons.map((item, index) => {
                    return(
                        <button key={index}>{item}</button>
                    )
                })}
            </div>
            <div className="conTextTwo">
                <img src="" alt="" />
            </div>
        </section>
        )} else {
            return(
                <section className="textOne">
                    <div className="conText">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        {buttons.map((item, index) => {
                            return(
                                <button key={index}>{item}</button>
                            )
                        })}
                    </div>
                    <div className="conTextTwo">
        
                    </div>
                </section>
            )
        }
}

