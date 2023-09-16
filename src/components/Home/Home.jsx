import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import "./Home.css"


const Home = () => {
    const [services, setServices] = useState([])
    const [selectedService, setSelectedService] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalCreditHour, setTotalCreaditHour] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services);

    const handleSelecetd = (service) => {
        const isExist = selectedService.find((item) => item.id == service.id)
        console.log(service);
        let priceCount = service.Price;
        let creditCount = service.Credit
        
        if (isExist) {
            return alert("Already selected")
        } else {
            selectedService.forEach(item =>{
                priceCount = priceCount +item.Price
                creditCount = creditCount + item.Credit
                
            })
            console.log(priceCount);
            console.log(creditCount);
            if(creditCount >20){
                return alert("Remaining hours expaired ")
            }
            setTotalCreaditHour(creditCount);

            const remainingHours = 20 - creditCount
            if(creditCount > 20){
                return alert("Remaining hours is expaired")
            }
            setTotalPrice(priceCount)
            // setTotalCreaditHour(creditCount)
            setRemaining(remainingHours);
            setSelectedService([...selectedService, service]);

        }





    }
    console.log(selectedService);

    return (
        <div className="container">
            <div className="home-container">
                <div className="card-container">
                    {services.map(service => (
                        <div key={service.id} className="card">
                            <img src={service.image} alt="" />
                            <h3>{service.name}</h3>
                            <p><small>{service.discripton}</small></p>
                            <div className='price-credit'>
                                <p>$ Price:{service.Price}</p>
                                <p>Credit: {service.Credit}</p>
                            </div>
                            <button onClick={() => handleSelecetd(service)} className='btn'>Select</button>

                        </div>
                    ))}
                </div>
                <div className="cart">
                    <Cart selectedService={selectedService} remaining={remaining} totalCreditHour={totalCreditHour} totalPrice={totalPrice}></Cart>
                </div>
            </div>
        </div>
    )
}

export default Home