import {Context} from  './BaseContext';
import axios from 'axios';

const ACCOUNT_SERVICE_URL = '/api/accountservice?studentAccountId=Std1';
const CARDS_SERVICE_URL = '/api/PaymentMethod?studentAcctId=Std1&collegeAcctId=Col1';

class BaseProvider extends React.Component
{

    state = {
        services: [],
        cards :{}
    }
    componentDidMount() {
        this.fetchServicesAsync();
    }

    async fetchServicesAsync() {
        try {
            const [accountservices, cardsdata] = await Promise.all([
                axios.get(ACCOUNT_SERVICE_URL),
                axios.get(CARDS_SERVICE_URL)
              ]);
            this.setState({ ...this.setState });
            this.setState({ services: accountservices.data , cards : cardsdata.data });
        }
        catch (e) {
            console.log(e);
            this.setState({ ...this.setState });
        }
    }


    render(){
        return(
            <Context.Provider value={{
                services: this.state.services , 
                cards : this.state.cards
                }}
                >
                 {this.props.children}
            </Context.Provider>
        );
    }
}
export default BaseProvider;