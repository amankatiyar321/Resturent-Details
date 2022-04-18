import React from 'react'
import './card.css'
import Carddata from '../Carddata.json'

// import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
      
        const CardData=(props)=>
        {
            console.log(Carddata);
            return(
                <>
                <div className="container">
                    {/* map through the data and display the cards */}
                   {
                         Carddata.map((ele)=>(
                            <div  key={ele.id}>
                            <div className="card" >
                                <div  className='deatails'>
                                <p>{ele.date}</p>
                                <p className='casseStudy'>{ele.CaseStudy}</p>
                                <h3>{ele.name}</h3>
                                <h4>{ele.Desktop}</h4>
                                </div>
                             
                              <div>
                              <img className='logos' src={ele.logo} alt={ele.name} />
                             
            
                              </div>
            
                            </div>
                          </div>
                       ))
                   }
                
                </div>
                </>
            )
        }

export default CardData