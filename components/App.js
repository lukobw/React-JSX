var contacts = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe.com',
    },
    {
        id: 2,
        firstName: 'Alex',
        lastName: 'Black',
        email: 'alex.black@example.com',
    },
    {
        id: 3,
        firstName: 'Ben',
        lastName: 'Still',
        email: 'ben.still@example.com',
    }
];
  
var contactForm = {
    firstName: '', 
    lastName: '',
    email: '',
};
  
App = React.createClass({
    render: function() {
        return (
            <div className={'app'}>
                <h2 className={'titleForm'}>Contact form</h2>
                <ContactForm contact={contactForm}></ContactForm>
                <Contacts items={contacts}></Contacts>
            </div>
        );
    }
});