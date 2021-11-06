const EventCalendar: React.FC = ({ children }) => {
    return (
        <div className="container">
            <div className="event-card-wrapper">
                {children}
            </div>
        </div>
    );
};

export default EventCalendar;
