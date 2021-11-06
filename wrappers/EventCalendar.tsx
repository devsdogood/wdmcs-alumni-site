const EventCalendar: React.FC = ({ children }) => {
    return (
        <div style={{border: 'green 1px solid'}}>
            <div className="event-card-wrapper">
                {children}
            </div>
        </div>
    );
};

export default EventCalendar;
