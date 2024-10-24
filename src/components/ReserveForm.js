import { useContext } from 'react';
import './ReserveForm.css'
import AppContext from '../context/AppContext';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Success_Icon from "../icons_assets/success.jpg";

function ReserveForm() {
    const [availableTimes,setAvailableTimes] = useState([])
    const [time, setTime] = useState("")
    const [validForm,setValidForm] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
    const navigate = useNavigate()
    const [runCount, setRunCount] = useState(1);
    useEffect(()=>{
        const x = fetchAPI(new Date())
        setAvailableTimes(x)
        setTime(x[0])
    },[])
    useEffect(() => {
        if (runCount < 2) {
            console.log("First run")
            console.log(runCount)
            setRunCount(2)
            return;
        }
        console.log("Re-render")
        const timer = setTimeout(()=> {
            navigate("/")
        }, 2000)
        return () => clearTimeout(timer);
    },[navigate, validForm])
    const setDrawerState = useOutletContext()
    const { drawerState } = useContext(AppContext)
    //const [submit,setSubmit] = useState(false);
    //const [date, setDate] = useState(`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2,"0")}-${String(currentDate.getDate()).padStart(2,"0")}`)
    const [date, setDate] = useState("")
    const [numPeople, setNumPeople] = useState("1");
    const [occasion, setOccasion] = useState("birthday");
    const [dateClass, setDateClass] = useState("")
    const [timeClass, setTimeClass] = useState("")
    // console.log("submit!" + `${submit}`)
    // console.log("validForm!" + `${validForm}`)

    if(validForm) {
        console.log("Submitted!")
        return (
            <div className="reserve-success">
                <p>Reservation Booked! See you Soon!</p>
                <img src={Success_Icon} width="300px" />
            </div>
        )
    }

    return (
        <form className="reserve-form" onClick={()=>{
            if(drawerState == "open"){
            setDrawerState("closed");
            }
            }}
            onSubmit={(e) => {
                e.preventDefault();
                console.log(time)
                setValidForm(validateForm(numPeople, date, occasion,time,availableTimes));
            }
            }
            >
            <div>
                <label htmlFor="date">Choose Date:</label>
                <input className={`${dateClass}`} type="date" id="date" required value={date} onChange={(e)=>{
                    const newDate = e.target.value
                    setDate(newDate);
                    setDateClass("");
                    setCanSubmit(validateForm(numPeople,newDate,occasion,time,availableTimes));
                    }}
                    onBlur={(e) => {
                       if (validDate(e.target.value)) {
                        setDateClass("")
                       } else {
                        setDateClass("error")
                       }
                    }}
                />
            </div>
            <div>
                <label htmlFor="people">Number of people</label>
                <select id="people" defaultValue={numPeople} onChange={(e) => {
                    setNumPeople(e.target.value);
                }}>
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">Greater than 4</option>
                </select>
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select className={`${timeClass}`} id="res-time" defaultValue={time}
                onChange={(e) => {
                    setTime(e.target.value);
                    if (validateTime(e.target.value,availableTimes)) {
                        setTimeClass("")
                    } else {
                        setTimeClass("error")
                    }
                }}
                onBlur = {(e) => {
                    if (validateTime(e.target.value, availableTimes)) {
                        console.log("everything is ok")
                        setTimeClass("")
                    } else {
                        console.log("everything is NOT ok!")
                        setTimeClass("error")
                    }
                }}
                >
                    {availableTimes.map((timeStamp) => {
                        return <option value={timeStamp} key={timeStamp}>{timeStamp}</option>
                    }
                    )}
                </select>
            </div>
            <div>
                <label htmlFor="occasion">Ocassion</label>
                <select id="occasion" defaultValue={occasion} onChange={(e) => {
                    setOccasion(e.target.value)
                }}>
                    <option value="birthday">birthday</option>
                    <option value="anniversary">anniversary</option>
                    <option value="graduation">graduation</option>
                </select>
            </div>
            {/* <button onClick={(e) => {
                e.preventDefault();
                setValidForm(validateForm(numPeople, date, occasion,time));
            }
            }>Reserve table</button> */}
            <input type="submit" value="Reserve a table"
             disabled={!(canSubmit)}
             />
        </form>
    )

}
function validDate(date) {
    if (date) {
        return true
    }
    return false
}
function validateTime(time,availableTimes) {
    return availableTimes.includes(time)
}

function validateForm(numGuests, date, occasion, time,availableTimes) {
    const numGuestsValid = numGuests ? true : false
    const dateValid = date ? true : false
    const occasionValid = occasion ? true : false
    const result =  numGuestsValid && dateValid && occasionValid && validateTime(time,availableTimes)
    console.log("Result: " + date)
    return result
}

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

export default ReserveForm;