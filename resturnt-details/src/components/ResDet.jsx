import { useState ,useEffect} from "react";
import data from '../Data.json'
import { nanoid } from "nanoid";
import ResCard from "./ResCard";
import "./ResDet.css";
import SortNav from "./Nav";
import InputForm from "./AddHotel";

const RestaurantDetails = () => {
  const [Game, setData] = useState(data);
  const [val, setVal] = useState(false);
  const [forTwo, setForTwo] = useState(false);
  const [count, setCount] = useState(1);

  const getFormData = (form) => {
    setData([...Game, form]);

  }

  const getData = (curData) => {
    setData([...curData]);
    Pagination([...curData], count)
  };

  const l2h = () => {
    let newData = Game.sort(
      (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
    );
    setData([...newData]);
    Pagination(newData, count)
  };

  const h2l = () => {
    let newData = Game.sort(
      (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
    );
    setData([...newData]);
    Pagination(newData, count)
  };

  const Cash = (data) => {
    let cashData = data
      .filter((el) => el.payment_methods.cash===true)
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    getData(cashData);
    Pagination(cashData, count)
  }
  const Card = (data) => {
    let cardData = data
      .filter((el) => el.payment_methods.card===true)
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    getData(cardData);
    Pagination(cardData, count)
  }
  const All = (data) => {
    let allData = data
      .filter((el) => el.payment_methods.cash===true && el.payment_methods.card===true && el.payment_methods.upi === true)
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    getData(allData);
    Pagination(allData, count)
  }

    useEffect(() => { 
      Pagination(data, count)
    }, [count])
    
    const Pagination = (data,count) => { 
      let pagData =data.filter((el, index )=>{
        if (count === 1 && index <5) {
          return el
        }
        if (count === 2 && index < 10 && index >4) {
          return el
        }
        if (count === 3 && index < 15 && index>9) {
          return el
        }
        if (count === 4 && index < 20 && index>14) {
          return el
        }
      
      })
      setData([...pagData])
      //console.log(pagData)
    }
 
  
 // Pagination(data,count)
  return (!val) ? (
    <>
      <div className="searchNum"><h1>{Game.length} Restaurants Details</h1></div>
      <SortNav getData={getData} data={data} />
      <div>
        <div className="sort">
          <button onClick={l2h}>Low to High</button>
          <button onClick={h2l}>High to Low</button>
          <button onClick={() => setVal(true)}>Add Your Own RestaurantDetails</button>
        </div>
      </div>
      <div>
        <div className="sort">
          <button onClick={() => { setForTwo(true);l2h(); }}>Low to High For Two</button>
          <button onClick={() => { setForTwo(true);h2l(); }}>High to Low For Two</button>
        </div>
      </div>
      <div>
        <div className="sort">
          <button onClick={()=>Cash(data)}>Cash</button>
          <button onClick={()=>Card(data)}>Card</button>
          <button onClick={()=>All(data)}>All</button>
        </div>
      </div>
      <div className="card-container">
        {Game.map((el) => (
          <ResCard
            key={nanoid()}
            name={el.name}
            cat={el.cat}
            cost={el.cost}
            rating={el.rating}
            image={el.image}
            min={el.min}
            reviews={el.reviews}
            time={el.time}
            votes={el.votes}
            forTwo={forTwo}
            cost_for_two={el.cost_for_two}
          />
        ))}
      </div>
      <div className="sort">
        <button onClick={() => {
          if (count > 1) {
            setCount(count - 1);
            Pagination(data,count)
          }
        }}>Previous</button>
        <button onClick={() => { setCount(count + 1); Pagination(data,count)}}>Next</button>
        </div>
    </>
  ) : (<InputForm getFormData={getFormData} setVal={setVal } />)
};

export default RestaurantDetails;
