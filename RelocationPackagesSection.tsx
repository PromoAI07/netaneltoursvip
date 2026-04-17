import React from 'react';

const RelocationPackagesSection = () => {
    return (
        <section className="relocation-packages">
            <h2>Relocation Packages</h2>
            <div className="pain-points">
                <h3>Pain Points</h3>
                <ul>
                    <li>Stress of moving</li>
                    <li>Lack of local knowledge</li>
                    <li>Time-consuming processes</li>
                    <li>High costs of moving logistics</li>
                </ul>
            </div>
            <div className="packages">
                <div className="package">
                    <h3>Smart Start Consultation</h3>
                    <p>Price: $299</p>
                    <p>Description: A one-hour consultation that sets the stage for a smooth relocation.</p>
                    <h4>Features:</h4>
                    <ul>
                        <li>Personalized relocation strategy</li>
                        <li>Access to resources and tools</li>
                    </ul>
                </div>
                <div className="package">
                    <h3>Guided Relocation</h3>
                    <p>Price: $890 - $1,490</p>
                    <p>Description: A comprehensive package that includes assistance through every step of the relocation process.</p>
                    <h4>Features:</h4>
                    <ul>
                        <li>Customized moving plans</li>
                        <li>On-site support during the move</li>
                    </ul>
                </div>
                <div className="package">
                    <h3>VIP Full Relocation</h3>
                    <p>Price: $2,500+</p>
                    <p>Description: Our premium package offering complete management of your relocation with luxury services.</p>
                    <h4>Features:</h4>
                    <ul>
                        <li>All-inclusive management</li>
                        <li>Exclusive access to VIP services</li>
                    </ul>
                </div>
            </div>
            <div className="trust-section">
                <h3>Why Trust Us?</h3>
                <p>With years of experience and a dedicated team, we ensure a hassle-free relocation experience.</p>
            </div>
        </section>
    );
};

export default RelocationPackagesSection;