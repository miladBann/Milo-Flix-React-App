import SimpleNav from "../components/SimpleNav.jsx";
import SubscriptionCard from "../components/SunscriptionCard.jsx";

function Subscription()
{
    return (
        <div className="sub_cont">
            <SimpleNav />

            <div className="row2">
                <div className="prices">
                    <SubscriptionCard title="Personal" price="4.99" period="Weekly" forWho="For Individuals" get1="16 Movies" get2="16 Seiers" get3="4 Languages" get4="Limited Download"/>
                    <SubscriptionCard title="Family" price="9.99" period="Monthly" forWho="For Families" get1="32 Movies" get2="32 Seiers" get3="8 Languages" get4="Fast Download"/>
                    <SubscriptionCard title="Big Fun" price="18.99" period="Monthly" forWho="MiloFlix and Chill" get1="Unlimited Movies" get2="Unlimited Seiers" get3="12 Languages" get4="Unlimited Download"/>
                </div>
            </div>

        </div>
    );
}


export default Subscription;