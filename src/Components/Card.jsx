import {React, useState} from 'react';
import {Collapse} from 'react-collapse';


const Card = ({
  _id,
  name, 
  description, 
  image, 
  longitud,
  longitud2,
  longitud3, 
  price,
  price2,
  price3
}) => {

  const [opened, setOpened] = useState(false);


  const firtstHalfDescription = description.slice(0,136)
  const secondHalfDescription = description.slice(136, description.length)
  const descriptionConcat = firtstHalfDescription.concat(secondHalfDescription)
  const descriptionEmpty = ""


  function handleOpened() {
    setOpened(true)
  }

  function handleClosened() {
    setOpened(false)
  }



  return (
    <div className="overflow-hidden flex items-center justify-center bg-indigo-50 px-4">
  <div className="max-w-sm max-h-max overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl m-4 mb-16">
    <img src={image} alt="plant" className="max-w-xl h-96 w-full object-cover" />
    <div className="p-5 max-w-sm">
      <h1 className="text-2xl mb-5 text-center text-extrabold">{name}</h1>
      <p onMouseEnter={handleOpened} onMouseLeave={handleClosened} className="text-medium mb-5 text-gray-700">
         {opened ? descriptionEmpty : firtstHalfDescription} 
          {<Collapse isOpened={opened}>
          {opened ? description : null}
         </Collapse>}
      </p>
      <p className="text-medium mb-5 text-gray-700">CM: {longitud} ${price}</p>
      <p className="text-medium mb-5 text-gray-700">{longitud2 ? "CM" : null} {longitud2 ? longitud2 : null} {price2 ? "$" : null} {price2 ? price2 : null}</p>
      <p className="text-medium mb-5 text-gray-700">{longitud3 ? "CM" : null} {longitud3 ? longitud3 : null} {price3 ? "$" : null} {price3 ? price3 : null}</p>
      <a href="https://wa.me/+5493434808852">
      <button className="w-full rounded-md bg-orange-100  py-2 text-gray-700 hover:bg-indigo-500 hover:shadow-md duration-75">Encargar</button>
      </a>
    </div>
  </div>
</div>
    
)
};

export default Card;