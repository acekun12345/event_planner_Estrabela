import React from 'react';
import './EventPlanner.css';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            {/* Header Section */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            {/* Description Section */}
            <section className="description">
                <p>
                    Plan and organize your events effortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.
                </p>
                <button className="get-started-button">Get Started</button>
            </section>

            {/* Event Categories Section */}
            <section className="events_categories">
                <ul>
                    <h1>Social Events:</h1>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby showers</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                <ul>
                    <h1>Entertainment Events:</h1>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h1>Community Events:</h1>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>

            {/* Features Section */}
            <section className="features">
                <h1>Features</h1>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management and RSVPs</li>
                    <li>Budget tracking and expense management</li>
                    <li>Vendor coordination and communication</li>
                </ul>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h1>Testimonials</h1>
                <div className="testimonial">
                    <h2>"Event Planner made organizing my wedding a breeze. Highly recommended!"</h2>
                    <p>- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <h2>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</h2>
                    <p>- John Smith</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact">
                {/* Section heading */}
                <h2>Contact Us</h2>
                {/* Contact form */}
                <form>
                    {/* Name input field */}
                    <input type="text" placeholder="Name" />
                    {/* Email input field */}
                    <input type="email" placeholder="Email" />
                    {/* Message textarea */}
                    <textarea placeholder="Message"></textarea>
                    {/* Submit button */}
                    <button className="submit-button">Send</button>
                </form>
            </section>
        </div>
    );
};

export default EventPlanner;