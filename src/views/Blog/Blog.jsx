import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

function Blog() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    alert('You have subscribed! Our new information will be sent to your email.');
  };

  // Sample data for the cards
  const cardData = [
    { id: 1, image: 'path-to-image1.jpg', description: 'Card 1 Description' },
    { id: 2, image: 'path-to-image2.jpg', description: 'Card 2 Description' },
    { id: 3, image: 'path-to-image3.jpg', description: 'Card 3 Description' },
    { id: 4, image: 'path-to-image4.jpg', description: 'Card 4 Description' },
    { id: 5, image: 'path-to-image5.jpg', description: 'Card 5 Description' },
    { id: 6, image: 'path-to-image6.jpg', description: 'Card 6 Description' },
    { id: 7, image: 'path-to-image7.jpg', description: 'Card 7 Description' },
    { id: 8, image: 'path-to-image8.jpg', description: 'Card 8 Description' },
    { id: 9, image: 'path-to-image9.jpg', description: 'Card 9 Description' }
  ];

  return (
    <>
      <Navbar />
      
      {/* Adding an almond color background to the entire page */}
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#D5D8D4' }}>
        
        {/* Centering the logo at the very top of the page */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src="path-to-your-logo.png" 
            alt="Logo" 
            style={{ width: '120px', height: 'auto' }} 
          />
        </div>

        {/* Green Organic Farm Name */}
        <h1>Green Organic Farm</h1>

        {/* Horizontal White Line */}
        <hr style={{ borderColor: 'white', width: '80%', margin: '20px auto' }} />

        {/* Our Worldview */}
        <h2 style={{ fontSize: '15px', fontFamily: 'Times New Roman' }}>Our Worldview</h2>

        {/* Get inspired and start something - Bold and Larger Font */}
        <p style={{ fontWeight: 'bold', fontSize: '30px', fontFamily: 'Times New Roman' }}>
          Get inspired and start something
        </p>

        {/* Subscribe to Newsletter Button */}
        <button
          onClick={handleSubscribe}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Times New Roman', 
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            marginTop: '20px'
          }}
        >
          Subscribe to Newsletter
        </button>

        {/* Show confirmation message when subscribed */}
        {isSubscribed && (
          <div style={{ marginTop: '20px', fontSize: '16px', color: 'white' }}>
            You have subscribed! Our new information will be sent to your email.
          </div>
        )}

        {/* Cards Section */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '40px',
            justifyItems: 'center' // Ensure cards are centered
          }}
        >
          {cardData.map(card => (
            <div 
              key={card.id} 
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '20px',
                backgroundColor: 'white',
                maxWidth: '300px', // Ensures each card has a max width
                textAlign: 'center', // Center content in the card
              }}
            >
              <img 
                src={card.image} 
                alt={`Card ${card.id}`} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <p style={{ marginTop: '10px', fontSize: '14px' }}>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Our Newsletter Section */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '25px', fontFamily: 'Times New Roman' }}>Our Newsletter</h2>
          <p style={{ fontSize: '18px', fontFamily: 'Times New Roman', maxWidth: '600px', margin: '0 auto' }}>
            Stay up to date with the latest news, articles, and updates from Green Organic Farm. Subscribe to our newsletter for more!
          </p>
        </div>

        {/* Input Fields for Name and Email */}
        <div style={{ marginTop: '40px' }}>
          <div>
            <input 
              type="text" 
              placeholder="Enter your name" 
              style={{
                padding: '10px',
                fontSize: '16px',
                width: '300px',
                margin: '10px 0',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: 'white', // White background for input
                textAlign: 'center'
              }}
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{
                padding: '10px',
                fontSize: '16px',
                width: '300px',
                margin: '10px 0',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: 'white', // White background for input
                textAlign: 'center'
              }}
            />
          </div>

          {/* Subscribe Button Below Input Fields */}
          <button
            onClick={handleSubscribe}
            style={{
              padding: '12px 25px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              marginTop: '20px'
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Image placed in front of the box (right side, outside the box) */}
      <div 
        style={{
          position: 'absolute', // Positioning it outside of the box
          top: '60px', // Adjust this to align the image with the content
          right: '10px', // Position to the right side of the box
          zIndex: 1, // Ensure it's in front of the content box
          width: '40%', // Adjust image size
        }}
      >
        <img 
          src="path-to-your-right-image.jpg" 
          alt="Right Side Image" 
          style={{ 
            width: '100%',
            height: 'auto',
            borderRadius: '8px'
          }} 
        />
      </div>

      {/* New Content Box on the Left Side */}
      <div style={{
        backgroundColor: '#D1C6B1', // Dark Almond color
        padding: '30px',
        marginTop: '60px',
        marginLeft: '50px',
        width: '45%', // Left side of the page (half-width)
        textAlign: 'left',
        borderRadius: '10px',
        position: 'relative', // Make sure the image is positioned in front of the box
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start' // Align content to the left
      }}>
        {/* Left Side Content */}
        <div style={{ zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img 
              src="path-to-your-logo.png" 
              alt="Logo" 
              style={{ width: '120px', height: 'auto' }} 
            />
          </div>

          {/* Green Organic Farm Text */}
          <h2 style={{ fontSize: '24px', fontFamily: 'Times New Roman', fontWeight: 'bold' }}>
            Green Organic Farm
          </h2>

          {/* On a mission text */}
          <p style={{
            fontSize: '18px', 
            fontFamily: 'Times New Roman',
            color: '#333', 
            marginTop: '15px'
          }}>
            On a mission to create Health and Wellbeing for everyone.
          </p>

          {/* Try Now Button */}
          <button
            style={{
              padding: '12px 25px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              marginTop: '20px'
            }}
          >
            Try Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
