import React from 'react';

const GoogleMap = () => {
    return (
        <div  style={{ display: 'block', margin: 'auto', textAlign: 'center' }}>
            <iframe
                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.0181986497306!2d79.07552539999999!3d21.189266999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c11b47a87009%3A0x1b131c1693c8838e!2sProfuse%20Transtech%20Solution%20Pvt.%20Ltd-%20Digital%20Marketing%20and%20IT%20services!5e0!3m2!1sen!2sin!4v1682503154120!5m2!1sen!2sin"}
                width="100%"
                height="280"
                style={{ border: 0 }}
                className='mb-4 card-style'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default GoogleMap;
