


function SubscriptionCard({title, price, period, forWho, get1, get2, get3, get4})
{
    return (
        
        <div className="price ">
            <div className="banner"></div>
            <h2>{title}</h2>
            <h1>${price}</h1>
            <h3>{period}</h3>
            <hr />

            <div className="indivisuals">
                <h3>{forWho}</h3>
                <ul>
                    <li>{get1}</li>
                    <li>{get2}</li>
                    <li>{get3}</li>
                    <li className="last">{get4}</li>
                </ul>
            </div>

            <hr />
            <button>BUY NOW</button>
        </div>
       
    );
}

export default SubscriptionCard;