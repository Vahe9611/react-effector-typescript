import React from "react";

interface Props {
  value: 'hourly' | 'daily',
  onChange: (value: string) => void
}

const ForestType: React.FC<Props> = ({value, onChange}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div>
      <input 
        type="radio" 
        value="hourly" 
        checked={value === 'hourly'} 
        name="choices" 
        id="hourly" 
        onChange={handleChange} 
      />
      <label htmlFor="hourly">Hourly</label>

      <input 
        type="radio" 
        value="daily" 
        checked={value === 'daily'} 
        name="choices" 
        id="daily" 
        onChange={handleChange} 
      />
      <label htmlFor="daily">Daily</label>
    </div>
  );
};

export default ForestType;