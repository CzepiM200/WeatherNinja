import React from 'react';

const Form = props => {
    return (
        <div className="input-group">
            <select onChange={props.change} 
            className="custom-select" 
            id="inputGroupSelect03" 
            aria-label="Example select with button addon">
                <option value="3081368">Wrocław</option>
                <option value="6695624">Warszawa</option>
                <option value="3094802">Kraków</option>
                <option value="3093133">Łódź</option>
                <option value="7530858">Poznań</option>
                <option value="7531002">Gdańsk</option>
                <option value="7531766">Szczecin</option>
                <option value="3102014">Bydgoszcz</option>
                <option value="765876" >Lublin</option>
                <option value="3096472">Katowice</option>
                <option value="7530819">Rzeszów</option>
                <option value="757957">Strzyżów</option>
            </select>
        </div>
    );
};

export default Form;