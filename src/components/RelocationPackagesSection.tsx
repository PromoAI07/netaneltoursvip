import React from 'react';

const RelocationPackagesSection = () => {
    return (
        <div className="relocation-packages">
            <h2>Our Relocation Packages</h2>
            <div className="package">
                <h3>Smart Start Consultation</h3>
                <p>Price: <strong>$299</strong></p>
                <p>Get started on your new journey with our expert guidance.</p>
                <button>Start Smart</button>
            </div>
            <div className="package most-popular">
                <h3>Guided Relocation</h3>
                <p>Price: <strong>$890 - $1,490</strong></p>
                <p>This option is <strong>Most Popular</strong> among our clients. Let us guide you through every step of the relocation process.</p>
                <button>Relocate With Guidance</button>
            </div>
            <div className="package">
                <h3>VIP Full Relocation</h3>
                <p>Price: <strong>$2,500+</strong></p>
                <p>Experience our premium service, ensuring a seamless transition to your new home.</p>
                <button>Go VIP</button>
            </div>
            <div className="trust-section">
                <h4>30-Day Guarantee</h4>
                <p>We are committed to taking care of you until you are settled in your new home. If you aren't satisfied within the first 30 days, we will ensure you're taken care of!</p>
            </div>
        </div>
    );
};

export default RelocationPackagesSection;