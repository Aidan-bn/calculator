import { useRef, useState } from "react";

const FormComponent = () => {
    const options = ['BMW', 'Audi', 'Merceedz', 'Nissan']
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
        carBrand: '',
        isChecked: false,
        gender: '',
        price: 0
    });

    const ref = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(ref.current.value);
        console.log(input);
    }

    const handleChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value
        });
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setInput((input) => ({
            ...input,
            [event.target.name]: value
        }));
    };

    const carBrandOptions = options.map((option, key) => (
        <option value={option} key={key}>
            {option}
        </option>
    ))
    return(
        <>
            <h6>
                The following form will tell you something
            </h6>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" defaultValue="Hello" ref={ref}/>
                </label>
                {/* <button
                  type="submit"
                  onClick={handleSubmit}
                >
                    SEND
                </button> */}
                <label>
                    Name:
                    <input name="name" type="text" value={input.name} onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <input name="email" type="text" value={input.email} onChange={handleChange}/>
                </label>
                <h4>
                    The guy his name was {input.name} with email: {input.email}
                </h4>
                <label>
                    Message:
                    <textarea
                    name="message"
                    value={input.message}
                    onChange={handleChange}
                    />
                </label>
                <h4>
                    My Boss' message {input.message}
                </h4>
                <select
                  name="carBrand"
                  value={input.carBrand}
                  onChange={handleChange}
                  >
                    <option value={''} disabled>
                        -- Pic your subject
                    </option>
                    {carBrandOptions}
                </select>
                <h4>Offer received till now? Is it checked? : {input.isChecked ? 'Yes' : 'No'}</h4>
                <label>
                    <input
                      type="checkbox"
                      name="isChecked"
                      onChange={handleChange}/>
                      Lunch
                </label>
                <label>
                    <input
                      type="checkbox"
                      name="isChecked"
                      onChange={handleChange}/>
                      Dinner
                </label>
                <h5>Gender : {input.gender}</h5>
                <label>
                    <input
                    type='radio'
                    name='gender'
                    value='Male'
                    checked={input.gender === 'Male'}
                    onChange={handleChange}/>
                    {''}
                    Male
                </label>
                <label>
                    <input
                    type='radio'
                    name='gender'
                    value='Female'
                    checked={input.gender === 'Female'}
                    onChange={handleChange}
                    />
                    {''}
                    Female
                </label>
                <h4>Price  Tsh: {input.price}</h4>
                <label>
                    Price (between 0 and 100):
                    <input
                    type="range"
                    name="price"
                    min='0'
                    max='100'
                    value={input.price}
                    onChange={handleChange}
                    />
                </label>
                <button>
                    Submit
                </button>
            </form>
        </>
    )
}

export default FormComponent;
