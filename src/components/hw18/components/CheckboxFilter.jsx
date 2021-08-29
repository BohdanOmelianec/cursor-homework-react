export default function CheckboxFilter ({onChange}) {
    return(
        <div className="filter_box">
            <label htmlFor="male">
                <input 
                    onChange={onChange} 
                    type="checkbox" 
                    id="male" 
                    name="male" 
                    value="male"
                ></input>
            Male</label>
            <label htmlFor="female">
                <input 
                    onChange={onChange} 
                    type="checkbox" 
                    id="female" 
                    name="female" 
                    value="female"
                ></input>
            Female</label>
            <label htmlFor="not_specified">
                <input 
                    onChange={onChange} 
                    type="checkbox" 
                    id="not_specified" 
                    name="not_specified" 
                    value="undefined"
                ></input>
           Not specified</label><br/><br/>

        </div>
    )
}