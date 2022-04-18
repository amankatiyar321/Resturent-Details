import { useState } from "react";
import './AddHotel.css'

const InputForm = ({getFormData,setVal}) => {
  // const [newName, setName] = useState('');
  // const [newCat, setCat] = useState('');
  // const [newCost, setCost] = useState('');
  // const [newTime, setTime] = useState('');
  // const [newImage, setImage] = useState('');
  // const [newMin, setMin] = useState('');
  // const [newVotes, setVotes] = useState('');
  // const [newReviews, setReviews] = useState('');
  // const [newRating, setRating] = useState('');
  
  // const nameHandler = (e) => {setName(e.target.value)};  
  // const catHandler = (e) => {setCat(e.target.value)};  
  // const costHandler = (e) => {setCost(e.target.value)};  
  // const timeHandler = (e) => {setTime(e.target.value)};  
  // const imgHandler = (e) => {setImage(e.target.value)};  
  // const minHandler = (e) => {setMin(e.target.value)};  
  // const votesHandler = (e) => {setVotes(e.target.value)};  
  // const revHandler = (e) => {setReviews(e.target.value)};  
  // const ratHandler = (e) => {setRating(e.target.value)};  

  
  //   const submitForm = (e) => {
  //       e.preventDefault();
  //       let addData = {
  //           name:newName,
  //           cat:newCat,
  //           cost:newCost,
  //           time:newTime,
  //           image:newImage,
  //           min:newMin,
  //           votes:newVotes,
  //           reviews:newReviews,
  //           rating:newRating,
  //       };
  //       getFormData(addData);
  //       setName('');
  //       setCat('');
  //       setCost('');
  //       setTime('');
  //       setImage('');
  //       setMin('');
  //       setVotes('');
  //       setReviews('');
  //       setRating('');
  //       setVal(false)
  // };
  
  
  const [formData,setFormData] = useState({})

  const handleChange = (e) => {
    let inputName = e.target.name

    setFormData({
      ...formData,[inputName]:e.target.value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    getFormData(formData)
    setVal(false)
  }
  
  return (
    
     
    <form onSubmit={submitForm} className="inputForm">
      <div >
     <h4> Fill Your Restaurant Details</h4>
      </div>
     <br />
        <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="name"
          // onChange={nameHandler}
          // value={newName}
          name="name"
          required
        />
        </div>
        <br />
        <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="category"
          // onChange={catHandler}
          // value={newCat}
          name="cat"
          required
        />
        </div>
       <br />
        <div>
        <input
          type="number"
          onChange={handleChange}
          placeholder="cost for one"
          // onChange={costHandler}
          min="0"
          name="cost"
          // value={newCost}
          required
        />
        </div>
        <br />
        <div>

        <input
          type="text"
          onChange={handleChange}
          placeholder="time"
          // onChange={timeHandler}
          min="0"
          // value={newTime}
          name="time"
          required
        />
        </div>
        <br />
        <div>
        <input
          type="url"
          onChange={handleChange}
          placeholder="image"
          // onChange={imgHandler}
          // value={newImage}
          name="image"
          required
        />
        </div>
       <br />
        <div>
        <input
          type="number"
          onChange={handleChange}
          placeholder="min"
          // onChange={minHandler}
          // value={newMin}
          name="min"
          required
        />
        </div>
      <br />
        <div>
        <input
          type="number"
          onChange={handleChange}
          placeholder="votes"
          // onChange={votesHandler}
          min="0"
          // value={newVotes}
          name="votes"
          required
        />
        </div>
        <br />
        <div>
        <input
          type="number"
          onChange={handleChange}
          placeholder="reviews"
          // onChange={revHandler}
          min="0"
          name="reviews"
          // value={newReviews}
          required
        />
        </div>
       <br />
        <div>
        <input
          type="number"
          onChange={handleChange}
          placeholder="rating"
          // onChange={ratHandler}
          step="0.1"
          min="0"
          max="5"
          name="rating"
          // value={newRating}
          required
        />
        </div>
        <br />
        <div>
        <input type="submit" value="Submit" />
        </div>
        
      </form>
   
  );
};

export default InputForm;
