import './CardItem.css';

function CardItem({
    companyName,
    role,
    description,
    durationDate,
}) {
    return (
        <>
            <div className="card-container">

                <div className="column">

                    <div className="name">
                        {companyName}
                    </div>




                    <div className="card-date">
                        {durationDate}
                    </div>

                </div>

                <div className="content">
                <div className="card-role">
                    {role}
                </div>

                <div className="card-body" >
                    {description}
                </div>
                </div>
                
            </div>

        </>
    )
};

export default CardItem;