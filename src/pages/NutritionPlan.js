import React, { useState } from 'react';
import '../styles/nutrition.css';

function NutritionPlan() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    height: '',
    weight: '',
    sex: '',
    age: '',
    goal: '',
    activityLevel: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    alert('Form submitted!');

    e.preventDefault();
    setSubmitted(true);
  };

  const inputFields = [
    { name: 'fullName', type: 'text', placeholder: 'Full Name' },
    { name: 'phone', type: 'tel', placeholder: 'Phone Number' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'age', type: 'number', placeholder: 'Age' },
    { name: 'height', type: 'number', placeholder: 'Height (cm)' },
    { name: 'weight', type: 'number', placeholder: 'Weight (kg)' },
  ];

  const selectFields = [
    {
      name: 'sex',
      options: [
        { value: '', label: 'Select Sex' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
    },
    {
      name: 'goal',
      options: [
        { value: '', label: 'Fitness Goal' },
        { value: 'lose', label: 'Lose Weight' },
        { value: 'gain', label: 'Gain Muscle' },
        { value: 'maintain', label: 'Maintain' },
      ],
    },
    {
      name: 'activityLevel',
      options: [
        { value: '', label: 'Activity Level' },
        { value: 'low', label: 'Low (sedentary)' },
        { value: 'moderate', label: 'Moderate (2–3 workouts/week)' },
        { value: 'high', label: 'High (5+ workouts/week)' },
      ],
    },
  ];

  return (
    <div className="nutrition-container">
      <h2>Get Your Custom Nutrition Plan</h2>

      {submitted && (
        <div className="success-message" style={{ marginBottom: '1rem', color: 'green' }}>
           Plan generated for {formData.fullName}!
        </div>
      )}

      <form onSubmit={handleSubmit} className="nutrition-form">
        {inputFields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            required
          />
        ))}

        {selectFields.map((select) => (
          <select
            key={select.name}
            name={select.name}
            value={formData[select.name]}
            onChange={handleChange}
            required
          >
            {select.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ))}

        <button type="submit" className="button">Generate Plan</button>
      </form>
    </div>
  );
}

export default NutritionPlan;
