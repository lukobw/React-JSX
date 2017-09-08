
var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <form className={'contactForm form-inline'}>
                <input className={'form-control'} type={'text'} placeholder={'Name'} value={this.props.contact.firstName}></input>
                <input className={'form-control'} type={'text'} placeholder={'Surname'} value={this.props.contact.lastName}></input>
                <input className={'form-control'} type={'email'} placeholder={'Email'} value={this.props.contact.email}></input>
                <button className={'btn btn-primary'} type={'submit'}>Add contact</button>
            </form>
        );
    },
});