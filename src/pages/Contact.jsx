import React, { useState } from 'react';
import './Contact.css';



const Contact = () => {
  return (
    <div className="contact-page page-container">
      ...
    </div>
  );
};

export default Contact;










// import '../pages.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Formulaire soumis:', formData);
//     // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
//     alert('Merci pour votre message! Je vous répondrai bientôt.');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   return (
//     <div className="page-container">
//       <div className="page-content">
//         <h1>Contact</h1>
        
//         <div className="contact-info">
//           <div className="info-block">
//             <h3>Coordonnées</h3>
//             <p><strong>Email:</strong> kevin.thiry@example.com</p>
//             <p><strong>Téléphone:</strong> +33 6 12 34 56 78</p>
//             <p><strong>Localisation:</strong> Paris, France</p>
//           </div>
          
//           <div className="info-block">
//             <h3>Réseaux</h3>
//             <p><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
//             <p><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></p>
//             <p><a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
//           </div>
//         </div>

//         <form className="contact-form" onSubmit={handleSubmit}>
//           <h3>Envoyez-moi un message</h3>
          
//           <div className="form-group">
//             <label htmlFor="name">Nom</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="subject">Sujet</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className="submit-btn">Envoyer</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
